import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';

import { AuthHttp } from 'angular2-jwt';

import { Coordenador } from './coordenador';

@Injectable()
export class CoordenadorService {

  coordenadorUrl = environment.API_BASE_URL + '/coordenador';

  constructor(
    private http: AuthHttp
  ) { }

  buscarTodos(): Promise<any> {
    return this.http.get(this.coordenadorUrl)
      .toPromise()
      .then(response => response.json());
  }

  buscarPorId(id: number): Promise<any> {
    return this.http.get(`${this.coordenadorUrl}/${id}`)
      .toPromise()
      .then(response => response.json() as Coordenador);
  }

  salvar(coordenador: Coordenador): Promise<any> {
    return this.http.post(this.coordenadorUrl, coordenador)
      .toPromise()
      .then(response => response.json());
  }

  atualizar(id: number, coordenador: Coordenador): Promise<any> {
    return this.http.put(`${this.coordenadorUrl}/${id}`, coordenador)
      .toPromise()
      .then(response => response.json());
  }

}
