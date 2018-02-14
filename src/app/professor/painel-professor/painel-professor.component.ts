import { AuthService } from './../../seguranca/auth.service';
import { ErrorHandlerService } from './../../core/error-handler.service';
import { DisciplinaService } from './../../disciplina/disciplina.service';
import { Component, ViewChild, OnInit, Output } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';

@Component({
  selector: 'app-painel-professor',
  templateUrl: './painel-professor.component.html',
  styleUrls: ['./painel-professor.component.css']
})
export class PainelProfessorComponent implements OnInit {

  linhaSelecionada = -1;
  linhaClicada = -1;
  uploads = 0;
  nomeDisciplinaSelecionada = '';
  tabelaDisciplinas = true;
  tabelaArquivos = false;

  colunas = ['nome', 'curso', 'ativo'];
  dataSource: MatTableDataSource<any> | null;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private disciplinaService: DisciplinaService,
    private authService: AuthService,
    private errorHandlerService: ErrorHandlerService
  ) {}

  ngOnInit() {
    this.buscarTodasAsDisciplinas();
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

  aoUpload() {
    this.uploads++;
  }

  buscarTodasAsDisciplinas(): any {
    if (this.authService.temPermissao('PROFESSOR')) {
      const id = this.authService.jwtPayload.id;
      this.disciplinaService.buscarPorProfessorAssociado(id)
        .then(disciplinas => {
          this.dataSource = new MatTableDataSource(disciplinas);
          this.dataSource.sort = this.sort;
        })
        .catch(error => this.errorHandlerService.handle(error));
    }
  }

  getColor(ativo: boolean) {
    if ( ativo === true) {
      return '#009688';
    } else {
      return '#F44336';
    }
  }
}

