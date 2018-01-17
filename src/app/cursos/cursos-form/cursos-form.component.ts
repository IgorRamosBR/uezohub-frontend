import { Component, ViewChild, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormControl, Validators, FormGroup, FormGroupDirective } from '@angular/forms';

import { MatTableDataSource, MatSort } from '@angular/material';
import { DataSource } from '@angular/cdk/collections';

import { Curso } from '../curso';
import { CursoService } from './../curso.service';
import { ToastyService } from 'ng2-toasty';

@Component({
  selector: 'app-cursos-form',
  templateUrl: './cursos-form.component.html',
  styleUrls: ['./cursos-form.component.css']
})
export class CursosFormComponent implements OnInit {

  colunas = ['nome', 'ativo', 'id'];

  curso = new Curso();
  cursos: Curso[] = [];

  dataSource: MatTableDataSource<any> | null;

  @ViewChild(MatSort) sort: MatSort;

  constructor(private cursoService: CursoService,
              private changeDetectorRefs: ChangeDetectorRef,
              private toasty: ToastyService) {}

  ngOnInit(): void {
    this.buscarTodosOsCursos();
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  salvar(f: FormGroupDirective) {
    if (this.curso.id) {
      this.cursoService.atualizar(this.curso.id, this.curso)
        .then(() => {
          this.buscarTodosOsCursos();
          this.toasty.success('Curso atualizado com sucesso.');
        });
    } else {
      this.cursoService.salvar(this.curso)
        .then(() => {
          this.buscarTodosOsCursos();
          this.toasty.success('Curso salvo com sucesso.');
        });
    }
    this.dataSource.connect();
    if (f) {
      f.resetForm();
    }
    this.curso = new Curso();
  }

  buscarTodosOsCursos() {
    this.cursoService.buscarTodos()
      .then(cursos => {
        this.dataSource = new MatTableDataSource(cursos);
        this.dataSource.sort = this.sort;
        this.changeDetectorRefs.detectChanges(); });
  }

  editar(curso: Curso) {
    this.curso = curso;
  }

  novo() {
    this.curso = new Curso();
  }

  getColor(ativo: boolean) {
    if ( ativo === true) {
      return '#009688';
    } else {
      return '#F44336';
    }
  }
}
