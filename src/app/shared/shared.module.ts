import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatInputModule, MatButtonModule, MatToolbarModule } from '@angular/material';

import { ToolbarComponent } from './toolbar/toolbar.component';
import { AtivoConversorPipe } from './ativo-conversor.pipe';
import { PrimeiroNomePipe } from './primeiro-nome.pipe';
import { UsuarioFormComponent } from '../usuario/usuario-form/usuario-form.component';
import { AlterarSenhaComponent } from '../usuario/alterar-senha/alterar-senha.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatToolbarModule,
    MatInputModule,
    MatButtonModule
  ],
  declarations: [
    ToolbarComponent,
    AtivoConversorPipe,
    PrimeiroNomePipe
  ],
  exports: [
    ToolbarComponent,
    AtivoConversorPipe,
    PrimeiroNomePipe
  ]
})
export class SharedModule { }
