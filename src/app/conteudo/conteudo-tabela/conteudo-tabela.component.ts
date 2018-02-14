import { MatTableDataSource, MatSort } from '@angular/material';
import { ErrorHandlerService } from './../../core/error-handler.service';
import { ConteudoService } from './../conteudo.service';
import { Component, OnInit, Input, SimpleChanges, ViewChild, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-conteudo-tabela',
  templateUrl: './conteudo-tabela.component.html',
  styleUrls: ['./conteudo-tabela.component.css']
})
export class ConteudoTabelaComponent implements OnInit {

  @Input() idDisciplina: any;
  @Input() uploads: any;

  colunas = ['nome', 'responsavel', 'data', 'link'];
  dataSource: MatTableDataSource<any> | null;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private conteudoService: ConteudoService,
    private changeDetectorRefs: ChangeDetectorRef,
    private errorHandlerService: ErrorHandlerService
  ) { }

  ngOnInit() {
    if (this.idDisciplina) {
      console.log(this.idDisciplina);
      this.buscarConteudosPorDisciplina(this.idDisciplina);
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.idDisciplina) {
      this.buscarConteudosPorDisciplina(this.idDisciplina);
    } else {
      this.dataSource = null;
    }
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  linhaOnClick(row) {
    console.log(row.link);
  }

  buscarTodosOsConteudos(): any {
    this.conteudoService.buscarTodos()
      .then(conteudos => {
        this.dataSource = new MatTableDataSource(conteudos);
        this.dataSource.sort = this.sort;
        this.changeDetectorRefs.detectChanges();
      })
      .catch(error => this.errorHandlerService.handle(error));
  }

  buscarConteudosPorDisciplina(id: number) {
    this.conteudoService.buscarConteudosPorDisciplina(id)
      .then(conteudos => {
        this.dataSource = new MatTableDataSource(conteudos);
        this.dataSource.sort = this.sort;
        this.changeDetectorRefs.detectChanges();
      })
      .catch(error => this.errorHandlerService.handle(error));
  }

}
