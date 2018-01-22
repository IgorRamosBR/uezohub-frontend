import { LoginFormComponent } from './seguranca/login-form/login-form.component';
import { ProfessorFormComponent } from './professor/professor-form/professor-form.component';
import { DisciplinaFormComponent } from './disciplina/disciplina-form/disciplina-form.component';
import { PainelCoordenadorComponent } from './coordenador/painel-coordenador/painel-coordenador.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CursoComponent } from './cursos/curso/curso.component';
import { IndexComponent } from './index/index.component';

const rotas: Routes = [
    {path: 'index', component: IndexComponent},
    {path: 'login', component: LoginFormComponent},
    {path: 'painel-coordenador', component: PainelCoordenadorComponent},
    {path: 'cursos', component: CursoComponent},
    {path: 'disciplinas', component: DisciplinaFormComponent},
    {path: 'professor', component: ProfessorFormComponent},
    {path: '**', redirectTo: 'painel-coordenador'}
  ];

  @NgModule({
    imports: [
      RouterModule.forRoot(rotas),
     ],
     exports: [
         RouterModule
     ]
  })
  export class AppRoutingModule {

  }
