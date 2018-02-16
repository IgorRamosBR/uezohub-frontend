import { ErrorHandlerService } from './../../core/error-handler.service';
import { Component, OnInit } from '@angular/core';
import { CursoService } from '../curso.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-escolha-curso',
  templateUrl: './escolha-curso.component.html',
  styleUrls: ['./escolha-curso.component.css']
})
export class EscolhaCursoComponent implements OnInit{

  cursos = [];

  constructor(
    private cursoService: CursoService,
    private router: Router,
    private errorHandler: ErrorHandlerService
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

  escolheCurso(idCurso) {
    localStorage.setItem("preferencia_curso", idCurso);
    this.router.navigate(['/painel-aluno', idCurso]);
  }
}
