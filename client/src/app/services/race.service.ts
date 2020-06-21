import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

interface Race {
  results: {
    raceID: number;
    raceDesc: string;
  }[];
}

@Injectable({
  providedIn: 'root'
})
export class RaceService {

  constructor(private http: HttpClient) { }

  public getRaces = () => {
    return this.http.get<Race>('https://cors-anywhere.herokuapp.com/https://pathfinder-krc.herokuapp.com/api/races/all', {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*'
      }),
    });
  }
}
