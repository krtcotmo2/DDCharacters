import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Socket } from 'ngx-socket-io';


export enum ExpendableType {
  Class = 'Class',
  Charge = 'Charge',
  Potion = 'Potion',
  Scroll = 'Scroll'

}
export interface Expendable {
  id: number;
  charID: number;
  description: string;
  expType: ExpendableType;
  qty: number;
}

interface Expendables {
  charID: string;
  results: Expendable[];
}

@Injectable({
  providedIn: 'root'
})

export class ExpendableService {
  constructor(
    private http: HttpClient,
    private socket: Socket
  ) { }

  // DECLARATIONS
  private allExpendables = new BehaviorSubject<Expendables>( {results: []} as Expendables );
  // GETTERS
  getExpendables = this.allExpendables.asObservable();
  // SETTERS
  setExpendables(arg) { this.allExpendables.next(arg); }

  loadExpendables = (charID: number) =>{
    const val =  this.http.get<any>('/api/expendables/get/' + charID.toString(), {
        headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*'
      }),
    });
    return val;
  }

  insertExpendables = (body: {}) => {
    const val =  this.http.post<any>('/api/expendables/add', body, {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*'
      }),
    });
    return val;
  }

  deleteExpendables = (expId: number) => {
    const val =  this.http.delete<any>('/api/expendables/delete/' + expId.toString(), {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*'
      }),
    });
    return val;
  }

  updateExpendables = (body: {}) => {
    const val =  this.http.post<any>('/api/expendables/update', body, {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*'
      }),
    });
    this.socket.emit('UPDATEEXPENDABLE', body);
    return val;
  }

}
