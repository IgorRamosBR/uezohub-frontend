import { UezohubHttpFormData } from './../seguranca/uezohub-http-form-data';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Conteudo } from './conteudo';
import { AuthService } from '../seguranca/auth.service';
import { HttpRequest } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class ConteudoService {

  conteudoUrl = environment.API_BASE_URL + '/conteudo';

  constructor(
    private http: UezohubHttpFormData,
    private authService: AuthService
  ) { }

  buscarTodos(): Promise<any> {
    return this.http.get(this.conteudoUrl)
      .toPromise()
      .then(response => response.json());
  }

  buscarConteudosPorDisciplina(id: number): Promise<any> {
    return this.http.get(`${this.conteudoUrl}/disciplina/${id}`)
      .toPromise()
      .then(response => response.json());
  }

  upload(file: FileList, conteudo: Conteudo): Promise<any> {
    const formData: FormData = new FormData();
    conteudo.usuario.id = 2;

    const files: FileList = file;

    formData.append('conteudo', JSON.stringify(conteudo));
    formData.append('file', file[0]);

    console.log(file);
    console.log(JSON.stringify(conteudo));
    return this.http.post(this.conteudoUrl, formData)
      .toPromise()
      .then(response => console.log(response));

  }

}
