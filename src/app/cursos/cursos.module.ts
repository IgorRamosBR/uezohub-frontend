import { RouterModule } from '@angular/router';
import { EscolhaCursoComponent } from './escolha-curso/escolha-curso.component';
import { SharedModule } from './../shared/shared.module';
import { MatButtonModule, MatCheckboxModule, MatInputModule, MatTableModule, MatSortModule, MatCardModule } from '@angular/material';
import { CursosFormComponent } from './cursos-form/cursos-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursoComponent } from './curso/curso.component';
import { FormsModule } from '@angular/forms';
import { CursosTabelaComponent } from './cursos-tabela/cursos-tabela.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,

    SharedModule,

    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatTableModule,
    MatSortModule
  ],
  declarations: [
    CursoComponent,
    CursosFormComponent,
    CursosTabelaComponent,
    EscolhaCursoComponent
  ],
  exports: [
    CursoComponent,
    EscolhaCursoComponent
  ]
})
export class CursosModule { }
