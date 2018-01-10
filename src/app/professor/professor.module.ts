import { SharedModule } from './../shared/shared.module';
import { MatInputModule, MatSortModule, MatTableModule, MatToolbarModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PainelProfessorComponent } from './painel-professor/painel-professor.component';

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
    PainelProfessorComponent
  ],
  exports: [
    PainelProfessorComponent
  ]
})
export class ProfessorModule { }
