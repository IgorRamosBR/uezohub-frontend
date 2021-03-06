import { ErrorHandlerService } from './../core/error-handler.service';
import { environment } from './../../environments/environment';
import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';
import { JwtHelper } from 'angular2-jwt';
import { Usuario } from '../usuario/usuario';

@Injectable()
export class AuthService {

  oauthTokenUrl = environment.API_BASE_URL + '/oauth/token';
  jwtPayload: any;
  usuarioLogado = new Usuario();

  constructor(
    private http: Http,
    private jwtHelper: JwtHelper
  ) {
    this.carregarToken();
  }

  login (usuario: string, senha: string): Promise<void> {
    const headers = new Headers();
    headers.append('Content-type', 'application/x-www-form-urlencoded');
    headers.append('Authorization', 'Basic dWktdWV6b2h1YjpzZWNyZXQ=');
    
    const body = `username=${usuario}&password=${senha}&grant_type=password`;
    
    return this.http.post(this.oauthTokenUrl, body, { headers })
    .toPromise()
    .then(response => {
      this.armazenarToken(response.json().access_token);
      this.buscaUsuarioLogado(response.json().access_token);
      })
      .catch(response => {
        if (response.status === 400) {
          const responseJson = response.json();
          
          if ( responseJson.error === 'invalid_grant' ) {
            return Promise.reject('Usuário e/ou senha inválidos!');
          }
        }
        
        return Promise.reject(response);
      });
    }
    
    private armazenarToken(token: string) {
      this.jwtPayload = this.jwtHelper.decodeToken(token);
      localStorage.setItem('token', token);
  }

  limparAccessToken() {
    localStorage.removeItem('token');
    this.jwtPayload = null;
  }

  private carregarToken() {
    const token = localStorage.getItem('token');

    if (token) {
      this.armazenarToken(token);
    }
  }

  obterNovoAccessToken(): Promise<void> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('Authorization', 'Basic dWktdWV6b2h1YjpzZWNyZXQ==');

    const body = 'grant_type=refresh_token';

    return this.http.post(this.oauthTokenUrl, body,
        { headers, withCredentials: true })
      .toPromise()
      .then(response => {
        this.armazenarToken(response.json().access_token);

        console.log('Novo access token criado!');

        return Promise.resolve(null);
      })
      .catch(response => {
        console.error('Erro ao renovar token.', response);
        return Promise.resolve(null);
      });
  }

  isAccessTokenInvalido() {
    const token = localStorage.getItem('token');

    return !token || this.jwtHelper.isTokenExpired(token);
  }



  buscaUsuarioLogado(token: string) {
    const url = `${environment.API_BASE_URL}/usuario/${this.jwtPayload.id}`;
    const headers = new Headers();
    headers.append('Authorization', `Bearer ${token}`);
    this.http.get(url, {headers})
      .toPromise()
      .then(response => this.usuarioLogado = response.json())
      .catch(error => {
          console.log(error);
      });
  }

  temPermissao(permissao: string) {
    return this.jwtPayload && this.jwtPayload.authorities.includes(permissao);
  }

  temQualquerPermissao(roles) {
    for (const role of roles) {
      if (this.temPermissao(role)) {
        return true;
      }
    }

    return false;
  }
}
