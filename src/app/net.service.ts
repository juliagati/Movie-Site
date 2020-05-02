import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const movieUrl ="/assets/movie.json";
const userUrl = "/assets/users.json"

@Injectable({
  providedIn: 'root'
})
export class NetService {

  constructor(private httpClient: HttpClient) { }

getMovies(){
  return this.httpClient.get(movieUrl);
}

getUsers(){
  return this.httpClient.get(userUrl)
}

}
