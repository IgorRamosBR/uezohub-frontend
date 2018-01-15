import { MatTableDataSource, MatSort } from '@angular/material';
import { Component, ViewChild } from '@angular/core';
import { FormControl, Validators, FormGroup, FormGroupDirective } from '@angular/forms';
import { Curso } from '../curso';

@Component({
  selector: 'app-cursos-form',
  templateUrl: './cursos-form.component.html',
  styleUrls: ['./cursos-form.component.css']
})
export class CursosFormComponent {

  ativo = true;
  colunas = ['nome', 'ativo'];
  curso = new Curso();

  cursos: Curso[] = []; 
  dataSource = new MatTableDataSource<Curso>(this.cursos);

  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
  preencheCurso() {
    
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  salvar(f: FormGroupDirective) {
    console.log(this.curso);
    console.log(this.cursos);
    this.cursos.push(this.curso);
    this.dataSource.connect();
    if(f)
      f.resetForm();
    this.curso = new Curso();
    this.ativo = true;
  }

}
