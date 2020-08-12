import { Component, OnInit } from '@angular/core';
import { CharDataService } from '../../services/char-data.service';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {Router} from '@angular/router';
import _ from 'lodash';

@Component({
  selector: 'app-char-equip',
  templateUrl: './char-equip.component.html',
  styleUrls: ['./char-equip.component.css']
})
export class CharEquipComponent implements OnInit {
  isNew: boolean;
  charID: number;
  curChar: number;
  loc: string;
  equip: string;
  wt: number;
  allEquip;
  equipForm;
  gatherNewInfo = false;
  filterText = '';

  constructor(private charDataSvc: CharDataService,
    private router: Router,) { }

  ngOnInit(): void {
    this.charDataSvc.getIsNew.subscribe( (val) => this.isNew = val);
    this.charDataSvc.getCharID.subscribe( (val) => this.charID = val);
    this.charDataSvc.getAllEquip.subscribe( (val) => this.curChar = val.charID);
    this.charDataSvc.getAllEquip.subscribe( (val) => this.allEquip = val);
    if (!this.isNew && this.charID && this.charID !== this.curChar) {
      this.charDataSvc.loadEquipment(this.charID).subscribe( val => {
        this.allEquip = val;
        this.charDataSvc.setAllEquipment(val);
      });
    }
  }
  deleteEquip = (evt, id) => {
    console.log(id);
    this.charDataSvc.deleteEquipment(id).subscribe( val => {
      this.allEquip.results = this.allEquip.results.filter(arg => arg.id !== id);
      this.charDataSvc.setAllEquipment(this.allEquip);
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
    })
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
    console.log(anArray);
    moveItemInArray(this.allEquip.results, event.previousIndex, event.currentIndex);
    this.allEquip.results.map( (c, i) => c.equipOrder = i + 1);
    const passVal = _.slice(this.allEquip.results, anArray[0],  anArray[1] + 1);
    console.log(this.allEquip.results, passVal);
    this.charDataSvc.reorderEqiup({ updates: passVal}).subscribe( (arg) => {
      console.log(arg)
    })

  }
}
