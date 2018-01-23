import { MatToolbarModule } from '@angular/material/toolbar';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtivoConversorPipe } from './ativo-conversor.pipe';
import { PrimeiroNomePipe } from './primeiro-nome.pipe';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule
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
