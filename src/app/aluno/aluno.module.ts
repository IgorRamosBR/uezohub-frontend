import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbar, MatTableModule, MatSortModule, MatInputModule, MatCardModule } from '@angular/material';
import { PainelAlunoComponent } from './painel-aluno/painel-aluno.component';
import { EscolhaCursoComponent } from './escolha-curso/escolha-curso.component';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatTableModule,
    MatSortModule,
    MatInputModule,
    MatCardModule
  ],
  declarations: [
    PainelAlunoComponent,
    EscolhaCursoComponent
  ],
  exports: [
    PainelAlunoComponent,
    EscolhaCursoComponent
  ]
})
export class AlunoModule { }
