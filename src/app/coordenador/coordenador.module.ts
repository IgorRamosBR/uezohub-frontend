import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule, MatInputModule, MatSortModule, MatTableModule, MatButtonModule, MatCheckboxModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PainelCoordenadorComponent } from './painel-coordenador/painel-coordenador.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatToolbarModule,
    MatTableModule,
    MatSortModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatCheckboxModule
  ],
  declarations: [
    PainelCoordenadorComponent,
  ],
  exports: [
    PainelCoordenadorComponent
  ]
})
export class CoordenadorModule { }
