import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import baseUrl from './helper';
import { Register, RegisterResponse } from '../model/class/register';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  register(data: Register): Observable<RegisterResponse> {
    return this.http.post<RegisterResponse>(`${baseUrl}users/register`, data)
  }
}
