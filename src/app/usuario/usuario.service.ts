import { UezohubHttpFormData } from './../seguranca/uezohub-http-form-data';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

import { AuthHttp } from 'angular2-jwt';
import 'rxjs/add/operator/toPromise';

import { AuthService } from './../seguranca/auth.service';

@Injectable()
export class UsuarioService {

  usuarioUrl = environment.API_BASE_URL + '/usuario';


  constructor(
    private http: AuthHttp,
    private fotoHttp: UezohubHttpFormData,
    private authService: AuthService
  ) { }

  buscarUsuarioPorId(id: number): Promise<any> {
    return this.http.get(`${this.usuarioUrl}/${id}`)
      .toPromise()
      .then(response => response.json());
      
  }
  verificaSenha(senha: string): Promise<any> {
    const id = this.authService.jwtPayload.id;
    return this.http.post(`${this.usuarioUrl}/verificaSenha/${id}`, senha)
      .toPromise()
      .then(response => response.json());
  }

  alterarSenha(senha: string): Promise<any> {
    const id = this.authService.jwtPayload.id;
    return this.http.put(`${this.usuarioUrl}/senha/${id}`, senha)
      .toPromise()
      .then(response => response.json());
  }

  salvarFoto(id: number, foto: string) {
    return this.fotoHttp.put(`${this.usuarioUrl}/foto/${id}`, foto)
      .toPromise()
      .then(response => response.json());
  }
}
