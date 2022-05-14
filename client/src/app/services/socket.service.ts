import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  constructor(private socket: Socket) { }

  getInitialData() {
    return this.createObserver('initial');
  }

  updateHP() {
    return this.createObserver('hpUupdate');
  }

  updateSpell() {
    return this.createObserver('spellUpdate');
  }

  addSpell() {
    return this.createObserver('addSpell');
  }

  deleteSpell() {
    return this.createObserver('deleteSpell');
  }

  changeSpell() {
    return this.createObserver('changeSpell');
  }

  addExpendable() {
    return this.createObserver('addExpendable');
  }

  deleteExpendable() {
    return this.createObserver('deleteExpendable');
  }

  updateExpendable() {
    return this.createObserver('updateExpendable');
  }

  private createObserver(evt: string) {
    return this.socket.fromEvent(evt);
  }
}
