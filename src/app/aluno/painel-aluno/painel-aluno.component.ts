import { MatSort, MatTableDataSource } from '@angular/material';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-painel-aluno',
  templateUrl: './painel-aluno.component.html',
  styleUrls: ['./painel-aluno.component.css']
})
export class PainelAlunoComponent implements OnInit{

  curso = '';
  linhaSelecionada = -1;
  colunas = ['nome', 'quantidadeArquivos', 'data'];

  dataSource = new MatTableDataSource<Element>(DADOS);

  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.curso = this.route.snapshot.params['curso'];
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  linhaOnClick(row) {
    this.linhaSelecionada = row.id;
    console.log(row);
    console.log(row.id);
  }
}

export interface Element {
  nome: string;
  id: number;
  quantidadeArquivos: number;
  data: string;
}

const DADOS: Element[] = [
  {id: 1, nome: 'Construção de Algoritmos', quantidadeArquivos: 4, data: '15/10/17'},
  {id: 2, nome: 'Estrutura de Dados', quantidadeArquivos: 10, data: '10/10/17'},
  {id: 3, nome: 'Cálculo I', quantidadeArquivos: 2, data: '10/10/17'},
];