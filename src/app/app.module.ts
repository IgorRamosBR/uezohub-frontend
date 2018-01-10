import { AlunoModule } from './aluno/aluno.module';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule, MatTableModule, MatSortModule, MatInputModule, MatCardModule } from '@angular/material';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { PainelProfessorComponent } from './painel-professor/painel-professor.component';
import { PainelCoordenadorComponent } from './painel-coordenador/painel-coordenador.component';
import { FormsModule } from '@angular/forms';
import { EscolhaCursoComponent } from './escolha-curso/escolha-curso.component';
import { PainelAlunoComponent } from './aluno/painel-aluno/painel-aluno.component';




@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    ToolbarComponent,
    PainelProfessorComponent,
    PainelCoordenadorComponent,
    EscolhaCursoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    AlunoModule,

    MatToolbarModule,
    MatSelectModule,
    MatButtonModule,
    MatTableModule,
    MatSortModule,
    MatInputModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
