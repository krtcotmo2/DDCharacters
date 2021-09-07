import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PartyMember, PartyService } from 'src/app/services/party.service';
import _ from 'lodash';
import { CharDataService } from 'src/app/services/char-data.service';
import { CharService } from 'src/app/services/char.service';
import { Subscription } from 'rxjs';
import { SocketService } from 'src/app/services/socket.service';

@Component({
  selector: 'app-party-card',
  templateUrl: './party-card.component.html',
  styleUrls: ['./party-card.component.css']
})

export class PartyCardComponent implements OnInit {
  @Input() charID: number;
  @Input() dmTools: boolean;
  hpForm;
  partyID = _.last(this.router.url.split('/'));
  curHP: number;
  charName: string;
  charAC: number;
  isCaster = false;
  spellList: [];
  fortSave: number;
  reflexSave: number;
  willSave: number;
  hpModifier = 0;
  maxHP: number;
  theChar;
  currentMember: PartyMember;
  subs: Subscription[] = [];

  // private docSub: Subscription;

  constructor(
    private charSvc: CharService,
    private charDataSvc: CharDataService,
    private partyService: PartyService,
    private router: Router,
    private socketService: SocketService,
    private element: ElementRef<HTMLInputElement>,
  ) { }

  ngOnInit(): void {
    this.partyService.getAllParties.subscribe(
      val => {
        this.curHP = val.results.find( party => party.partyID.toString() === this.partyID && party.charID === this.charID).curHP;
      }
    );
    this.charSvc.getAllChars.subscribe( val => {
      const char = val.results.find( person => person.charID === this.charID)
      this.charName = char.charName;
      this.charAC = char.CharACs.reduce( (x, y) => x + y.score, 0 );
    });
    this.charDataSvc.loadSpells(this.charID).subscribe( spells => {
      this.isCaster = spells.results.length > 0;
      this.spellList = spells.results;
    });
    this.charDataSvc.loadSaves(this.charID.toString()).subscribe( saves => {
      this.isCaster = saves.results.length > 0;
      this.fortSave = saves.results.filter( save => save.saveID === 1 ).reduce( (x, y) => x + y.score, 0);
      this.reflexSave = saves.results.filter( save => save.saveID === 2 ).reduce( (x, y) => x + y.score, 0);
      this.willSave = saves.results.filter( save => save.saveID === 3 ).reduce( (x, y) => x + y.score, 0);
    });
    this.charDataSvc.loadCharBase(this.charID.toString()).subscribe( char => {
      this.maxHP = char.results.charHP;
      if (this.curHP > this.maxHP) {
        this.curHP = this.maxHP;
      }
    });
    // this.docSub = this.partyService.getAllParties
    //   .subscribe(parties => {
    //     this.currentMember = parties.results.find(person =>
    //     person.charID === this.charID && person.partyID === this.partyID);
    // });
    this.subs.push(
      this.socketService.getUpdatedData().subscribe( (data: any): void => {
        if (data.currentMember.charID === this.charID) {
          this.currentMember = data;
          this.curHP = data.currentMember.curHP;
        }
      })
    );
  }

  addHP = async (heal: boolean): Promise<void> => {
    if (!+this.hpModifier) {
      this.hpModifier = 0;
      return;
    }
    this.curHP = this.curHP + (this.hpModifier * (heal ? 1 : -1));
    if(this.curHP > this.maxHP){
      this.curHP = this.maxHP;
    }
    await this.partyService.updateHP(
      +this.partyID,
      this.charID,
      this.curHP
    ).subscribe();
    this.hpModifier = 0;
  }
  doNothing = (evt: Event): void => {
    evt.preventDefault();
  }
}


