import { UserKey } from './../../enum';
import { LoginService } from './../../login.service';
import { ReadJsonFileService } from './../../read-json-file.service';
import { User } from './../../modal';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
user:User = {username:"", password:"" , id:""};
users: User[];


  constructor(private readJsonFileService:ReadJsonFileService, private loginService:LoginService ) { }

  ngOnInit(): void {
    this.readJsonFileService.getUsers().subscribe((users:User[])=>{
      this.users = users;
    })
  }

  login(){
    let currentUser: User = this.users.find((user:User)=>user.password === this.user.password && user.username === this.user.username)
  if(!!currentUser){
    this.loginService.login(UserKey.token, currentUser.id);
  }else{
    alert("try again")
    
  }
  
}

}
