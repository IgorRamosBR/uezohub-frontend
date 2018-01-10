import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbar, MatTableModule, MatSortModule, MatInputModule } from '@angular/material';
import { PainelAlunoComponent } from './painel-aluno/painel-aluno.component';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatTableModule,
    MatSortModule,
    MatInputModule
  ],
  declarations: [
    PainelAlunoComponent
  ],
  exports: [
    PainelAlunoComponent
  ]
})
export class AlunoModule { }
