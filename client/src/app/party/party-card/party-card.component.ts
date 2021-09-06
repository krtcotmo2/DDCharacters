import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Party, PartyService } from 'src/app/services/party.service';
import _ from 'lodash';
import { PartyRoutingModule } from '../party-routing.module';
import { CharDataService } from 'src/app/services/char-data.service';
import { CharService } from 'src/app/services/char.service';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-party-card',
  templateUrl: './party-card.component.html',
  styleUrls: ['./party-card.component.css']
})

export class PartyCardComponent implements OnInit {
  @Input() charID: number;
  @Input() dmTools: boolean;
  //@Input() grpCalc: () => void;
  hpForm;
  partyID = _.last(this.router.url.split('/'));
  curHP: number;
  charName: string;
  charAC: number;
  isCaster = false;
  fortSave: number;
  reflexSave: number;
  willSave: number;
  hpModifier = 0;
  maxHP: number;

  constructor(
    private charSvc: CharService,
    private charDataSvc: CharDataService,
    private partyService: PartyService,
    private router: Router,
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
      this.charAC = char.CharACs.reduce( (x, y) => x+ y.score, 0 );
    });
    this.charDataSvc.loadSpells(this.charID).subscribe( spells => {
      this.isCaster = spells.results.length > 0;
    });
    this.charDataSvc.loadSaves(this.charID.toString()).subscribe( saves => {
      this.isCaster = saves.results.length > 0;
      this.fortSave = saves.results.filter( save => save.saveID === 1 ).reduce( (x, y) => x + y.score, 0);
      this.reflexSave = saves.results.filter( save => save.saveID === 2 ).reduce( (x, y) => x + y.score, 0);
      this.willSave = saves.results.filter( save => save.saveID === 3 ).reduce( (x, y) => x + y.score, 0);
    });
  }

  addHP = (heal: boolean): void => {
    if(!+this.hpModifier){
      this.hpModifier = 0;
      this.element.nativeElement.focus();
      return;
    }
    this.curHP = this.curHP + (this.hpModifier * (heal ? 1 : -1));
    this.hpModifier = 0;
    this.hpForm.focus();
  }
  doNothing = (evt: Event): void => {
    evt.preventDefault();
  }
}


