import { ToolbarComponent } from './toolbar/toolbar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtivoConversorPipe } from './ativo-conversor.pipe';
import { PrimeiroNomePipe } from './primeiro-nome.pipe';
import { UsuarioFormComponent } from './usuario-form/usuario-form.component';
import { FormsModule } from '@angular/forms';
import { MatInputModule, MatButtonModule, MatToolbarModule } from '@angular/material';

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
    PrimeiroNomePipe,
    UsuarioFormComponent
  ],
  exports: [
    ToolbarComponent,
    AtivoConversorPipe,
    PrimeiroNomePipe
  ]
})
export class SharedModule { }
