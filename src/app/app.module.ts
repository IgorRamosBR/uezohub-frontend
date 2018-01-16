import { CursoService } from './cursos/curso.service';
import { CursosModule } from './cursos/cursos.module';
import { AppRoutingModule } from './app-routing.module';
import { PainelAlunoComponent } from './aluno/painel-aluno/painel-aluno.component';
import { PainelCoordenadorComponent } from './coordenador/painel-coordenador/painel-coordenador.component';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { ProfessorModule } from './professor/professor.module';
import { CoordenadorModule } from './coordenador/coordenador.module';
import { SharedModule } from './shared/shared.module';
import { IndexModule } from './index/index.module';
import { AlunoModule } from './aluno/aluno.module';
import { MatToolbarModule } from '@angular/material';
import { HttpModule } from '@angular/http';
import { DisciplinaModule } from './disciplina/disciplina.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,

    MatToolbarModule,

    AppRoutingModule,
    AlunoModule,
    ProfessorModule,
    CoordenadorModule,
    CursosModule,
    DisciplinaModule,
    IndexModule,
    SharedModule
  ],
  providers: [CursoService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
