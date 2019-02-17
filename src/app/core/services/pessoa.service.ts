import { Injectable } from '@angular/core';
import { Pessoa } from '../model/pessoa';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  constructor(private http: HttpClient) { }

  salvar(pessoa: Pessoa): Observable<any> {
    return this.http.post('', pessoa);
  }
}
