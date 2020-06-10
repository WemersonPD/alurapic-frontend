import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotoListModule } from './photo-list/photo-list.module';
import { PhotoModule } from './photo/photo.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PhotoListModule,
    PhotoModule
  ]
})
export class PhotosModule { }
