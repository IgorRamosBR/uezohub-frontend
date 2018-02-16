import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginFormComponent } from './seguranca/login-form/login-form.component';
import { ProfessorFormComponent } from './professor/professor-form/professor-form.component';
import { DisciplinaFormComponent } from './disciplina/disciplina-form/disciplina-form.component';
import { PainelCoordenadorComponent } from './coordenador/painel-coordenador/painel-coordenador.component';
import { CursoComponent } from './cursos/curso/curso.component';
import { IndexComponent } from './index/index.component';
import { CoordenadorFormComponent } from './coordenador/coordenador-form/coordenador-form.component';
import { AlunoFormComponent } from './aluno/aluno-form/aluno-form.component';
import { AuthGuard } from './seguranca/auth.guard';
import { PainelProfessorComponent } from './professor/painel-professor/painel-professor.component';
import { EscolhaCursoComponent } from './cursos/escolha-curso/escolha-curso.component';
import { PainelAlunoComponent } from './aluno/painel-aluno/painel-aluno.component';
import { UsuarioFormComponent } from './usuario/usuario-form/usuario-form.component';
import { AlterarSenhaComponent } from './usuario/alterar-senha/alterar-senha.component';

const rotas: Routes = [
    {path: 'index', component: IndexComponent},
    {path: 'login', component: LoginFormComponent},
    {
      path: 'painel-coordenador',
      component: PainelCoordenadorComponent,
      canActivate: [AuthGuard],
      data: { roles: ['COORDENADOR'] }
    },
    {
      path: 'painel-professor',
      component: PainelProfessorComponent,
      canActivate: [AuthGuard],
      data: { roles: ['PROFESSOR'] }
    },
    {
      path: 'painel-aluno/:curso',
      component: PainelAlunoComponent,
      canActivate: [AuthGuard],
      data: { roles: ['ALUNO'] }
    },
    {
      path: 'cursos',
      component: CursoComponent,
      canActivate: [AuthGuard],
      data: { roles: ['COORDENADOR'] }
    },
    {
      path: 'disciplinas',
      component: DisciplinaFormComponent,
      canActivate: [AuthGuard],
      data: { roles: ['COORDENADOR'] }
    },
    {
      path: 'professor',
      component: ProfessorFormComponent,
      canActivate: [AuthGuard],
      data: { roles: ['COORDENADOR'] }
    },
    {
      path: 'coordenador',
      component: CoordenadorFormComponent,
      canActivate: [AuthGuard],
      data: { roles: ['COORDENADOR'] }
    },
    {
      path: 'aluno',
      component: AlunoFormComponent,
      canActivate: [AuthGuard],
      data: { roles: ['COORDENADOR'] }
    },
    {
      path: 'escolha-curso',
      component: EscolhaCursoComponent,
      canActivate: [AuthGuard],
      data: { roles: ['ALUNO'] }
    },
    {
      path: 'minha-conta',
      component: UsuarioFormComponent,
      canActivate: [AuthGuard],
      data: { roles: ['COORDENADOR', 'PROFESSOR', 'ALUNO'] }
    },
    {
      path: 'alterar-senha',
      component: AlterarSenhaComponent,
      canActivate: [AuthGuard],
      data: { roles: ['COORDENADOR', 'PROFESSOR', 'ALUNO'] }
    },
    {path: '**', redirectTo: 'login'}
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
