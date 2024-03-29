import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Socket } from 'ngx-socket-io';

export interface Party {
  results: PartyMember[]
}

export interface PartyMember {
  id: number;
  partyID: number;
  charID: number;
  curHP: number;
  partyDesc: string;
}

export interface PartyHpMod {
  hpModifier: number;
  isHeal: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class PartyService {

  allPartyMembers: PartyMember[];
  constructor(
    private http: HttpClient,
    private socket: Socket
  ) { }

  private allParties = new BehaviorSubject<Party>( {results: []} as Party);
  getAllParties = this.allParties.asObservable();
  setAllParties = (arg) => { this.allParties.next(arg); };

  private partyHpMod = new BehaviorSubject<PartyHpMod>({} as PartyHpMod);
  getHPMod = this.partyHpMod.asObservable();
  setHPMod = (arg: PartyHpMod) => { this.partyHpMod.next(arg); }

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
    let aChar;
    this.getAllParties.subscribe(results => {
      this.allPartyMembers = results.results;
      aChar = results.results.find(person =>  person.charID === charID);
    });
    aChar.curHP = curHP;
    this.socket.emit('HPUPDATE', aChar);
    return val;
  }

  partyHPUpdate = (arg: PartyHpMod): void => {
    this.setHPMod(arg);
  }
}
