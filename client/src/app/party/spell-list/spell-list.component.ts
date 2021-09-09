import { Component, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
import _ from 'lodash';
import { CharBasics, CharDataService } from 'src/app/services/char-data.service';
import { CharService } from 'src/app/services/char.service';
import { SocketService } from 'src/app/services/socket.service';
import { Subscription } from 'rxjs';
import { Socket } from 'ngx-socket-io';

@Component({
  selector: 'app-spell-list',
  templateUrl: './spell-list.component.html',
  styleUrls: ['./spell-list.component.css']
})
export class SpellListComponent implements OnInit {
  @Input() spellList = []
  @Input() charID: number;
  @Output() spellStringBuilder = new EventEmitter<string>();
  availableSpells: string;
  levelBreakDown = [];
  filterText = '';
  subs: Subscription[] = [];


  constructor(
    private socketService: SocketService,
    private charDataSvc: CharDataService,
    private socket: Socket,
  ) { }

  ngOnInit(): void {
    this.levelBreakDown =  _.uniqBy(this.spellList, 'spellLevel');
    this.subs.push(
      this.socketService.updateSpell().subscribe( (data: any): void => {
        const aSpell = this.spellList.find(spell => spell.id === data.id);
        if(aSpell){
          aSpell.isCast = data.currentStatus;
        }
      }),
    );
  }

  toggelDisplay = (evt: Event, lvl: any) => {
    const el: HTMLDivElement = document.getElementById('lvl' + lvl.spellLevel + '-' + this.charID) as HTMLDivElement;
    el.classList.toggle('collapsed');
    const ico: HTMLElement = evt.target as HTMLElement;
    ico.classList.toggle('down');
    ico.classList.toggle('right');
  }

  filterList = (evt) => {
    this.filterText = evt.target.value;
    const allRows: any = document.getElementsByClassName('ui grid gridRow');
    for(let r of allRows){
      const aTag: any = r.getElementsByTagName('span')[0].innerText;
      if (aTag.toLowerCase().includes(this.filterText.toLowerCase())) {
        r.classList.remove('hidden');
      } else {
        r.classList.add('hidden');
      }
    }
  }

  setIDName = (lvl) => {
    return `lvl${lvl.spellLevel}-${this.charID}`;
  }

  filteredSpells = (lvl: number) => {
    if(this.levelBreakDown[0].spellLevel === lvl){
      this.availableSpells = '';
    }
    const spellCount = this.spellList.filter( a => a.spellLevel === lvl);
    const freeSpells = spellCount.filter( spell => !spell.isCast).length;
    this.availableSpells =  this.availableSpells + freeSpells.toString();
    if (_.last(this.levelBreakDown).spellLevel === lvl) {
      this.spellStringBuilder.emit(this.availableSpells);
      return spellCount;
    }
    this.availableSpells =  this.availableSpells + ' / ';
    return spellCount;
  }

  getRemaining(arg): string {
    const count = this.spellList.filter(spell => spell.spellLevel === arg.spellLevel).length;
    const unused = this.spellList.filter(spell => spell.spellLevel === arg.spellLevel &&
      !spell.isCast).length;
    return `${unused} of ${count}`;
  }

  reportCheck = (evt: Event, id: string) => {
    let aSpell = this.spellList.find(x => x.id === parseInt(id));
    const chk = <HTMLInputElement> evt.target;
    aSpell.isCast = chk.checked;
    const body = {
      id,
      currentStatus: chk.checked
    }
    this.charDataSvc.toggleSpell(body).subscribe( retVal => {
      if(retVal === true){
        this.socket.emit('SPELLUPDATE', body);
        console.log('saved party sheet emit changes spell', body);
      }else{
        console.log('save error')
      }
    })
  }

}
