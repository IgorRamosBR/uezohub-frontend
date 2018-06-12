import { AuthService } from './../../seguranca/auth.service';
import { ErrorHandlerService } from './../../core/error-handler.service';
import { ConteudoService } from './../conteudo.service';
import { DisciplinaService } from './../../disciplina/disciplina.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CursoService } from '../../cursos/curso.service';
import { Conteudo } from '../conteudo';
import { FormGroupDirective } from '@angular/forms';
import { ToastyService } from 'ng2-toasty';

@Component({
  selector: 'app-conteudo-upload-form',
  templateUrl: './conteudo-upload-form.component.html',
  styleUrls: ['./conteudo-upload-form.component.css']
})
export class ConteudoUploadFormComponent implements OnInit {

  nomeDoArquivo = '';
  conteudo = new Conteudo();
  file: FileList;

  disciplinas = [];

  @Output() uploadConcluido = new EventEmitter();

  constructor(
    private cursoService: CursoService,
    private disciplnaService: DisciplinaService,
    private conteudoService: ConteudoService,
    private authService: AuthService,
    private toastyService: ToastyService,
    private errorHandlerService: ErrorHandlerService
  ) { }

  ngOnInit() {
    this.carregaDisciplinas();
  }

  upload(f: FormGroupDirective) {
    this.conteudo.nome = this.nomeDoArquivo;
    this.conteudoService.upload(this.file, this.conteudo)
      .then( () => {
        this.toastyService.success('Upload concluído com sucesso.');
        this.uploadConcluido.emit();
        this.nomeDoArquivo = '';
        f.resetForm();
      })
      .catch( error => this.errorHandlerService.handle(error));
  }

  validaUpload(f: FormGroupDirective) {
    if (f.valid && this.file) {
      return false;
    } else {
      return true;
    }
  }

  carregaArquivo(event) {
    if ( event.target.files && event.target.files.length > 1 ) {
      this.nomeDoArquivo = ( event.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', event.target.files.length );
    } else if ( event.target.value ) {
        this.nomeDoArquivo = event.target.value.split( '\\' ).pop();
    }
    this.file = event.target.files;
   }

  carregaDisciplinas() {
    const idProfessor = this.authService.jwtPayload.id;
    return this.disciplnaService.buscarPorProfessorAssociado(idProfessor)
    .then(disciplinas => {
      this.disciplinas = disciplinas.map( d => {
        return { value: d.id, viewValue: d.nome };
      });
    });
  }
}
