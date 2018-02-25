import { SharedModule } from './../shared/shared.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule, MatInputModule, MatSortModule, MatTableModule, MatButtonModule, MatCheckboxModule, MatPaginatorModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PainelCoordenadorComponent } from './painel-coordenador/painel-coordenador.component';
import { FormsModule } from '@angular/forms';
import { CoordenadorFormComponent } from './coordenador-form/coordenador-form.component';
import { ConteudoModule } from '../conteudo/conteudo.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    
    MatToolbarModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,

    ConteudoModule,
    SharedModule
  ],
  declarations: [
    PainelCoordenadorComponent,
    CoordenadorFormComponent,
  ],
  exports: [
    PainelCoordenadorComponent
  ]
})
export class CoordenadorModule { }
