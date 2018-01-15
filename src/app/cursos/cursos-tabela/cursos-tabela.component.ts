import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';

@Component({
  selector: 'app-cursos-tabela',
  templateUrl: './cursos-tabela.component.html',
  styleUrls: ['./cursos-tabela.component.css']
})
export class CursosTabelaComponent {
  
  colunas = ['nome', 'ativo'];
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

}

export interface Element {
  nome: string;
  id: number;
  ativo: boolean;
}

const DADOS: Element[] = [
  {id: 1, nome: 'Ciência da Computação', ativo: true},
  {id: 2, nome: 'Análise e Desenvolvimento de Sistemas', ativo: false},
  {id: 3, nome: 'Farmácia', ativo: true}
];
