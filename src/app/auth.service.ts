import { Injectable } from '@angular/core';
import {UsersService} from "./users.service";
import {RegisterModel} from "./model/register.model";
import {UserModel} from "./model/user.model";
import {Observable} from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _registerUrl: string = "http://localhost:3000/register";
   _loginUrl: string = "http://localhost:3000/login";
  private userLogged: Observable<any>;
  public userRoles: string[];
  public roles: string[];
  public userName: string;
  constructor(private usersService: UsersService) { }
  registerUser(user: RegisterModel){
    return  this.usersService.post(this._registerUrl, user);

  }
  authenticateUser(user: any){
    console.log(user);
    this.userName = user.username;
    this.userLogged = this.usersService.post(this._loginUrl, user);
    this.userLogged.subscribe(
      data =>{
        this.roles=data.roles;
        this.userRoles=this.roles;
        console.log(this.userRoles);
      }
    )
    return this.userLogged;
  }
}
