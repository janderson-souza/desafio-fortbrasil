import { Injectable } from '@angular/core';
import { Pessoa } from '../model/pessoa';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AngularFirestore, DocumentChangeAction, CollectionReference } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {
  private dbPath = '/pessoa-fisica';

  constructor(private db: AngularFirestore) { }

  salvar(pessoa: Pessoa): Promise<any> {
    return this.db.collection<Pessoa>(this.dbPath).add(pessoa);
  }

  atualizar(id, pessoa: Pessoa): Promise<any> {
    return this.db.doc(this.dbPath + "/" + id).update(pessoa);
  }

  getPessoas(pessoa: Pessoa): Promise<any> {
    console.log(pessoa);
    return new Promise<any>(resolve => {
        this.db.collection(this.dbPath, ref => this.createQuery(ref, 100, pessoa)).snapshotChanges().pipe(
          map((actions: DocumentChangeAction<Pessoa>[]) => {
            return actions.map((a: DocumentChangeAction<Pessoa>) => {
              let data: Pessoa = a.payload.doc.data() as Pessoa;
              data.id = a.payload.doc.id;
              return data;
            });
          })
        )
        .subscribe(snapshots => {
          resolve(snapshots)
        })
    });
  }

  consultarPorId(id): Observable<Pessoa> {
    return new Observable((observer) => {
      this.db.doc<Pessoa>(this.dbPath + "/" + id).get().subscribe(res =>{
        observer.next(res.data() as Pessoa);
      });
    })
  }

  
  createQuery(ref: CollectionReference, numberOfResults:number, pessoa: Pessoa): any {
    let query: firebase.firestore.Query = ref.limit(Number(numberOfResults));
    if(pessoa) {
      if(pessoa.nome)   {query = query.where('nome', '==', pessoa.nome)}
      if(pessoa.cpf)    {query = query.where('cpf', '==', pessoa.cpf)}
      if(pessoa.sexo)   {query = query.where('sexo', '==', pessoa.sexo)}
    }
    return query;
  }
}
