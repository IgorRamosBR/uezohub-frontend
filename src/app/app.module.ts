import { CoreModule } from './core/core.module';
import { ProfessorService } from './professor/professor.service';
import { CursoService } from './cursos/curso.service';
import { CursosModule } from './cursos/cursos.module';
import { AppRoutingModule } from './app-routing.module';
import { PainelAlunoComponent } from './aluno/painel-aluno/painel-aluno.component';
import { PainelCoordenadorComponent } from './coordenador/painel-coordenador/painel-coordenador.component';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {ToastyModule} from 'ng2-toasty';

import { AppComponent } from './app.component';

import { ProfessorModule } from './professor/professor.module';
import { CoordenadorModule } from './coordenador/coordenador.module';
import { SharedModule } from './shared/shared.module';
import { IndexModule } from './index/index.module';
import { AlunoModule } from './aluno/aluno.module';
import { MatToolbarModule } from '@angular/material';
import { HttpModule } from '@angular/http';
import { DisciplinaModule } from './disciplina/disciplina.module';
import { DisciplinaService } from './disciplina/disciplina.service';
import { SegurancaModule } from './seguranca/seguranca.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,

    MatToolbarModule,
    ToastyModule.forRoot(),

    AppRoutingModule,
    AlunoModule,
    ProfessorModule,
    CoordenadorModule,
    CursosModule,
    DisciplinaModule,
    SegurancaModule,
    IndexModule,
    SharedModule,
    CoreModule
  ],
  providers: [CursoService, DisciplinaService, ProfessorService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
