import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conteudo-upload-form',
  templateUrl: './conteudo-upload-form.component.html',
  styleUrls: ['./conteudo-upload-form.component.css']
})
export class ConteudoUploadFormComponent implements OnInit {

  panelOpenState: boolean = false;
  foods = [
    {value: 'steak-0', viewValue: 'Ciência da Computação'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
