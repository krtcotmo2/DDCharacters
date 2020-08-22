import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { CharDataService } from '../../services/char-data.service';
import { UserService } from '../../services/user.service';
import _ from 'lodash';

@Component({
  selector: 'app-char-tohit',
  templateUrl: './char-tohit.component.html',
  styleUrls: ['./char-tohit.component.css']
})
export class CharTohitComponent implements OnInit {
  charID: number;
  curChar: string;
  partID = _.last(this.router.url.split('/'));
  allHits=  [];
  grpHits = [];
  filterText = '';
  loggedIn: {};
  isMyCharacter: boolean;
  charBasic: any;

  constructor(private charDataSvc: CharDataService,
    private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
    this.userService.getUser.subscribe( (val) => this.loggedIn = val);
    this.charDataSvc.getCharID.subscribe( (val) => this.charID = val);
    this.charDataSvc.getCharBasics.subscribe( (val) => this.charBasic = val);
    this.isMyCharacter = this.loggedIn['userID'] === this.charBasic.results.userID;
    this.charDataSvc.getAllToHits.subscribe( (val) => this.allHits = val === null ? [] : val.results);
    this.charDataSvc.getAllToHits.subscribe( (val) => this.curChar = val === null ? "0" :val.charID);
    if (this.charID && this.charID.toString() !== this.curChar) {
      this.charDataSvc.loadToHits(this.charID.toString()).subscribe( val => {
        this.allHits = val.results;
        this.charDataSvc.setAllToHits(val);
        if (this.allHits.length > 0){
          this.grpHits = this.createToHitGrps(this.allHits);
        }
      });
    }
    if(this.allHits.length > 0){
      this.grpHits = this.createToHitGrps(this.allHits);
    }
  }

  createToHitGrps = ar => {
     // tslint:disable:max-line-length
    let retVal = [];
    const ids = [...new Set(ar.map(i => i.toHitID))];

    for( const sid of ids){
      const temp = ar.filter( i => i.toHitID === sid);
      const score = temp.reduce( (a, b) => a + b.score, 0);
      const breakdown = [];
      const tempSk = temp.find(d => d.isBase);
      const toHitOrder = temp[0].ToHit.toHitOrder;
      if(tempSk){
        breakdown.push({score: tempSk.score, desc: 'Base'})
      }
      for( const aSk of temp.filter(d => d.isBase === false)){
        const reason = aSk.modDesc;
        breakdown.push({score: aSk.score, desc: reason})
      }
      const obj = {id: sid, score: score, toHitOrder: toHitOrder, toHitDesc: temp[0].ToHit.toHitDesc, damage: temp[0].ToHit.damage, critRange: temp[0].ToHit.critRange, critDamage: temp[0].ToHit.critDamage, breakdown: breakdown};
      retVal.push(obj);
    }
    return _.orderBy(retVal, 'toHitOrder', 'asc');
  }

  showBreakDown(evt){
    const gridRowsElements = document.getElementsByClassName('gridRow');
    const  gridRows = Array.prototype.slice.call(gridRowsElements);
    const filtered = gridRows.filter(element =>  {
      return element.contains(evt.target);
    });
    const myRow = filtered[0].children;
    myRow[7].classList.toggle('expanded');
  }
  editToHitMod(arg){
    this.router.navigate(['/charGen/mods/tohit/' + arg]);
  }
  editToHit(arg){
    this.router.navigate(['/charGen/mods/newtohit/' + arg]);
  }
  filterList = evt => {
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
  drop(event: CdkDragDrop<string[]>) {
    const anArray = [event.previousIndex, event.currentIndex].sort();
    moveItemInArray(this.grpHits, event.previousIndex, event.currentIndex);
    this.grpHits.map( (c, i) => c.toHitOrder = i + 1);
    const passVal = _.slice(this.grpHits, anArray[0],  anArray[1] + 1);
    this.charDataSvc.reorderToHits({ updates: passVal}).subscribe( (arg) => {
    });
  }
}
