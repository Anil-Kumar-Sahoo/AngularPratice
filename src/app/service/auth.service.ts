import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import baseUrl from './helper';
import { Register, RegisterResponse } from '../model/class/register';
import { Login, LoginResponse } from '../model/class/login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  register(data: Register): Observable<RegisterResponse> {
    return this.http.post<RegisterResponse>(`${baseUrl}users/register`, data);
  }

  login(data: Login): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${baseUrl}users/login`, data);
  }
}
