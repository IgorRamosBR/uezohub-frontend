import { CursosModule } from './../cursos/cursos.module';
import { MatInputModule, MatButtonModule, MatCheckboxModule, MatSelectModule, MatTableModule, MatSortModule } from '@angular/material';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisciplinaFormComponent } from './disciplina-form/disciplina-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    SharedModule,
    CursosModule,

    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSelectModule,
    MatTableModule,
    MatSortModule
  ],
  declarations: [
    DisciplinaFormComponent
  ],
  exports: [
    DisciplinaFormComponent
  ]
})
export class DisciplinaModule { }
