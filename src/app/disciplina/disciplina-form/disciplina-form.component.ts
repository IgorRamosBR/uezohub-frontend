import { Component, OnInit, ChangeDetectorRef, ViewChild } from '@angular/core';
import { FormGroupDirective } from '@angular/forms';
import { MatTableDataSource, MatSort } from '@angular/material';

import { ToastyService } from 'ng2-toasty';

import { DisciplinaService } from './../disciplina.service';
import { CursoService } from './../../cursos/curso.service';
import { Disciplina } from './../disciplina';
import { ErrorHandlerService } from '../../core/error-handler.service';


@Component({
  selector: 'app-disciplina-form',
  templateUrl: './disciplina-form.component.html',
  styleUrls: ['./disciplina-form.component.css']
})
export class DisciplinaFormComponent implements OnInit {

  disciplina = new Disciplina();
  disciplinas = [];
  cursos = [];
  professores = [];

  colunas = ['nome', 'codigo', 'curso', 'professor', 'ativo', 'id'];
  dataSource: MatTableDataSource<any> | null;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private cursoService: CursoService,
    private disciplinaService: DisciplinaService,
    private changeDetectorRefs: ChangeDetectorRef,
    private toasty: ToastyService,
    private errorHandlerService: ErrorHandlerService
  ) { }

  ngOnInit() {
    this.carregaCursos();
    this.buscarTodasAsDisciplinas();
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  salvar(f: FormGroupDirective) {
    console.log(this.disciplina);
    if (this.disciplina.id) {
      this.disciplinaService.atualizar(this.disciplina.id, this.disciplina)
        .then(() => {
          this.buscarTodasAsDisciplinas();
          this.toasty.success('Disciplina atualizada com sucesso.');
        })
        .catch(error => this.errorHandlerService.handle(error));
    } else {
      this.disciplinaService.salvar(this.disciplina)
        .then(() => {
          this.buscarTodasAsDisciplinas();
          this.toasty.success('Disciplina salva com sucesso.');
        })
        .catch(error => this.errorHandlerService.handle(error));
    }
    this.dataSource.connect();
    if (f) {
      f.resetForm();
    }
    this.disciplina = new Disciplina();
  }

  editar(disciplina: Disciplina) {
    this.disciplina = disciplina;
  }

  novo(f: FormGroupDirective) {
    this.disciplina = new Disciplina();
    if (f) {
      f.resetForm();
    }
  }

  getColor(ativo: boolean) {
    if ( ativo === true) {
      return '#009688';
    } else {
      return '#F44336';
    }
  }

  buscarTodasAsDisciplinas(): any {
    this.disciplinaService.buscarTodos()
      .then(disciplinas => {
        this.dataSource = new MatTableDataSource(disciplinas);
        this.dataSource.sort = this.sort;
        this.changeDetectorRefs.detectChanges();
      })
      .catch(error => this.errorHandlerService.handle(error));
  }

  carregaCursos() {
    return this.cursoService.buscarTodos()
      .then(cursos => {
        this.cursos = cursos.map( c => {
          return { value: c.id, viewValue: c.nome };
        });
      });
  }

}
