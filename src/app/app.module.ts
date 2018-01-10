import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { ProfessorModule } from './professor/professor.module';
import { CoordenadorModule } from './coordenador/coordenador.module';
import { SharedModule } from './shared/shared.module';
import { IndexModule } from './index/index.module';
import { AlunoModule } from './aluno/aluno.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    AlunoModule,
    ProfessorModule,
    CoordenadorModule,
    IndexModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
