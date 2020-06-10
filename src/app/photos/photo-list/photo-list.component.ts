import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import {debounceTime} from 'rxjs/operators'
import { ActivatedRoute } from '@angular/router';


import { PhotoService } from '../photo/photo.service';
import { Photo } from '../photo/photo';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss']
})
export class PhotoListComponent implements OnInit, OnDestroy {
  public photos: Photo[] = [];
  public filter: string =  '';
  public debounce: Subject<string> = new Subject<string>()
  public page: number = 1;

  constructor(
    private photoService: PhotoService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const userName = this.activatedRoute
    .snapshot
    .params
    .userName

    this.photoService
    .listFromUser(userName)
    .subscribe(photos => this.photos = photos)

    this.debounce
    .pipe(debounceTime(300))
    .subscribe(filter => this.filter = filter)

  }

  ngOnDestroy(): void {
    this.debounce.unsubscribe()
  }
}
