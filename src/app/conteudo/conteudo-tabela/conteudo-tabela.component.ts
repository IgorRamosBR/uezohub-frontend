import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-conteudo-tabela',
  templateUrl: './conteudo-tabela.component.html',
  styleUrls: ['./conteudo-tabela.component.css']
})
export class ConteudoTabelaComponent implements OnInit {

  @Input() idDisciplina: any;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if(this.idDisciplina) {
      console.log(this.idDisciplina);
    }
  }

}
