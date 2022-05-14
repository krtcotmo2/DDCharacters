import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Party, PartyService } from 'src/app/services/party.service';
import { UserService } from 'src/app/services/user.service';
import _ from 'lodash';
import { BrowserModule, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  partyID = _.last(this.router.url.split('/'));
  hpForm;
  peeps: number[];
  dmTools = true;
  hpModifier = 0;

  constructor(
    private partyService: PartyService,
    private router: Router,
    private titleService: Title,
  ) { }

  ngOnInit(): void {
    this.partyService.getAllParties.subscribe(
      val => {
        const partydata = val.results.filter( party => party.partyID.toString() === this.partyID);
        this.peeps = partydata.map(arg => arg.charID);
      }
    );
    this.titleService.setTitle('Party Overview');
  }

  toggleTools = () => {
    this.dmTools = !this.dmTools;
  }
  addHP = (isHeal: boolean) => {
    this.partyService.partyHPUpdate({
      isHeal,
      hpModifier: this.hpModifier

    });
    this.hpModifier = 0;
  }
  doNothing = (evt: Event): void => {
    evt.preventDefault();
  }
}
