import { Component, OnInit } from '@angular/core';
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

  theID = _.last(this.router.url.split('/'));
  peeps = [5,8,9,10,11];

  constructor(
    private partyService: PartyService,
    private router: Router
  ) { }

  ngOnInit(): void {
    console.log(this.theID)
  }

}
