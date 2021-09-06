import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Party, PartyService } from 'src/app/services/party.service';
import { UserService } from 'src/app/services/user.service';
import _ from 'lodash';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  loggedIn: {};
  allParties = [];
  filterText = '';

  constructor(
    private partyService: PartyService,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.userService.getUser.subscribe( (val) => this.loggedIn = val);
    this.partyService.getAllParties.subscribe( val => {
        console.log(val.results);
        this.allParties = _.uniqBy(val.results, 'partyID');
        console.log(this.allParties);
      });
    this.partyService.loadParties().subscribe( val => {
        this.allParties = val.results;
        this.partyService.setAllParties(val);
      });
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

  addNewParty = () => {
    this.router.navigate(['/party/new']);
  }
}
