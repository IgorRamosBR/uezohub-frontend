import { UsuarioModule } from './usuario/usuario.module';
import { ConteudoService } from './conteudo/conteudo.service';
import { AlunoService } from './aluno/aluno.service';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';

import { ToastyModule } from 'ng2-toasty';
import { MatToolbarModule, MatDialogModule, MatButtonModule } from '@angular/material';
import { ImageCropperModule } from 'ngx-image-cropper';
import { JwtHelper } from 'angular2-jwt';

import { ProfessorService } from './professor/professor.service';
import { CursoService } from './cursos/curso.service';
import { CursosModule } from './cursos/cursos.module';
import { AppRoutingModule } from './app-routing.module';
import { PainelAlunoComponent } from './aluno/painel-aluno/painel-aluno.component';
import { PainelCoordenadorComponent } from './coordenador/painel-coordenador/painel-coordenador.component';
import { CoreModule } from './core/core.module';
import { AuthService } from './seguranca/auth.service';
import { ProfessorModule } from './professor/professor.module';
import { CoordenadorModule } from './coordenador/coordenador.module';
import { SharedModule } from './shared/shared.module';
import { IndexModule } from './index/index.module';
import { AlunoModule } from './aluno/aluno.module';
import { DisciplinaModule } from './disciplina/disciplina.module';
import { DisciplinaService } from './disciplina/disciplina.service';
import { SegurancaModule } from './seguranca/seguranca.module';
import { CoordenadorService } from './coordenador/coordenador.service';
import { ConteudoModule } from './conteudo/conteudo.module';
import { UsuarioService } from './usuario/usuario.service';
import { UploadFotoDialogComponent } from './core/upload-foto-dialog/upload-foto-dialog.component';


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
    UsuarioModule,
    CursosModule,
    DisciplinaModule,
    ConteudoModule,
    SegurancaModule,
    IndexModule,
    SharedModule,
    CoreModule
  ],
  providers: [
    CursoService,
    DisciplinaService,
    ProfessorService,
    CoordenadorService,
    AlunoService,
    UsuarioService,
    AuthService,
    ConteudoService,

    JwtHelper
  ],
  entryComponents: [UploadFotoDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

}
