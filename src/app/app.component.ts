import { environment } from './../environments/environment';
import { UsuarioService } from './usuario/usuario.service';
import { ErrorHandlerService } from './core/error-handler.service';
import { LogoutService } from './seguranca/logout.service';
import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './seguranca/auth.service';
import { ToastyConfig, ToastyService } from 'ng2-toasty';
import { Usuario } from './usuario/usuario';
import { SafeStyle, DomSanitizer } from '@angular/platform-browser';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  exibindoMenu = true;
  usuarioLogado = new Usuario();
  imageChangedEvent: any = '';
  croppedImage: any = '';

fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
}
imageCropped(image: string) {
    this.croppedImage = image;
}  
  constructor(
    private toastyConfig: ToastyConfig,
    private router: Router,
    private errorHandler: ErrorHandlerService,
    private auth: AuthService,
    private logoutService: LogoutService,
    private toastyService: ToastyService,
    private usuarioService: UsuarioService,
    private sanitization: DomSanitizer,
    public dialog: MatDialog
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
    if(this.auth.jwtPayload && this.usuarioLogado.id != this.auth.jwtPayload.id || this.usuarioLogado.foto != this.auth.usuarioLogado.foto) {
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

  openDialog(): void {
    let dialogRef = this.dialog.open(UploadFotoDialog, {
      width: '100%',
      height: '90%',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      window.location.reload();
    })

  }
}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'upload-foto-dialog.html',
})
export class UploadFotoDialog {

  constructor(
    public dialogRef: MatDialogRef<UploadFotoDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private usuarioService: UsuarioService,
    private toastyService: ToastyService,
    private errorHandler: ErrorHandlerService,
    private auth: AuthService
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  imageChangedEvent: any = '';
  croppedImage: any = '';

  fileChangeEvent(event: any): void {
      this.imageChangedEvent = event;
  }
  
  imageCropped(image: string) {
      this.croppedImage = image;
  }

  salvar() {
    if(this.croppedImage == '') {
      this.onNoClick();
      return 0;
    }
    
    const file:FileList = this.croppedImage;
    const id = this.auth.jwtPayload.id;
    

    this.usuarioService.salvarFoto(id, file)
      .then(response => {
        window.location.reload();
        this.toastyService.success('Foto atualizada com sucesso.');
        console.log(response.foto);
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

}