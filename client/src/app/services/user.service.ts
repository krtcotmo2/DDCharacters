import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {pluck} from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

interface User {
  userName: string;
  userEmail: string;
  userID: number;
  forcedReset: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  private user = new BehaviorSubject<User> ({} as User);

  // GETTERS
  getUser = this.user.asObservable();

  // SETTERS
  setUser(arg) { this.user.next(arg); }

  loginUser = (body: {} ) => {
    const val =  this.http.post<any>('/api/login', body, {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*'
      }),
    });
    return val;
  }

  resetPassword = (body: {}) => {
    const val =  this.http.post<any>('/api/login/resetPassword', body, {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*'
      }),
    });
    return val;
  }

  insertUser  = (body: {}) => {
    const val =  this.http.post<any>('/api/login/insertUser', body, {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*'
      }),
    });
    return val;
  }
}
