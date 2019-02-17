import { Injectable } from '@angular/core';
import { Pessoa } from '../model/pessoa';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AngularFirestore, DocumentChangeAction } from '@angular/fire/firestore';
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

  getPessoas(): Promise<any> {
    return new Promise<any>(resolve => {
        this.db.collection(this.dbPath).snapshotChanges().pipe(
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
}
