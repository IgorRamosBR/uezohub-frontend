import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';

import { AuthHttp } from 'angular2-jwt';

import { AuthService } from './auth.service';

@Injectable()
export class LogoutService {

  tokensRenokeUrl = environment.API_BASE_URL + '/tokens/revoke';

  constructor(
    private http: AuthHttp,
    private auth: AuthService
  ) { }

  logout() {
    return this.http.delete(this.tokensRenokeUrl, { withCredentials: true })
      .toPromise()
      .then(() => {
        this.auth.limparAccessToken();
      });
  }

}
