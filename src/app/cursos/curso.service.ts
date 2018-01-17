import { Curso } from './curso';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class CursoService {

  cursoUrl = environment.API_BASE_URL + '/cursos';

  constructor(private http: Http) { }

  buscarTodos(): Promise<any> {
    return this.http.get(this.cursoUrl)
      .toPromise()
      .then(response => response.json());
    }

    salvar(curso: Curso): Promise<any> {
      if (curso.ativo === undefined) {
        curso.ativo = false;
      }
      return this.http.post(this.cursoUrl, curso)
      .toPromise()
      .then(response => response.json());
    }

    atualizar(id: number, curso: Curso): Promise<any> {
      return this.http.put(`${this.cursoUrl}/${id}`, curso)
        .toPromise()
        .then(response => response.json());
    }
  }
