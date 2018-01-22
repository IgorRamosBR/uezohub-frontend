import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatInputModule, MatButtonModule } from '@angular/material';

import { LoginFormComponent } from './login-form/login-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    MatInputModule,
    MatButtonModule
  ],
  declarations: [LoginFormComponent]
})
export class SegurancaModule { }
