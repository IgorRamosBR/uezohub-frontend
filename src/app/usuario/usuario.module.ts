import { MatInputModule, MatButtonModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AlterarSenhaComponent } from './alterar-senha/alterar-senha.component';
import { UsuarioFormComponent } from './usuario-form/usuario-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,

    MatInputModule,
    MatButtonModule
  ],
  declarations: [
    UsuarioFormComponent,
    AlterarSenhaComponent
  ],
  exports: [
    UsuarioFormComponent,
    AlterarSenhaComponent
  ]
})
export class UsuarioModule { }
