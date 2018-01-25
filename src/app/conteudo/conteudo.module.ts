import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConteudoTabelaComponent } from './conteudo-tabela/conteudo-tabela.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ConteudoTabelaComponent],
  exports: [ConteudoTabelaComponent]
})
export class ConteudoModule { }
