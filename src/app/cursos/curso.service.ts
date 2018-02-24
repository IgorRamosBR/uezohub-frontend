import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

import { AuthHttp } from 'angular2-jwt';

import { Curso } from './curso';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class CursoService {

  cursoUrl = environment.API_BASE_URL + '/curso';

  constructor(private http: AuthHttp) { }

  buscarTodos(): Promise<any> {
    return this.http.get(this.cursoUrl)
      .toPromise()
      .then(response => response.json());
  }

  buscarPorId(id: number): Promise<any> {
    return this.http.get(`${this.cursoUrl}/${id}`)
      .toPromise()
      .then(response => response.json());
  }

  buscarPorNome(nome: string): Promise<any> {
    return this.http.get(`${this.cursoUrl}/nome/${nome}`)
      .toPromise()
      .then(response => response.json());
  }

  salvar(curso: Curso): Promise<any> {
    if (curso.ativo === undefined) {
      curso.ativo = false;
    }
    return this.http.post(this.cursoUrl, curso)
      .toPromise()
      .then(response => response.json() as Curso);
  }

  atualizar(id: number, curso: Curso): Promise<any> {
    return this.http.put(`${this.cursoUrl}/${id}`, curso)
      .toPromise()
      .then(response => response.json());
  }
}
