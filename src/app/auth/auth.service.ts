import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IFormData, IUserDetails } from '../app.types';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  AccessToken:string = '';
  baseUrl = "https://forms-47.herokuapp.com/";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      Authorization: 'token'
    })
  };
  constructor(private httpClient:HttpClient) { }

  
  postLoginData(credentials:IFormData):Observable<IUserDetails>{
return this.httpClient.post(`${this.baseUrl}user/login`,credentials, this.httpOptions) as Observable<IUserDetails>;
  }
}
