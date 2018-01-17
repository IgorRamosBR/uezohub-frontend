import { ErrorHandlerService } from './../../core/error-handler.service';
import { ToastyService } from 'ng2-toasty';
import { ProfessorService } from './../professor.service';
import { FormGroupDirective } from '@angular/forms';
import { MatTableDataSource, MatSort } from '@angular/material';
import { Professor } from './../professor';
import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-professor-form',
  templateUrl: './professor-form.component.html',
  styleUrls: ['./professor-form.component.css']
})
export class ProfessorFormComponent implements OnInit {

  professor = new Professor();
  professores = [];

  colunas = ['nome', 'matricula', 'email', 'id'];
  dataSource: MatTableDataSource<any> | null;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private professorService: ProfessorService,
    private changeDetectorRefs: ChangeDetectorRef,
    private toasty: ToastyService,
    private errorHandlerService: ErrorHandlerService
  ) { }

  ngOnInit() {
    this.buscarTodosOsProfessores();
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  salvar(f: FormGroupDirective) {
    if (this.professor.id) {
      this.professorService.atualizar(this.professor.id, this.professor)
        .then(() => {
          this.buscarTodosOsProfessores();
          this.toasty.success('Professor atualizado com sucesso.');
        })
        .catch(error => this.errorHandlerService.handle(error));
    } else {
      this.professorService.salvar(this.professor)
        .then(() => {
          this.buscarTodosOsProfessores();
          this.toasty.success('Professor salvo com sucesso.');
        })
        .catch(error => this.errorHandlerService.handle(error));
    }
    this.dataSource.connect();
    this.novo(f);
  }

  editar(professor: Professor) {
    this.professor = professor;
  }

  novo(f: FormGroupDirective) {
    if (f) {
      f.resetForm();
    }
    this.professor = new Professor();
  }

  getColor(ativo: boolean) {
    if ( ativo === true) {
      return '#009688';
    } else {
      return '#F44336';
    }
  }

  buscarTodosOsProfessores(): any {
    this.professorService.buscarTodos()
      .then(professores => {
        this.dataSource = new MatTableDataSource(professores);
        this.dataSource.sort = this.sort;
        this.changeDetectorRefs.detectChanges();
      })
      .catch(error => this.errorHandlerService.handle(error));
  }

}
