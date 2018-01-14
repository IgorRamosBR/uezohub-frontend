import { MatButtonModule, MatCheckboxModule, MatInputModule } from '@angular/material';
import { CursosFormComponent } from './cursos-form/cursos-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursoComponent } from './curso/curso.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule
  ],
  declarations: [
    CursoComponent,
    CursosFormComponent
  ],
  exports: [
    CursoComponent
  ]
})
export class CursosModule { }
