import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import {catchError, map, pluck} from 'rxjs/operators';
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
  setUser(arg) {
    this.user.next(arg); 
  }

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

  newPassword  = (body: {}) => {
    const val =  this.http.post<any>('/api/login/newPassword', body, {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*'
      }),
    });
    return val;
  }

  checkLoggedInStatus = (body: {}) => {
    const val =  this.http.post<any>('/api/login/user-status', {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*'
      }),
    }).pipe(
      map(arg => {
        return {...arg, isLoggedIn: true};
      }),
      catchError((err:any) => {
        return of(err)
      })
    );
    this.setUser(val);
    return val;
  }

  logOut = () =>{
    const val =  this.http.post<any>('/api/login/sign-out', {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*'
      }),
    }).pipe(
      map(arg => {
        return {...arg, isLoggedIn: false};
      }),
      map(arg=> {
        return of({});
  
      })
    );
    return val;
  }
}
