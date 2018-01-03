import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-painel-professor',
  templateUrl: './painel-professor.component.html',
  styleUrls: ['./painel-professor.component.css']
})
export class PainelProfessorComponent {
  
  cursos = [
    {value: 1, viewValue: 'Ciência da Computação'},
    {value: 2, viewValue: 'Análise e Desenvolvimento de Sistemas'}
  ];

}
