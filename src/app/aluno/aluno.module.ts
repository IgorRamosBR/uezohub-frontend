import { ConteudoModule } from './../conteudo/conteudo.module';
import { SharedModule } from './../shared/shared.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule, MatSortModule, MatInputModule, MatCardModule, MatButtonModule } from '@angular/material';
import { PainelAlunoComponent } from './painel-aluno/painel-aluno.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    SharedModule,
    ConteudoModule,

    MatTableModule,
    MatSortModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule
  ],
  declarations: [
    PainelAlunoComponent,
    AlunoFormComponent
  ],
  exports: [
    PainelAlunoComponent
  ]
})
export class AlunoModule { }
