import { AuthService } from './../auth.service';
import { FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email
  ]);

  senhaFormControl = new FormControl('', [
    Validators.minLength(6),
    Validators.required
  ]);

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  login(email: string, senha: string) {
    this.auth.login(email, senha);
  }

}
