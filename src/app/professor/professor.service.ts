import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

import { AuthHttp } from 'angular2-jwt';

import { Professor } from './professor';

@Injectable()
export class ProfessorService {

  professorUrl = environment.API_BASE_URL + '/professor';

  constructor(
    private http: AuthHttp
  ) { }

  buscarTodos(): Promise<any> {
    return this.http.get(this.professorUrl)
      .toPromise()
      .then(response => response.json());
  }

  salvar(professor: Professor): Promise<any> {
    return this.http.post(this.professorUrl, professor)
      .toPromise()
      .then(response => response.json());
  }

  atualizar(id: number, professor: Professor): Promise<any> {
    return this.http.put(`${this.professorUrl}/${id}`, professor)
      .toPromise()
      .then(response => response.json());
  }
}
