import { UserKey } from './enum';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  isLoggedIn(): boolean{
    return !!localStorage.getItem(UserKey.token);
  }

login (key:UserKey , value: string){
  localStorage.setItem(key,value);
}

}
