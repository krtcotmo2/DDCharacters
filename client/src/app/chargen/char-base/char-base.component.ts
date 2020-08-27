import { Component, OnInit, Input, ɵConsole } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RaceService } from 'src/app/services/race.service';
import { ClassesService } from 'src/app/services/classes.service';
import { CharDataService } from '../../services/char-data.service';
import { UserService } from '../../services/user.service';
import {Router} from '@angular/router';
import { visitAll } from '@angular/compiler';

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

interface CharAC {
  charID: string;
  results: {
    id: number,
    charID: number,
    score: number,
    isBase: boolean,
    isMode: boolean,
    modDesc: string,
  }
}

@Component({
  selector: 'app-char-base',
  templateUrl: './char-base.component.html',
  styleUrls: ['./char-base.component.css']
})
export class CharBaseComponent implements OnInit {
  charID: number;
  curChar: string;
  races = [];
  classes = [];
  acs = {};
  collapsed = true;
  charName: string;
  charRace: string;
  charAlign: string;
  charHP: string;
  charAC: string;
  init: string;
  loggedIn: {};
  isMyCharacter: boolean;
  charBasic: CharBasics;

  charForm = new FormGroup({
    charName: new FormControl('', [
      Validators.required,
      Validators.minLength(5)
    ]),
    charRace: new FormControl('', [
      Validators.required,
    ]),
    classes: new FormControl('', [
      Validators.required,
    ]),
    charAlign: new FormControl('', [
      Validators.required,
    ]),
    charHP: new FormControl('', [
      Validators.required,
    ]),
    charAC: new FormControl('', [
      Validators.required,
    ]),
    init: new FormControl('', [
      Validators.required,
    ]),
  });
  constructor(private raceSvc: RaceService,
              private classSvc: ClassesService,
              private userService: UserService,
              private charDataSvc: CharDataService,
              private router: Router,) { }

  ngOnInit(): void {
    this.userService.getUser.subscribe( (val) => this.loggedIn = val);
    this.charDataSvc.getCharID.subscribe( (val) => this.charID = val);
    this.charDataSvc.getCharBasics.subscribe( (val) => this.charBasic = val);
    this.isMyCharacter = this.loggedIn['userID'] === this.charBasic.results.userID;
    this.charDataSvc.getCharBasics.subscribe( (val) => this.charBasic = val);
    this.curChar = this.charBasic.charID;
    this.charDataSvc.loadAC(parseInt(this.charBasic.charID)).subscribe( val => {
      this.charDataSvc.setAllACs(val);
      this.acs = val;
      this.charAC = this.acs['results'].reduce( (a, b) => a + b.score, 0 ).toString();
      this.charForm.patchValue( {charAC: this.charAC});
    });
    this.charName = this.charBasic.results.charName;
    this.charRace = this.charBasic.results.Race.raceDesc;
    this.charAlign = this.charBasic.results.Alignment.alignName;
    this.charHP = this.charBasic.results.charHP.toString();
    this.init = this.charBasic.results.init.toString();
    this.charForm.patchValue( {charName: this.charName,
      charRace: this.charRace,
      charAlign: this.charAlign,
      charHP: this.charHP
      });

  }

  onSubmit = () => {

  }

  editHP = charID => {
    this.router.navigate(['/charGen/mods/hp/' + charID]);
  }
  editAC = charID =>{
    this.router.navigate(['/charGen/mods/ac/' + charID]);
  }
  editInit = charID => {
    this.router.navigate(['/charGen/mods/init/' + charID]);
  }
  showBreakDown(evt){
    const gridRowsElements = document.getElementsByClassName('sixteen');
    const  gridRows = Array.prototype.slice.call(gridRowsElements);
    gridRows[0].classList.toggle('expanded');
  }

}
