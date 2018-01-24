import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Http, RequestOptions } from '@angular/http';
import { MatInputModule, MatButtonModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthHttp, AuthConfig } from 'angular2-jwt';

import { UezohubHttp } from './uezohub-http';
import { AuthService } from './auth.service';
import { LoginFormComponent } from './login-form/login-form.component';
import { AuthGuard } from './auth.guard';



export function authHttpServiceFacotory(auth: AuthService, http: Http, options: RequestOptions) {
  const config = new AuthConfig({
    globalHeaders: [
      { 'Content-Type': 'application/json' }
    ]
  });
  return new UezohubHttp(auth, config, http, options);
}

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    MatInputModule,
    MatButtonModule
  ],
  declarations: [LoginFormComponent],
  providers: [
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFacotory,
      deps: [AuthService, Http, RequestOptions]
    },
    AuthGuard
  ]
})
export class SegurancaModule { }
