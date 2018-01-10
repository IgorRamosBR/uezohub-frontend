import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';

@Component({
  selector: 'app-painel-professor',
  templateUrl: './painel-professor.component.html',
  styleUrls: ['./painel-professor.component.css']
})
export class PainelProfessorComponent {

  linhaSelecionada = -1;
  colunas = ['nome', 'curso', 'data'];
  cursos = [
    {value: 1, viewValue: 'Ciência da Computação'},
    {value: 2, viewValue: 'Análise e Desenvolvimento de Sistemas'}
  ];
  dataSource = new MatTableDataSource<Element>(DADOS);

  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
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
  curso: string;
  data: string;
}

const DADOS: Element[] = [
  {id: 1, nome: 'Construção de Algoritmos', curso: 'TADS', data: '15/10/17'},
  {id: 2, nome: 'Estrutura de Dados', curso: 'TADS', data: '10/10/17'},
  {id: 3, nome: 'Cálculo I', curso: 'CC', data: '10/10/17'},
];
