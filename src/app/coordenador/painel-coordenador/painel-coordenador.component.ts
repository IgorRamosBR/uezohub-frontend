import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';

@Component({
  selector: 'app-painel-coordenador',
  templateUrl: './painel-coordenador.component.html',
  styleUrls: ['./painel-coordenador.component.css']
})
export class PainelCoordenadorComponent  {
  exibindoMenu = true;
  colunas = ['nome', 'matricula', 'situacao'];
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
  matricula: string;
  situacao: string;
}

const DADOS: Element[] = [
  {id: 1, nome: 'Igor Ramos Pestana', matricula: '1413331041', situacao: 'Pendente'},
  {id: 2, nome: 'Lucas Santana Garcez', matricula: '1413331011', situacao: 'Ok'},
  {id: 3, nome: 'Danilo Gila Santana', matricula: '1413331054', situacao: 'Ok'}
];
