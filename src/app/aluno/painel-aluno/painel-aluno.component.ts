import { CursoService } from './../../cursos/curso.service';
import { MatSort, MatTableDataSource } from '@angular/material';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DisciplinaService } from '../../disciplina/disciplina.service';
import { ErrorHandlerService } from '../../core/error-handler.service';
import { Curso } from '../../cursos/curso';

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
    private disciplinaService: DisciplinaService,
    private cursoService: CursoService,
    private errorHandlerService: ErrorHandlerService
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.params['curso'];
    this.carregarCurso(id);
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
    console.log('eei');
  }

  selecionaLinha(row) {
    this.linhaSelecionada = row.id;
  }

  todasAsDisciplinas() {
    this.tabelaArquivos = false;
    this.tabelaDisciplinas = true;
    this.linhaSelecionada = -1;
  }

  carregarCurso(id: number) {
    this.cursoService.buscarPorId(id)
      .then(curso => {
        this.curso = curso;
        this.buscarDisciplinasPorCurso(this.curso.id);
      })
      .catch(error => this.errorHandlerService.handle(error));
  }

  buscarDisciplinasPorCurso(idCurso: number): any {
    this.disciplinaService.buscarPorCurso(idCurso)
      .then(disciplinas => {
        this.dataSource = new MatTableDataSource(disciplinas);
        this.dataSource.sort = this.sort;
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
