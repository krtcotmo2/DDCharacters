import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { CharService } from '../../services/char.service';

@Component({
  selector: 'app-new-party',
  templateUrl: './new-party.component.html',
  styleUrls: ['./new-party.component.css']
})
export class NewPartyComponent implements OnInit {
  partyForm;
  partyName: string;
  allCharacters;
  partyMembers;

  constructor(
    private charSvc: CharService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.charSvc.getChars().subscribe( results => {
      this.allCharacters = results.results.filter(char => !char['isDead']);
      this.charSvc.setAllChars(results);
    });
  }

  onSubmit = () => {

  }

  onCancel = evt =>{
    this.router.navigate(['/party/search']);
  }

  selected: boolean = false;
  toggleSelect = evt => {
    const hasClass = evt.target.classList.contains('selected');
    if(hasClass) {
      evt.target.className = '';
    } else {
      evt.target.className = 'selected';
    }
  }

}
