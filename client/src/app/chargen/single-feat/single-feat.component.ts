import { Component, OnInit, Input } from '@angular/core';
import {Router} from '@angular/router';
import { CharDataService } from '../../services/char-data.service';
import { UserService } from '../../services/user.service';

interface CharBasics {
  charID: string;
  results: {
    charID: number;
    charName: string;
    charHP: number;
    init: number;
    userID: number;
    Alignment: {
      alignID: number;
      alignName: string;
    },
    Race: {
      raceID: number;
      raceDesc: string;
    },
    CharLevels: {
      classLevel: number;
      CharClass: {
        className: string;
        classID: number;
      }
    }[]
  };
}

@Component({
  selector: 'app-single-feat',
  templateUrl: './single-feat.component.html',
  styleUrls: ['./single-feat.component.css']
})
export class SingleFeatComponent implements OnInit {
  @Input() charFeats: [];
  charID: number;
  loggedIn: {};
  isMyCharacter: boolean;
  charBasic: CharBasics;

  constructor( private router: Router,
    private userService: UserService,
    private charDataSvc: CharDataService) { }

  ngOnInit(): void {
    this.userService.getUser.subscribe( (val) => this.loggedIn = val);
    this.charDataSvc.getCharID.subscribe(val => this.charID = val);
    this.charDataSvc.getCharBasics.subscribe( (val) => this.charBasic = val);
    this.isMyCharacter = this.loggedIn['userID'] === this.charBasic.results.userID;
  }

  showPreReq = (evt) => {
    const gridRowsElements = document.getElementsByClassName('gridRow');
    const  gridRows = Array.prototype.slice.call(gridRowsElements);
    const filtered = gridRows.filter(element =>  {
      return element.contains(evt.target);
    });
    const myRow = filtered[0];
    myRow.children[3].classList.toggle('expanded');
  }

  deleteFeat = (arg: number) => {
    this.charDataSvc.deleteFeat(arg).subscribe( val => {
      const newArray = this.charFeats.filter(ft => ft['id'] !== arg);
      this.charDataSvc.setAllFeats({charID: this.charID, results: newArray});
      this.router.navigate(['/charGen/feats']);
    });
  }
}
