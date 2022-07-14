import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { CharDataService } from '../../services/char-data.service';
import _ from 'lodash';

@Component({
  selector: 'app-new-ac',
  templateUrl: './new-ac.component.html',
  styleUrls: ['./new-ac.component.css']
})
export class NewACComponent implements OnInit {
  modForm;
  charID: number;
  curChar: string;
  partID = _.last(this.router.url.split('/'));
  attribute = {};
  allACGrps;
  allACs;
  st = {score: 4, id: 1};

  constructor(
    private charDataSvc: CharDataService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.charDataSvc.getCharID.subscribe( (val) => this.charID = val);
    this.charDataSvc.getAllToHits.subscribe( (val) => this.curChar = val.charID);
    this.charDataSvc.getAllACGrps.subscribe( (val) => this.allACGrps = val);
    this.charDataSvc.getAllACs.subscribe( (val) => this.allACs = val);
    if (this.partID === '0'){
      this.attribute = {
      id: 0,
      acID: 0,
      acDesc: '',
      }
    } else {
      this.attribute = this.allACGrps.results.find(arg => arg.acID.toString() === this.partID);
    }
  }

  onSubmit = (evt) => {
    evt.preventDefault();
    let obj = {...this.attribute, acID: parseInt(this.partID, 10)}

    this.charDataSvc.newACGrp(this.charID, obj).subscribe( val => {
      if (val){
        this.allACGrps.results = this.allACGrps.results.filter(arg => arg.acID !== val.acID);
        this.allACGrps.results.push(val);
        this.charDataSvc.setAllACGrps(this.allACGrps);
        this.router.navigate(['/charGen/ac']);
      }
    });


  }
  onCancel = () => {
    this.router.navigate(['/charGen/ac']);
  }
}
