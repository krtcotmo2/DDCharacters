import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import {pluck} from 'rxjs/operators';

export interface Character {
  results: {
    charID: number;
    charName: string;
    charHP: number;
    Race: {
      raceDesc: string;
    },
    User: {
      userName: string;
      userEmail: string;
    },
    CharLevels: {
      classLevel: number;
      CharClass: {
        className: string;
      }
    }[],
    CharACs: {
      score: number;
    }[],
    Alignment:{
      alignID: number;
      alignName: string;
    }
  }[];
}


@Injectable({
  providedIn: 'root'
})
export class CharService {

  constructor(private http: HttpClient) { }

  // DECLARATIONS
  private allChars = new BehaviorSubject<Character> ({results: []} as Character);

  // GETTERS
  getAllChars = this.allChars.asObservable();

  // SETTERS
  setAllChars(arg) { this.allChars.next(arg); }

  public getChars = () => {
    //return this.http.get<Character>('https://cors-anywhere.herokuapp.com/https://pathfinder-krc.herokuapp.com/api/characters/all', {
    return this.http.get<Character>('/api/characters/all', {
        headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*'
      }),
    });
  }

}
