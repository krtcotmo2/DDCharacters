import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { CharDataService } from '../../services/char-data.service';
import { UserService } from '../../services/user.service';
import _ from 'lodash';
@Component({
  selector: 'app-char-ac',
  templateUrl: './char-ac.component.html',
  styleUrls: ['./char-ac.component.css']
})
export class CharACComponent implements OnInit {
  charID: number;
  isMyCharacter: boolean;
  loggedIn: {};
  allACs=  [];
  grpACs = [];
  charBasic: any;
  filterText = '';

  constructor(
    private charDataSvc: CharDataService,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.userService.getUser.subscribe( (val) => this.loggedIn = val);
    this.charDataSvc.getCharID.subscribe( (val) => this.charID = val);
    this.charDataSvc.getCharBasics.subscribe( (val) => this.charBasic = val);
    this.isMyCharacter = this.loggedIn['userID'] === this.charBasic.results.userID;
    this.charDataSvc.getAllACs.subscribe( (val) => this.allACs = val === null ? [] : val.results);
    this.charDataSvc.getAllACGrps.subscribe( (val) => this.grpACs = val === null ? [] : val.results);

    if(this.grpACs.length > 0){
      this.createACGrps(this.grpACs, this.allACs);
    }
  }


  createACGrps = (grps, ar) => {
   for( const grp of grps){
     const temp = ar.filter( i => i.acID === grp.acID);
     const score = temp.reduce( (a, b) => a + b.score, 0);
     const breakdown = [];
     const tempSk = temp.find(d => d.isBase);
     if(tempSk){
       breakdown.push({score: tempSk.score, desc: 'Base'})
     }
     for( const aSk of temp.filter(d => d.isBase === false)){
       const reason = aSk.modDesc;
       breakdown.push({score: aSk.score, desc: reason})
     }
     grp.id = grp.acID;
     grp.score = score;
     grp.breakdown =  breakdown;
     console.log(grp)
   }
   this.grpACs = _.orderBy(this.grpACs, 'sortValue', 'asc');
 }

  editArmorClass(arg){
    // this.router.navigate(['/charGen/mods/newtohit/' + arg]);
  }

  filterList = evt => {
    // this.filterText = evt.target.value;
    // const allRows: any = document.getElementsByClassName('ui grid gridRow');
    // for(let r of allRows){
    //   const aTag: any = r.getElementsByTagName('span')[0].innerText;
    //   if (aTag.toLowerCase().includes(this.filterText.toLowerCase())) {
    //     r.classList.remove('hidden');
    //   } else {
    //     r.classList.add('hidden');
    //   }
    // }

  }

  showBreakDown(evt){
    const gridRowsElements = document.getElementsByClassName('gridRow');
    const  gridRows = Array.prototype.slice.call(gridRowsElements);
    const filtered = gridRows.filter(element =>  {
      return element.contains(evt.target);
    });
    const myRow = filtered[0].children;
    myRow[3].classList.toggle('expanded');
  }

  editAC(arg){
    // this.router.navigate(['/charGen/mods/newtohit/' + arg]);
  }

  drop(event: CdkDragDrop<string[]>) {
    const anArray = [event.previousIndex, event.currentIndex].sort();
    moveItemInArray(this.grpACs, event.previousIndex, event.currentIndex);
    this.grpACs.map( (c, i) => c.sortValue = i + 1);
    const passVal = _.slice(this.grpACs, anArray[0],  anArray[1] + 1);
    this.charDataSvc.reorderACs({ updates: passVal}).subscribe( (arg) => {
    });
  }
}
