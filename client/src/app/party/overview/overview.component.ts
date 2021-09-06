import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Party, PartyService } from 'src/app/services/party.service';
import { UserService } from 'src/app/services/user.service';
import _ from 'lodash';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  partyID = _.last(this.router.url.split('/'));
  peeps: number[];
  dmTools = true;

  constructor(
    private partyService: PartyService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.partyService.getAllParties.subscribe(
      val => {
        const partydata = val.results.filter( party => party.partyID.toString() === this.partyID);
        this.peeps = partydata.map(arg => arg.charID);
      }
    );
  }

  toggleTools = () => {
    this.dmTools = !this.dmTools;
  }

}
