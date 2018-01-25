import { ErrorHandlerService } from './../../core/error-handler.service';
import { ConteudoService } from './../conteudo.service';
import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-conteudo-tabela',
  templateUrl: './conteudo-tabela.component.html',
  styleUrls: ['./conteudo-tabela.component.css']
})
export class ConteudoTabelaComponent implements OnInit {

  @Input() idDisciplina: any;

  constructor(
    private conteudoService: ConteudoService,
    private errorHandlerService: ErrorHandlerService
  ) { }

  ngOnInit() {
    this.buscarTodosOsConteudos();
  }

  ngOnChanges(changes: SimpleChanges) {
    if(this.idDisciplina && this.idDisciplina != 1) {
      console.log(this.idDisciplina);
      this.buscarTodosOsConteudos();
    }
  }

  buscarTodosOsConteudos(): any {
    this.conteudoService.buscarTodos()
      .then(conteudos => {
        console.log(conteudos);
      })
      .catch(error => this.errorHandlerService.handle(error));
  }

}
