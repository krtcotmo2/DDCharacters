import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

export interface Party {
  results:
    {
      id: number,
      partyID: number;
      charID: number;
      curHP: number;
      partyDesc: string;
    }[]
}

@Injectable({
  providedIn: 'root'
})
export class PartyService {
  constructor(private http: HttpClient) { }

  private allPartiess = new BehaviorSubject<Party>( {results: []} as Party);
  getAllParties = this.allPartiess.asObservable();
  setAllParties = (arg) => { this.allPartiess.next(arg); };

  getParty = (id: string) => {
    const val =  this.http.get<Party>('/api/party/' + id, {
        headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*'
      }),
    });
    return val;
  }

  loadParties = () => {
    const val =  this.http.get<Party>('/api/party/all', {
        headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*'
      }),
    });
    return val;
  }

  updateHP = (partyID: number, charID: number, curHP: number) => {
    const body = {partyID, charID, curHP}
    const val = this.http.post<any>('/api/party/updateHP', body, {
        headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*'
      }),
    });
    return val;
  }

}
