import { SharedModule } from './../shared/shared.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule, MatSortModule, MatInputModule, MatCardModule, MatButtonModule } from '@angular/material';
import { PainelAlunoComponent } from './painel-aluno/painel-aluno.component';
import { EscolhaCursoComponent } from './escolha-curso/escolha-curso.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    SharedModule,
    MatTableModule,
    MatSortModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule
  ],
  declarations: [
    PainelAlunoComponent,
    EscolhaCursoComponent,
    AlunoFormComponent
  ],
  exports: [
    PainelAlunoComponent,
    EscolhaCursoComponent
  ]
})
export class AlunoModule { }
