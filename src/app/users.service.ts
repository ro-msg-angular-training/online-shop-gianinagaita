import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, map} from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  _url: string = "http://localhost:3000/products";
  _loginUrl: string = "http://localhost:3000/login";
  constructor(private http: HttpClient) { }
  getHeaders(){
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return headers;
  }
  //to be able to return the observable without any errors.
  getRequestOption(): HttpClient {
    // @ts-ignore
    const options = new HttpClient();
    options.headers = this.getHeaders();
    return options;
  }

  post(url: string, data: any){
    return this.http.post<any>(this._loginUrl, data);
  }
loginUser(user){
    return this.http.post<any>(this._loginUrl, user);
}

}
