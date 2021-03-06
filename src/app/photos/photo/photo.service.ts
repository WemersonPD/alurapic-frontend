import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Photo } from './photo';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  public API = 'http://localhost:3000'

  constructor(private httpClient: HttpClient) {

  }

  listFromUser(userName: string) {

    return this.httpClient
      .get<Photo[]>(`${this.API}/${userName}/photos`)

  }
}
