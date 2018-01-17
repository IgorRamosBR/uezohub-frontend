import { Component } from '@angular/core';
import { ToastyConfig } from 'ng2-toasty';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  exibindoMenu = true;

  constructor(private toastyConfig: ToastyConfig) {
    this.toastyConfig.theme = 'bootstrap';
  }

}
