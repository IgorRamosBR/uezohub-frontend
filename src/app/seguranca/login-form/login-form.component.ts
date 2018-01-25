import { Router } from '@angular/router';
import { AuthService } from './../auth.service';
import { FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ErrorHandlerService } from '../../core/error-handler.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(
    private auth: AuthService,
    private errorHandler: ErrorHandlerService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  login(email: string, senha: string) {
    this.auth.login(email, senha)
      .then(() => {
        if(this.auth.temPermissao('COORDENADOR')) {
          this.router.navigate(['/painel-coordenador']);
        } else if (this.auth.temPermissao('PROFESSOR')) {
          this.router.navigate(['/painel-professor']);
        } else if (this.auth.temPermissao('ALUNO')) {
          this.router.navigate(['/painel-aluno']);
        }
      })
      .catch(erro => {
        this.errorHandler.handle(erro);
      });
  }

}
