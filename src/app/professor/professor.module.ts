import { SharedModule } from './../shared/shared.module';
import { MatInputModule, MatSortModule, MatTableModule, MatToolbarModule, MatButton, MatButtonModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PainelProfessorComponent } from './painel-professor/painel-professor.component';
import { ProfessorFormComponent } from './professor-form/professor-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    SharedModule,

    MatTableModule,
    MatSortModule,
    MatInputModule,
    MatButtonModule
  ],
  declarations: [
    PainelProfessorComponent,
    ProfessorFormComponent
  ],
  exports: [
    PainelProfessorComponent,
    ProfessorFormComponent
  ]
})
export class ProfessorModule { }
