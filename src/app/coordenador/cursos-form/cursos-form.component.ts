import { Curso } from './../cursos/curso';
import { Component, ViewChild } from '@angular/core';
import { FormControl, Validators, FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-cursos-form',
  templateUrl: './cursos-form.component.html',
  styleUrls: ['./cursos-form.component.css']
})
export class CursosFormComponent {

  ativo = true;
  curso = new Curso();

  salvar(f: FormGroupDirective) {
    this.curso.ativo = this.ativo;
    console.log(this.curso);
    if(f)
      f.resetForm();
    this.curso = new Curso();
    this.ativo = true;
  }

}
