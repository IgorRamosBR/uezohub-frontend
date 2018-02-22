import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImageCropperModule } from 'ngx-image-cropper';
import { MatDialogModule, MatButtonModule } from '@angular/material';

import { ErrorHandlerService } from './error-handler.service';
import { UploadFotoDialogComponent } from './upload-foto-dialog/upload-foto-dialog.component';


@NgModule({
  imports: [
    CommonModule,

    MatButtonModule,
    MatDialogModule,
    ImageCropperModule
  ],
  declarations: [UploadFotoDialogComponent],
  providers: [
    ErrorHandlerService
  ]
})
export class CoreModule { }
