import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination'

import { PhotoListComponent } from './photo-list.component';
import { PhotoModule } from '../photo/photo.module';
import { filterByDescription } from './photo-list.pipe';
import { PhotosComponent } from './photos/photos.component';




@NgModule({
  declarations: [
    PhotoListComponent,
    filterByDescription,

    PhotosComponent
  ],
  imports: [
    CommonModule,
    PhotoModule,
    NgxPaginationModule
  ]
})
export class PhotoListModule { }
