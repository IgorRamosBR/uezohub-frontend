import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-escolha-curso',
  templateUrl: './escolha-curso.component.html',
  styleUrls: ['./escolha-curso.component.css']
})
export class EscolhaCursoComponent {
  cursos = [{id: 1, nome: 'Ciência da Computação' },
            {id: 2, nome: 'Análise e Desenvolvimento de Sistemas' },
            {id: 3, nome: 'Fármacia'},
            {id: 4, nome: 'Ciências Biológicas' },
            {id: 5, nome: 'Construção Naval'},
            {id: 6, nome: 'Polímeros'},
            {id: 7, nome: 'Processos Metalúrgicos'},
            {id: 8, nome: 'Engenharia de Produção'}];

}
