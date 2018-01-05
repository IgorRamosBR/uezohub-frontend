import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule, MatTableModule, MatSortModule, MatInputModule, MatCardModule } from '@angular/material';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { PainelProfessorComponent } from './painel-professor/painel-professor.component';
import { PainelCoordenadorComponent } from './painel-coordenador/painel-coordenador.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    ToolbarComponent,
    PainelProfessorComponent,
    PainelCoordenadorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSelectModule,
    MatButtonModule,
    MatTableModule,
    MatSortModule,
    MatInputModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
