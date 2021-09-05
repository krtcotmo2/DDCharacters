import { Component, OnInit } from '@angular/core';
import { DiceRollService } from '../../helpers/dice-roll.service';
import {Router} from '@angular/router';
import { CharDataService } from '../../services/char-data.service';
import { UserService } from '../../services/user.service';
import { faDice } from '@fortawesome/free-solid-svg-icons';
import { Stats} from '../../helpers/enum';
import { DomSanitizer } from '@angular/platform-browser'

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
  selector: 'app-generate',
  templateUrl: './generate.component.html',
  styleUrls: ['./generate.component.css']
})
export class GenerateComponent implements OnInit {
  faDice = faDice;
  statType = Stats;
  charID: number;
  curChar: string;
  stats = [];
  strMod: number;
  loggedIn: {};
  isMyCharacter: boolean;
  charBasic: CharBasics;

  constructor(
    private dr: DiceRollService,
    private charDataSvc: CharDataService,
    private userService: UserService,
    private sanitizer: DomSanitizer,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.userService.getUser.subscribe( (val) => this.loggedIn = val);
    this.charDataSvc.getCharID.subscribe( (val) => this.charID = val);
    this.charDataSvc.getCharBasics.subscribe( (val) => this.charBasic = val);
    this.isMyCharacter = this.loggedIn['userID'] === this.charBasic.results.userID;
    this.charDataSvc.getAllStats.subscribe( (val) => this.stats = val === null ? [] : val.results);
    this.charDataSvc.getAllStats.subscribe( (val) => this.curChar = val === null ? "0" :val.charID);
    if (this.charID && this.charID.toString() !== this.curChar) {
      this.stats = [];
      this.charDataSvc.loadStats(this.charID).subscribe( sts => {
        this.stats = sts.results;
        this.charDataSvc.setStats(sts);
        this.charDataSvc.setCurCharID(this.charID);
      });
     } else {
    }
  }


  processStats(stat: number){
    const curStats = this.stats.filter(item => item.statID === stat);
    switch (stat){
      case 1:
        return curStats.reduce( (a, b) => a + b.score, 0);
      case 2:
        return curStats.reduce( (a, b) => a + b.score, 0);
      case 3:
        return curStats.reduce( (a, b) =>  a + b.score, 0);
      case 4:
        return curStats.reduce( (a, b) =>  a + b.score, 0);
      case 5:
        return curStats.reduce( (a, b) =>  a + b.score, 0);
      case 6:
        return curStats.reduce( (a, b) =>  a + b.score, 0);
      default:
        break;
    }
  }

  processModified(val: number){
    return (val < 10 ? '' : '+') + Math.floor((val - 10) / 2).toString();;
  }

  processBreakDown(stat){
    const desc = stat.isBase ? ' Base stat' : '  '+ stat.modDesc;
    const score = stat.score.toString();
    return this.sanitizer.bypassSecurityTrustHtml('<span style="width:36px; display:inline-block; text-align:right">' + score + "</span> - " + desc);
  }

  rollAll = () => {
    this.getStat(5, 'str');
    this.getStat(4, 'dex');
    this.getStat(5, 'con');
    this.getStat(4, 'int');
    this.getStat(4, 'wis');
    this.getStat(4, 'chr');
  }

  getStat = (arg, stat) => {
    const roll1 = this.dr.sumRoll(6, arg, 3);
    const roll2 = this.dr.sumRoll(6, arg, 3);
    this.stats[stat] = Math.max(roll1, roll2);
  }

  reset = () => {
    this.stats = []
  }


  showBreakDown(evt){
    const gridRowsElements = document.getElementsByClassName('gridRow');
    const  gridRows = Array.prototype.slice.call(gridRowsElements);
    const filtered = gridRows.filter(element =>  {
      return element.contains(evt.target);
    });
    const myRow = filtered[0].children;
    myRow[4].classList.toggle('expanded');
  }

  ediStat = (arg: number) => {
    this.router.navigate(['/charGen/mods/stat/' + arg]);
  }
  calculateFirstCol = () => {
    if (window.innerWidth > 1000) {
      return 'stat column one wide';
    }
    return 'stat column two wide';
  }
  calculateWideCol = (add: number) => {
    if (window.innerWidth > 1000) {
      return `column ${add === 1 ? 'eleven' : 'twelve'} wide`;
    }
    return `column ${add === 1 ? 'twelve' : 'eleven'} wide`;
  }
}
