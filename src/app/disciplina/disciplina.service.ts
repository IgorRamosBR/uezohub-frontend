import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

import { AuthHttp } from 'angular2-jwt';
import 'rxjs/add/operator/toPromise';

import { Disciplina } from './disciplina';

@Injectable()
export class DisciplinaService {

  disciplinaUrl = environment.API_BASE_URL + '/disciplina';

  constructor(private http: AuthHttp) { }

  buscarTodos(): Promise<any> {
    return this.http.get(this.disciplinaUrl)
      .toPromise()
      .then(response => response.json());
  }

  salvar(disciplina: Disciplina): Promise<any> {
    if (disciplina.ativo === undefined) {
      disciplina.ativo = false;
    }
    return this.http.post(this.disciplinaUrl, disciplina)
      .toPromise()
      .then(response => response.json());
  }

  atualizar(id: number, disciplina: Disciplina): Promise<any> {
    return this.http.put(`${this.disciplinaUrl}/${id}`, disciplina)
      .toPromise()
      .then(response => response.json());
  }
}
