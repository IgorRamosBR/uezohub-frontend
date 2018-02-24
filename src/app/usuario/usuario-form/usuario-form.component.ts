import { Component, OnInit } from '@angular/core';
import { FormGroupDirective } from '@angular/forms';

import { ToastyService } from 'ng2-toasty';

import { AuthService } from './../../seguranca/auth.service';
import { ErrorHandlerService } from './../../core/error-handler.service';
import { CoordenadorService } from './../../coordenador/coordenador.service';
import { ProfessorService } from './../../professor/professor.service';
import { AlunoService } from './../../aluno/aluno.service';
import { Usuario } from '../usuario';
import { Aluno } from '../../aluno/aluno';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.css']
})
export class UsuarioFormComponent implements OnInit {

  usuario = new Usuario();

  constructor(
    private alunoService: AlunoService,
    private professorService: ProfessorService,
    private coordenadorService: CoordenadorService,
    public authService: AuthService,
    private errorHandlerService: ErrorHandlerService,
    private toasty: ToastyService
  ) { }

  ngOnInit() {
    this.buscarUsuario();

  }

  private buscarUsuario() {
    const id = this.authService.jwtPayload.id;
    
    if (this.authService.temPermissao('COORDENADOR')) {
      this.coordenadorService.buscarPorId(id)
        .then(coordenador => this.usuario = coordenador)
        .catch(error => this.errorHandlerService.handle(error));

    } else if (this.authService.temPermissao('PROFESSOR')) {
      this.professorService.buscarPorId(id)
        .then(professor => this.usuario = professor)
        .catch(error => this.errorHandlerService.handle(error));

    } else if (this.authService.temPermissao('ALUNO')) {
      this.alunoService.buscarPorId(id)
        .then(aluno => {this.usuario = aluno; console.log(this.usuario);})
        .catch(error => this.errorHandlerService.handle(error));
    }
  }

  salvar(f: FormGroupDirective) {
    if (this.authService.temPermissao('COORDENADOR')) {
      this.coordenadorService.atualizar(this.usuario.id, this.usuario)
        .then(() => this.toasty.success('Coordenador atualizado com sucesso.'))
        .catch(error => this.errorHandlerService.handle(error));

    } else if (this.authService.temPermissao('PROFESSOR')) {
      this.professorService.atualizar(this.usuario.id, this.usuario)
        .then(() => this.toasty.success('Professor atualizado com sucesso.'))
        .catch(error => this.errorHandlerService.handle(error));

    } else if (this.authService.temPermissao('ALUNO')) {
      let aluno:Aluno = Object.assign({}, this.usuario, {curso: undefined});
      this.alunoService.atualizar(this.usuario.id, aluno)
        .then(() => this.toasty.success('Aluno atualizado com sucesso.'))
        .catch(error => this.errorHandlerService.handle(error));
    }
  }
}
