import { FormGroupDirective } from '@angular/forms';
import { ErrorHandlerService } from './../../core/error-handler.service';
import { ToastyService } from 'ng2-toasty';
import { CoordenadorService } from './../coordenador.service';
import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';

import { Coordenador } from './../coordenador';

@Component({
  selector: 'app-coordenador-form',
  templateUrl: './coordenador-form.component.html',
  styleUrls: ['./coordenador-form.component.css']
})
export class CoordenadorFormComponent implements OnInit {

  coordenador = new Coordenador();
  coordeandores = [];

  //colunas = ['nome', 'matricula', 'email', 'id'];
  colunas = ['nome', 'email'];
  dataSource: MatTableDataSource<any> | null;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private coordenadorService: CoordenadorService,
    private changeDetectorRefs: ChangeDetectorRef,
    private toasty: ToastyService,
    private errorHandlerService: ErrorHandlerService
  ) { }

  ngOnInit() {
    this.buscarTodosOsCoordenadores();
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  salvar(f: FormGroupDirective) {
    if (this.coordenador.id) {
      this.coordenadorService.atualizar(this.coordenador.id, this.coordenador)
        .then(() => {
          this.buscarTodosOsCoordenadores();
          this.toasty.success('Coordenador atualizado com sucesso.');
        })
        .catch(error => this.errorHandlerService.handle(error));
    } else {
      this.coordenadorService.salvar(this.coordenador)
        .then(() => {
          this.buscarTodosOsCoordenadores();
          this.toasty.success('Coordenador salvo com sucesso.');
        })
        .catch(error => this.errorHandlerService.handle(error));
    }
    this.dataSource.connect();
    this.novo(f);
  }

  editar(coordenador: Coordenador) {
    this.coordenador = coordenador;
  }

  novo(f: FormGroupDirective) {
    if (f) {
      f.resetForm();
    }
    this.coordenador = new Coordenador();
  }

  getColor(ativo: boolean) {
    if ( ativo === true) {
      return '#009688';
    } else {
      return '#F44336';
    }
  }

  buscarTodosOsCoordenadores(): any {
    this.coordenadorService.buscarTodos()
      .then(coordenadores => {
        this.dataSource = new MatTableDataSource(coordenadores);
        this.dataSource.sort = this.sort;
        this.changeDetectorRefs.detectChanges();
      })
      .catch(error => this.errorHandlerService.handle(error));
  }


}
