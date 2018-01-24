import { FormGroupDirective } from '@angular/forms';
import { ErrorHandlerService } from './../../core/error-handler.service';
import { ToastyService } from 'ng2-toasty';
import { AlunoService } from './../aluno.service';
import { MatTableDataSource, MatSort } from '@angular/material';
import { Aluno } from './../aluno';
import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.css']
})
export class AlunoFormComponent implements OnInit {

  aluno = new Aluno();
  alunos = [];

  colunas = ['nome', 'matricula', 'email', 'id'];
  dataSource: MatTableDataSource<any> | null;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private alunoService: AlunoService,
    private changeDetectorRefs: ChangeDetectorRef,
    private toasty: ToastyService,
    private errorHandlerService: ErrorHandlerService
  ) { }

  ngOnInit() {
    this.buscarTodosOsAlunos();
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  salvar(f: FormGroupDirective) {
    if (this.aluno.id) {
      this.alunoService.atualizar(this.aluno.id, this.aluno)
        .then(() => {
          this.buscarTodosOsAlunos();
          this.toasty.success('Aluno atualizado com sucesso.');
        })
        .catch(error => this.errorHandlerService.handle(error));
    } else {
      this.alunoService.salvar(this.aluno)
        .then(() => {
          this.buscarTodosOsAlunos();
          this.toasty.success('Aluno salvo com sucesso.');
        })
        .catch(error => this.errorHandlerService.handle(error));
    }
    this.dataSource.connect();
    this.novo(f);
  }

  editar(aluno: Aluno) {
    this.aluno = aluno;
  }

  novo(f: FormGroupDirective) {
    if (f) {
      f.resetForm();
    }
    this.aluno = new Aluno();
  }

  getColor(ativo: boolean) {
    if ( ativo === true) {
      return '#009688';
    } else {
      return '#F44336';
    }
  }

  buscarTodosOsAlunos(): any {
    this.alunoService.buscarTodos()
      .then(alunos => {
        this.dataSource = new MatTableDataSource(alunos);
        this.dataSource.sort = this.sort;
        this.changeDetectorRefs.detectChanges();
      })
      .catch(error => this.errorHandlerService.handle(error));
  }
}
