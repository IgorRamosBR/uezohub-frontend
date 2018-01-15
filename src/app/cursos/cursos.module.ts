import { MatButtonModule, MatCheckboxModule, MatInputModule, MatTableModule, MatSortModule } from '@angular/material';
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
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatTableModule,
    MatSortModule
  ],
  declarations: [
    CursoComponent,
    CursosFormComponent,
    CursosTabelaComponent
  ],
  exports: [
    CursoComponent
  ]
})
export class CursosModule { }
