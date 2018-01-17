import { SharedModule } from './../shared/shared.module';
import { MatInputModule, MatSortModule, MatTableModule, MatToolbarModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PainelProfessorComponent } from './painel-professor/painel-professor.component';
import { ProfessorFormComponent } from './professor-form/professor-form.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MatToolbarModule,
    MatTableModule,
    MatSortModule,
    MatInputModule
  ],
  declarations: [
    PainelProfessorComponent,
    ProfessorFormComponent
  ],
  exports: [
    PainelProfessorComponent
  ]
})
export class ProfessorModule { }
