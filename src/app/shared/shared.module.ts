import { MatToolbarModule } from '@angular/material/toolbar';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtivoConversorPipe } from './ativo-conversor.pipe';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule
  ],
  declarations: [
    ToolbarComponent,
    AtivoConversorPipe
  ],
  exports: [
    ToolbarComponent,
    AtivoConversorPipe
  ]
})
export class SharedModule { }
