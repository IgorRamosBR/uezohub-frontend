import { Component, ViewChild, OnInit } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { DisciplinaService } from '../../disciplina/disciplina.service';
import { AuthService } from '../../seguranca/auth.service';
import { ErrorHandlerService } from '../../core/error-handler.service';

@Component({
  selector: 'app-painel-coordenador',
  templateUrl: './painel-coordenador.component.html',
  styleUrls: ['./painel-coordenador.component.css']
})
export class PainelCoordenadorComponent  implements OnInit{
  linhaSelecionada = -1;
  linhaClicada = -1;
  nomeDisciplinaSelecionada = '';
  tabelaDisciplinas = true;
  tabelaArquivos = false;

  colunas = ['nome', 'curso', 'ativo'];
  dataSource: MatTableDataSource<any> | null;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

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

  buscarTodasAsDisciplinas(): any {
    this.disciplinaService.buscarTodos()
      .then(disciplinas => {
        this.dataSource = new MatTableDataSource(disciplinas);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      })
      .catch(error => this.errorHandlerService.handle(error));
  }

  getColor(ativo: boolean) {
    if ( ativo === true) {
      return '#009688';
    } else {
      return '#F44336';
    }
  }
}

