import { Injectable } from '@angular/core';
import { IFormData, IUserDetails } from '../../../app.types';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  AccessToken:string = '';
  baseUrl = "http://localhost:3000";
  constructor(private httpClient:HttpClient) { }

  postLoginData(credentials:IFormData):Observable<IUserDetails>{
return this.httpClient.post(`${this.baseUrl}/auth/login`,credentials) as Observable<IUserDetails>;
  }
  getToken() {
    return localStorage.getItem('token');
  }
}
