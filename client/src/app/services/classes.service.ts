import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

interface CharClass {
  results: {
    classID: number;
    className: string;
  }[];
}

@Injectable({
  providedIn: 'root'
})
export class ClassesService {

  constructor(private http: HttpClient) { }
  public getClasses = () => {
    return this.http.get<CharClass>('https://cors-anywhere.herokuapp.com/https://pathfinder-krc.herokuapp.com/api/classes/all', {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*'
      }),
    });
  }
}
