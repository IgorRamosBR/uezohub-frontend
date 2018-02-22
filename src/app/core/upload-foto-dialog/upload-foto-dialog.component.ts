import { Component, OnInit, Inject } from '@angular/core';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ToastyService } from 'ng2-toasty';

import { UsuarioService } from '../../usuario/usuario.service';
import { ErrorHandlerService } from '../error-handler.service';
import { AuthService } from '../../seguranca/auth.service';

@Component({
  selector: 'app-upload-foto-dialog',
  templateUrl: './upload-foto-dialog.component.html',
  styleUrls: ['./upload-foto-dialog.component.css']
})
export class UploadFotoDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<UploadFotoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private usuarioService: UsuarioService,
    private toastyService: ToastyService,
    private errorHandler: ErrorHandlerService,
    private auth: AuthService
  ) { }

  ngOnInit() {
  }

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
