import { environment } from './../environments/environment';
import { UsuarioService } from './usuario/usuario.service';
import { ErrorHandlerService } from './core/error-handler.service';
import { LogoutService } from './seguranca/logout.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './seguranca/auth.service';
import { ToastyConfig, ToastyService } from 'ng2-toasty';
import { Usuario } from './usuario/usuario';
import { SafeStyle, DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  exibindoMenu = true;
  usuarioLogado = new Usuario();
  
  constructor(
    private toastyConfig: ToastyConfig,
    private router: Router,
    private errorHandler: ErrorHandlerService,
    private auth: AuthService,
    private logoutService: LogoutService,
    private toastyService: ToastyService,
    private usuarioService: UsuarioService,
    private sanitization: DomSanitizer
  ) {
    this.toastyConfig.theme = 'bootstrap'; 
    }

  ngOnInit() {
    if(window.innerWidth < 576) {
      this.exibindoMenu = false;
    }
  }
  
  
  exibindoNavegacao() {
    if (this.router.url === '/login') {
      return false;
    }
    if (this.router.url === '/escolha-curso') {
      return false;
    }
    return true;
    // return this.router.url !== '/login' ;
  }
  
  exibeFotoUsuarioPadrao(): boolean {
    if(this.usuarioLogado.id != this.auth.jwtPayload.id || this.usuarioLogado.foto != this.auth.usuarioLogado.foto) {
      this.usuarioLogado = this.auth.usuarioLogado;
    }
    if(this.usuarioLogado.foto) {
      return true;
    } else {
      return false;
      }
  }

  logout() {
    this.logoutService.logout()
      .then(() => {
        this.router.navigate(['/login']);
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  selectFile(event) {
    const file:FileList = event.target.files;
    const id = this.auth.jwtPayload.id;

    this.usuarioService.salvarFoto(id, file)
      .then(response => {
        window.location.reload();
        this.toastyService.success('Foto atualizada com sucesso.');
        console.log(response.foto);
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  buscarUsuarioLogado() {
    const id = this.auth.jwtPayload.id;
    this.usuarioService.buscarUsuarioPorId(id)
      .then(response => this.usuarioLogado = response)
      .catch(erro => this.errorHandler.handle(erro));
  }

  onResize(event) {
    const width = event.target.innerWidth;
    if(width < 576) {
      this.exibindoMenu = false;
    }
  }

  getFoto() {
    return this.sanitization.bypassSecurityTrustStyle(`url(${this.usuarioLogado.foto})`);
  }

}
