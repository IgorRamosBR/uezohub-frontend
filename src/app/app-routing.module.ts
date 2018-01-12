import { CursosComponent } from './coordenador/cursos/cursos.component';
import { PainelCoordenadorComponent } from './coordenador/painel-coordenador/painel-coordenador.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const rotas: Routes = [
    {path: 'painel-coordenador', component: PainelCoordenadorComponent},
    {path: 'cursos', component: CursosComponent},
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
  