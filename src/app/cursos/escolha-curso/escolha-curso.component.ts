import { Observable } from 'rxjs/Observable';
import { AuthService } from './../../seguranca/auth.service';
import { AlunoService } from './../../aluno/aluno.service';
import { ErrorHandlerService } from './../../core/error-handler.service';
import { Component, OnInit } from '@angular/core';
import { CursoService } from '../curso.service';
import { Router } from '@angular/router';
import { Aluno } from '../../aluno/aluno';
import { Curso } from '../curso';
import { fromPromise } from 'rxjs/observable/fromPromise';

@Component({
  selector: 'app-escolha-curso',
  templateUrl: './escolha-curso.component.html',
  styleUrls: ['./escolha-curso.component.css']
})
export class EscolhaCursoComponent implements OnInit{

  cursos = [];
  curso = new Curso();
  aluno = new Aluno();


  constructor(
    private cursoService: CursoService,
    private router: Router,
    private errorHandler: ErrorHandlerService,
    private alunoService: AlunoService,
    private auth: AuthService
  ) {}

  ngOnInit() {
    this.carregaCursos();
  }
  
  carregaCursos() {
    this.cursoService.buscarTodos()
      .then(cursos => {
        this.cursos = cursos;
      })
      .catch(error => this.errorHandler.handle(error));
  }

  escolheCurso(nomeCurso) {
    Observable.fromPromise(this.buscarCursoPorNome(nomeCurso))
      .flatMap(() => this.buscarAluno())
      .flatMap(() => this.atualizarAluno())
      .subscribe(() => this.router.navigate(['/painel-aluno', this.curso.nome]));
  }

  buscarCursoPorNome(nomeCurso) {
    let encode = encodeURIComponent(nomeCurso);
    return this.cursoService.buscarPorNome(encode)
      .then(curso => this.curso = curso)
      .catch(error => this.errorHandler.handle(error));
  }

  buscarAluno() {
    return this.alunoService.buscarPorId(this.auth.jwtPayload.id)
      .then(aluno => this.aluno = aluno)
      .catch(error => this.errorHandler.handle(error));
  }

  atualizarAluno() {
    this.aluno.curso = this.curso;
    return this.alunoService.atualizar(this.auth.jwtPayload.id, this.aluno)
      .then()
      .catch(error => this.errorHandler.handle(error));
  }
}
