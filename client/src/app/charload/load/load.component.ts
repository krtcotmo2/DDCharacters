import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { CharService } from '../../services/char.service';
import { CharDataService } from '../../services/char-data.service';
import {CharCardComponent} from "../char-card/char-card.component"
import { UserService } from 'src/app/services/user.service';
import { BrowserModule, Title } from '@angular/platform-browser';

interface Character {
  results: {
    charID: number;
    charName: string;
    charHP: number;
    Race: {
      raceDesc: string;
    },
    User: {
      userName: string;
      userEmail: string;
    },
    CharAcs: {
      score: number;
      acID: number;
    }[],
    ACs: {
      sortValue: number;
      acID: number;
    }[],
    CharLevels: {
      classLevel: number;
      CharClass: {
        className: string;
      }
    }[],
    Alignment:{
      alignID: number;
      alignName: string;
    }
  }[];
}


@Component({
  selector: 'app-load',
  templateUrl: './load.component.html',
  styleUrls: ['./load.component.css']
})
export class LoadComponent implements OnInit {
  characters = [];
  deadCharacters = [];
  charID: number;
  loggedIn: {};

  constructor(private charSvc: CharService,
              private charDataSvc: CharDataService,
              private userService: UserService,
              private titleService: Title,
              private router: Router) { }

  ngOnInit(): void {
    this.userService.getUser.subscribe( (val) => this.loggedIn = val);

    this.charSvc.getChars().subscribe( results => {
      const allChar = results.results;
      const myChar = allChar.filter( (char) => (char.User.userEmail === this.loggedIn['userEmail'] && !char['isDead']));
      const notMyChar = allChar.filter(char =>
        char.User.userEmail !== this.loggedIn['userEmail'] ||
        (char.User.userEmail === this.loggedIn['userEmail'] && char['isDead'])
      );
      this.characters = [...myChar, ...notMyChar];
      console.log(111, this.characters, myChar);
      this.charSvc.setAllChars(results);
    });

    this.titleService.setTitle('Load Character');

  }
  displayChar = async (id: number, name: string) => {
    this.charDataSvc.reset();
    this.charDataSvc.loadCharBase(id.toString()).subscribe( async val => {
      this.charDataSvc.setCharBasics(val);
      this.charDataSvc.setCharID(id);
      this.charDataSvc.setCharName(name);
      this.router.navigate(['/charGen']);
    });

  }
  getClasses = (arr) => {
    const str = []
    for ( const c of arr){
      str.push(c.CharClass.className);
    }
    return str.join(', ');
  }

  getLevels = (arr: []) => {
    const str = []
    for ( const c of arr){
      str.push(c['classLevel']);
    }
    return str.join('/');
  }
}
