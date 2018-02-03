import { Aluno } from './aluno';
import { Injectable } from '@angular/core';
import { AuthHttp } from 'angular2-jwt';
import { environment } from './../../environments/environment';

@Injectable()
export class AlunoService {

  alunoUrl = environment.API_BASE_URL + '/aluno';

  constructor(
    private http: AuthHttp
  ) { }

  buscarTodos(): Promise<any> {
    return this.http.get(this.alunoUrl)
      .toPromise()
      .then(response => response.json());
  }

  buscarPorId(id: number): Promise<any> {
    return this.http.get(`${this.alunoUrl}/${id}`)
      .toPromise()
      .then(response => response.json() as Aluno);
  }

  salvar(aluno: Aluno): Promise<any> {
    return this.http.post(this.alunoUrl, aluno)
      .toPromise()
      .then(response => response.json());
  }

  atualizar(id: number, aluno: Aluno): Promise<any> {
    return this.http.put(`${this.alunoUrl}/${id}`, aluno)
      .toPromise()
      .then(response => response.json());
  }

}
