import { NetService } from './net.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReadJsonFileService {
  [x: string]: any;

  constructor(private netService: NetService) { }

  getMovies(){
    return this.netService.getMovies();
  }

  getUsers(){
    return this.netService.getUsers();
  }

}
