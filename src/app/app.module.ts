import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSelectModule} from '@angular/material/select';
import { MatIconModule, MatIconRegistry } from '@angular/material';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { PainelProfessorComponent } from './painel-professor/painel-professor.component';



@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    ToolbarComponent,
    PainelProfessorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSelectModule,
    MatIconModule
  ],
  providers: [MatIconRegistry],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(
    public matIconRegistry: MatIconRegistry) {
    matIconRegistry.registerFontClassAlias('fontawesome', 'fa');
    }
}
