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
    private auth: AuthService
  ) {
    this.toastyConfig.theme = 'bootstrap';
  }

  exibindoNavegacao() {
    return this.router.url !== '/login';
  }

}
