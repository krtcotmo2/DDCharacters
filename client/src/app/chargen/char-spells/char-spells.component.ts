import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CharDataService } from '../../services/char-data.service';
import { UserService } from '../../services/user.service';
import { CharBasics } from '../../services/char-data.service';
import _ from 'lodash';
import { Subscription } from 'rxjs';
import { SocketService } from 'src/app/services/socket.service';
import { Socket } from 'ngx-socket-io';

@Component({
  selector: 'app-char-spells',
  templateUrl: './char-spells.component.html',
  styleUrls: ['./char-spells.component.css']
})
export class CharSpellsComponent implements OnInit {
  allSpells = [];
  levelBreakDown = [];
  subs: Subscription[] = [];
  spellName: string;
  spellLevel: number;
  filterText = '';
  showingForm = false;
  charID: number;
  loggedIn: {};
  isMyCharacter: boolean;
  charBasic: CharBasics;

  constructor(
    private charDataSvc: CharDataService,
    private userService: UserService,
    private router: Router,
    private socketService: SocketService,
    private socket: Socket,
  ) { }

  ngOnInit(): void {
    this.userService.getUser.subscribe((val) => this.loggedIn = val);
    this.charDataSvc.getCharID.subscribe((val) => this.charID = val === null ? 0 : val);
    this.charDataSvc.getCharBasics.subscribe((val) => this.charBasic = val);
    this.isMyCharacter = this.loggedIn['userID'] === this.charBasic.results.userID;
    this.charDataSvc.loadSpells(this.charID).subscribe(val => {
      this.allSpells = val.results;
      this.charDataSvc.setAllSpells(val);
      this.levelBreakDown = Array.from(Array(this.allSpells.slice(-1).pop().spellLevel + 1), (_, i) => i);
    });
    this.subs.push(
      this.socketService.updateSpell().subscribe((data: any): void => {
        const aSpell = this.allSpells.find(spell => spell.id === data.id);
        if (aSpell) {
          aSpell.isCast = data.currentStatus;
          this.levelBreakDown = Array.from(Array(this.allSpells.slice(-1).pop().spellLevel + 1), (_, i) => i);
        }
      }),
    );
  }

  filterList = (evt) => {
    this.filterText = evt.target.value;
    const allRows: any = document.getElementsByClassName('ui grid gridRow');
    for (let r of allRows) {
      const aTag: any = r.getElementsByTagName('span')[0].innerText;
      if (aTag.toLowerCase().includes(this.filterText.toLowerCase())) {
        r.classList.remove('hidden');
      } else {
        r.classList.add('hidden');
      }
    }
  }

  addNewSpell = (evt: Event) => {
    this.showingForm = true;
  }

  cancelAdd = (event: Event) => {
    event.preventDefault();
    this.showingForm = false;
  }
  onSubmit = (evt: Event) => {
    evt.preventDefault();
    const body = {
      charID: this.charID,
      name: this.spellName,
      level: this.spellLevel
    }
    this.charDataSvc.insertSpell(body).subscribe(val => {
      this.allSpells = [...this.allSpells, val];
      let nameSorter = spell => spell.spellName.toLowerCase();
      this.allSpells = _.orderBy(this.allSpells, ['spellLevel', nameSorter], ['asc', 'asc']);
      this.levelBreakDown = Array.from(Array(this.allSpells.slice(-1).pop().spellLevel + 1), (_, i) => i);
      this.spellLevel = null;
      this.spellName = '';
      this.showingForm = false;
      this.charDataSvc.broadcastMessage('ADDSPELL', val);
    })
  }

  editNote = (id: string) => {
    let chosenSpell = this.allSpells.find(s => s.id.toString() === id);
    this.router.navigate(['/charGen/spells/' + id], { state: { data: { spellLevel: chosenSpell.spellLevel, spellName: chosenSpell.spellName } } });

  }

  filteredSpells = (l: number) => {
    return this.allSpells.filter(a => a.spellLevel === l);
  }
  toggelDisplay = (evt: Event, arg: number) => {
    const el: HTMLDivElement = <HTMLDivElement>document.getElementById('lvl' + arg.toString());
    el.classList.toggle('collapsed');
    const ico: HTMLElement = <HTMLElement>evt.target;
    ico.classList.toggle('down')
    ico.classList.toggle('right')
  }
  setIDName = (lvl) => {
    return 'lvl' + lvl.toString();
  }

  reportCheck = (evt: Event, id: string) => {
    const aSpell = this.allSpells.find(x => x.id === parseInt(id, 10));
    const chk = evt.target as HTMLInputElement;
    aSpell.isCast = chk.checked;
    const body = {
      id,
      currentStatus: chk.checked,
      spellName: aSpell.spellName,
    }
    this.charDataSvc.toggleSpell(body).subscribe(retVal => {
      if (retVal === true) {
        console.log('saved');
      } else {
        console.log('save error')
      }
    })
  }
}
