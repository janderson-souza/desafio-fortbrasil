import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EstadoService {

  constructor(private http: HttpClient) { }
  
  pesquisar(): Observable<any> {
    return this.http.get('/assets/mocks/estados-cidades.json');
  }

}
