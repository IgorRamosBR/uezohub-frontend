import { AuthHttp } from 'angular2-jwt';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable()
export class ConteudoService {

  conteudoUrl = environment.API_BASE_URL + "/conteudo"

  constructor(
    private http: AuthHttp
  ) { }

  buscarTodos(): Promise<any> {
    return this.http.get(this.conteudoUrl)
      .toPromise()
      .then(response => response.json());
  }

}
