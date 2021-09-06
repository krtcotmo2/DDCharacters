import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Party, PartyService } from 'src/app/services/party.service';
import _ from 'lodash';
import { PartyRoutingModule } from '../party-routing.module';
import { CharDataService } from 'src/app/services/char-data.service';
import { CharService } from 'src/app/services/char.service';

@Component({
  selector: 'app-party-card',
  templateUrl: './party-card.component.html',
  styleUrls: ['./party-card.component.css']
})

export class PartyCardComponent implements OnInit {
  @Input() charID: number;
  @Input()  dmTools: boolean;
  partyID = _.last(this.router.url.split('/'));
  curHP: number;
  charName: string;
  charAC: number;
  isCaster = false;
  fortSave: number;
  reflexSave: number;
  willSave: number;



  constructor(
    private charSvc: CharService,
    private charDataSvc: CharDataService,
    private partyService: PartyService,
    private router: Router,
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

}


