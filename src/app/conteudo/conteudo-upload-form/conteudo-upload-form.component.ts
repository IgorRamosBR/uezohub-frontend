import { ErrorHandlerService } from './../../core/error-handler.service';
import { ConteudoService } from './../conteudo.service';
import { DisciplinaService } from './../../disciplina/disciplina.service';
import { Component, OnInit } from '@angular/core';
import { CursoService } from '../../cursos/curso.service';
import { Conteudo } from '../conteudo';

@Component({
  selector: 'app-conteudo-upload-form',
  templateUrl: './conteudo-upload-form.component.html',
  styleUrls: ['./conteudo-upload-form.component.css']
})
export class ConteudoUploadFormComponent implements OnInit {

  nomeDoArquivo = '';
  conteudo = new Conteudo();
  cursos = [];
  disciplinas = [];

  constructor(
    private cursoService: CursoService,
    private disciplnaService: DisciplinaService,
    private conteudoService: ConteudoService,
    private errorHandlerService: ErrorHandlerService
  ) { }

  ngOnInit() {
    this.carregaCursos();
    this.carregaDisciplinas();
  }

  upload(event){ 
    if( event.target.files && event.target.files.length > 1 )
				this.nomeDoArquivo = ( event.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', event.target.files.length );
			else if( event.target.value )
		  	this.nomeDoArquivo = event.target.value.split( '\\' ).pop();
  } 

  carregaCursos() {
    return this.cursoService.buscarTodos()
      .then(cursos => {
        this.cursos = cursos.map( c => {
          return { value: c.id, viewValue: c.nome };
        });
      });
  }

  carregaDisciplinas() {
    return this.disciplnaService.buscarTodos()
      .then(disciplinas => {
        this.disciplinas = disciplinas.map( d => {
          return { value: d.id, viewValue: d.nome };
        });
      });
  }
}
