import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';
import { JwtHelper } from 'angular2-jwt';

@Injectable()
export class AuthService {

  oauthTokenUrl = 'http://ec2-54-175-162-148.compute-1.amazonaws.com:8080/oauth/token';
  jwtPayload: any;

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
        console.log(response);
        this.armazenarToken(response.json().access_token);
      })
      .catch(response => {
        console.log(response);
      });
  }

  private armazenarToken(token: string) {
    this.jwtPayload = this.jwtHelper.decodeToken(token);
    localStorage.setItem('token', token);
  }

  private carregarToken() {
    const token = localStorage.getItem('token');

    if (token) {
      this.armazenarToken(token);
    }
  }


}
