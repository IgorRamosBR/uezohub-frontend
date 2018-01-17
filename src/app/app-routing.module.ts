import { DisciplinaFormComponent } from './disciplina/disciplina-form/disciplina-form.component';
import { PainelCoordenadorComponent } from './coordenador/painel-coordenador/painel-coordenador.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CursoComponent } from './cursos/curso/curso.component';

const rotas: Routes = [
    {path: 'painel-coordenador', component: PainelCoordenadorComponent},
    {path: 'cursos', component: CursoComponent},
    {path: 'disciplinas', component: DisciplinaFormComponent},
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
