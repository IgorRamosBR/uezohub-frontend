import { Disciplina } from './disciplina';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class DisciplinaService {

  disciplinaUrl = environment.API_BASE_URL + '/disciplina';

  constructor(private http: Http) { }

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
