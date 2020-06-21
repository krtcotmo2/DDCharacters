import { Component, OnInit } from '@angular/core';
import { CharDataService } from '../../services/char-data.service';
import {Router} from '@angular/router';

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
}
