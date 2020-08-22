import { Component, OnInit } from '@angular/core';
import { CharDataService } from '../../services/char-data.service';
import { UserService } from '../../services/user.service';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {Router} from '@angular/router';
import _ from 'lodash';

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
  selector: 'app-char-equip',
  templateUrl: './char-equip.component.html',
  styleUrls: ['./char-equip.component.css']
})

export class CharEquipComponent implements OnInit {
  charID: number;
  curChar: number;
  loc: string;
  equip: string;
  wt: number;
  allEquip;
  equipForm;
  gatherNewInfo = false;
  filterText = '';
  totalWeight = 0;
  loggedIn: {};
  isMyCharacter: boolean;
  charBasic: CharBasics;

  constructor(private charDataSvc: CharDataService,
    private userService: UserService,
    private router: Router,) { }

  ngOnInit(): void {
    this.userService.getUser.subscribe( (val) => this.loggedIn = val);
    this.charDataSvc.getCharID.subscribe( (val) => this.charID = val);
    this.charDataSvc.getCharBasics.subscribe( (val) => this.charBasic = val);
    this.isMyCharacter = this.loggedIn['userID'] === this.charBasic.results.userID;
    this.charDataSvc.getAllEquip.subscribe( (val) => this.curChar = val.charID);
    this.charDataSvc.getAllEquip.subscribe( (val) => this.allEquip = val);
    if (this.charID && this.charID !== this.curChar) {
      this.charDataSvc.loadEquipment(this.charID).subscribe( val => {
        this.allEquip = val;
        this.charDataSvc.setAllEquipment(val);
        this.calcWeight();
      });
    }
    this.calcWeight();
  }
  deleteEquip = (evt, id) => {
    this.charDataSvc.deleteEquipment(id).subscribe( val => {
      this.allEquip.results = this.allEquip.results.filter(arg => arg.id !== id);
      this.charDataSvc.setAllEquipment(this.allEquip);
      this.calcWeight();
    });
  }
  toggleForm =() => {
    this.gatherNewInfo = true;
  }
  onSubmit = (evt) => {
    evt.preventDefault();
    const body ={
      charID: this.charID,
      equip: this.equip,
      weight: this.wt,
      location: this.loc
    }
    this.charDataSvc.addEquipment(body).subscribe(vals => {
      this.allEquip.results = [...this.allEquip.results, vals];
      this.charDataSvc.setAllEquipment(this.allEquip);
      this.equip ='';
      this.wt =0;
      this.loc ='';
      this.gatherNewInfo = false;
      this.calcWeight();
    });

  };

  filterList = (evt) => {
    this.filterText = evt.target.value;
    const aTable: any = document.getElementsByClassName('ui selectable celled table striped');
    const tbody = aTable[0].getElementsByTagName("tbody");
    const allRows = tbody[0].getElementsByTagName("tr");
    for(let r of allRows){
      const aTag: any = r.getElementsByTagName('td')[0].innerText;
      const cTag: any = r.getElementsByTagName('td')[2].innerText;
      if (aTag.toLowerCase().includes(this.filterText.toLowerCase()) || cTag.toLowerCase().includes(this.filterText.toLowerCase())) {
        r.classList.remove('hidden');
      } else {
        r.classList.add('hidden');
      }
    }
  }

  drop(event: CdkDragDrop<string[]>) {
    const anArray = [event.previousIndex, event.currentIndex].sort();
    moveItemInArray(this.allEquip.results, event.previousIndex, event.currentIndex);
    this.allEquip.results.map( (c, i) => c.equipOrder = i + 1);
    const passVal = _.slice(this.allEquip.results, anArray[0],  anArray[1] + 1);
    this.charDataSvc.reorderEqiup({ updates: passVal}).subscribe( (arg) => {
    });
  }

  calcWeight = () => {
    this.totalWeight = this.allEquip['results'].reduce( (a, b) => {
     return a + b.weight;
    }, 0);
  }
}
