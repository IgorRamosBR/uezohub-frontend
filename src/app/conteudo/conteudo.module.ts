import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConteudoTabelaComponent } from './conteudo-tabela/conteudo-tabela.component';
import { ConteudoUploadFormComponent } from './conteudo-upload-form/conteudo-upload-form.component';
import { MatExpansionModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatSelectModule, MatTableModule, MatSortModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatExpansionModule,
    MatTableModule,
    MatSortModule
  ],
  declarations: [ConteudoTabelaComponent, ConteudoUploadFormComponent],
  exports: [ConteudoTabelaComponent, ConteudoUploadFormComponent]
})
export class ConteudoModule { }
