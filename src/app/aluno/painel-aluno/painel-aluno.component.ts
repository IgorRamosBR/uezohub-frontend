import { AuthService } from './../../seguranca/auth.service';
import { AlunoService } from './../aluno.service';
import { CursoService } from './../../cursos/curso.service';
import { MatSort, MatTableDataSource } from '@angular/material';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DisciplinaService } from '../../disciplina/disciplina.service';
import { ErrorHandlerService } from '../../core/error-handler.service';
import { Curso } from '../../cursos/curso';
import {Aluno} from '../aluno';

@Component({
  selector: 'app-painel-aluno',
  templateUrl: './painel-aluno.component.html',
  styleUrls: ['./painel-aluno.component.css']
})
export class PainelAlunoComponent implements OnInit {

  curso: Curso = new Curso();

  linhaSelecionada = -1;
  linhaClicada = -1;

  nomeDisciplinaSelecionada = '';
  tabelaDisciplinas = true;
  tabelaArquivos = false;

  colunas = ['nome', 'curso', 'ativo'];
  dataSource: MatTableDataSource<any> | null;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private auth: AuthService,
    private disciplinaService: DisciplinaService,
    private cursoService: CursoService,
    private alunoService: AlunoService,
    private errorHandlerService: ErrorHandlerService
  ) { }

  ngOnInit() {
    this.buscaCursoDoAlunoLogado();
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  linhaOnClick(row) {
    this.linhaClicada = row.id;
    this.nomeDisciplinaSelecionada = row.nome;
    this.tabelaArquivos = true;
    this.tabelaDisciplinas = false;
  }

  selecionaLinha(row) {
    this.linhaSelecionada = row.id;
  }

  todasAsDisciplinas() {
    this.tabelaArquivos = false;
    this.tabelaDisciplinas = true;
    this.linhaSelecionada = -1;
  }

  buscarDisciplinasPorCurso(): any {
    this.disciplinaService.buscarPorCurso(this.curso.id)
      .then(disciplinas => {
        this.dataSource = new MatTableDataSource(disciplinas);
        this.dataSource.sort = this.sort;
      })
      .catch(error => this.errorHandlerService.handle(error));
  }

  buscarAluno(): Aluno {
    let a: Aluno;
    this.alunoService.buscarPorId(this.auth.jwtPayload.id)
      .then(aluno => a = aluno)
      .catch(error => this.errorHandlerService.handle(error));
    return a;
  }

  buscaCursoDoAlunoLogado() {
    this.alunoService.buscarPorId(this.auth.jwtPayload.id)
      .then(aluno => {
        if(aluno.curso) {
          this.curso = aluno.curso;
          this.buscarDisciplinasPorCurso();
        } else {
          this.router.navigate(['/escolhe-curso']);
        }    
      })
      .catch(error => this.errorHandlerService.handle(error)); 
  }

  getColor(ativo: boolean) {
    if (ativo === true) {
      return '#009688';
    } else {
      return '#F44336';
    }
  }
}
