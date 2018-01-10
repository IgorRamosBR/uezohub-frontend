import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule, MatInputModule, MatSortModule, MatTableModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PainelCoordenadorComponent } from './painel-coordenador/painel-coordenador.component';

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
    PainelCoordenadorComponent
  ],
  exports: [
    PainelCoordenadorComponent
  ]
})
export class CoordenadorModule { }