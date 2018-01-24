import { ErrorHandlerService } from './core/error-handler.service';
import { LogoutService } from './seguranca/logout.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './seguranca/auth.service';
import { ToastyConfig } from 'ng2-toasty';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  exibindoMenu = true;

  constructor(
    private toastyConfig: ToastyConfig,
    private router: Router,
    private errorHandler: ErrorHandlerService,
    private auth: AuthService,
    private logoutService: LogoutService
  ) {
    this.toastyConfig.theme = 'bootstrap';
  }

  exibindoNavegacao() {
    return this.router.url !== '/login';
  }

  logout() {
    this.logoutService.logout()
      .then(() => {
        this.router.navigate(['/login']);
      })
      .catch(erro => this.errorHandler.handle(erro));
  }


}
