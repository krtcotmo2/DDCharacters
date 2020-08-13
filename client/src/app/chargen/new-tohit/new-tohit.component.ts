import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { CharDataService } from '../../services/char-data.service';
import _ from 'lodash';

@Component({
  selector: 'app-new-tohit',
  templateUrl: './new-tohit.component.html',
  styleUrls: ['./new-tohit.component.css']
})
export class NewTohitComponent implements OnInit {
  modForm;
  isNew: boolean;
  charID: number;
  curChar: string;
  partID = _.last(this.router.url.split('/'));
  attribute = {};
  allHits;
  st = {score: 4, id: 1};

  constructor(private charDataSvc: CharDataService,
    private router: Router) { }

  ngOnInit(): void {
    this.charDataSvc.getIsNew.subscribe( (val) => this.isNew = val);
    this.charDataSvc.getCharID.subscribe( (val) => this.charID = val);
    this.charDataSvc.getAllToHits.subscribe( (val) => this.curChar = val.charID);
    //this.charDataSvc.getAllToHits.subscribe( (val) => this.allHits = val.results);
    this.charDataSvc.getAllToHits.subscribe( (val) => this.allHits = val);
    if (this.partID === '0'){
      this.attribute = {
        id: 0,
        toHitID: 0,
        score: 0,
        isBase: false,
        isMod: false,
        modDesc: '',
        ToHit: {
          critDamage: '',
          critRange: '',
          damage: '',
          toHitDesc: '',
        }
      };
    } else {
      this.attribute = this.allHits.results.find(arg => arg.toHitID.toString() === this.partID);
    }
  }
  onSubmit = (evt) => {
    evt.preventDefault();
    let obj = {...this.attribute['ToHit'], toHitID: parseInt(this.partID, 10)}
    this.charDataSvc.newToHit(this.charID, obj).subscribe( val => {
      if (val.results){
        this.allHits.results = this.allHits.results.filter(arg => arg.id !== val.results.id);
        const allRelatedAttacks = this.allHits.results.filter(arg => arg.toHitID === val.results.toHitID);
        const newTohit = val.results.ToHit;
        for(const hit of allRelatedAttacks){
          hit.ToHit = {...newTohit};
        }
        this.allHits.results.push(val.results);
        this.allHits.results.sort(function(a,b){
          return a.toHitID - b.toHitID;
        })
        this.charDataSvc.setAllToHits(this.allHits);
        this.router.navigate(['/charGen/tohits']);
      }
    });
  }

  onCancel = () => {
    this.router.navigate(['/charGen/tohits']);
  }

  setInputName(name, value){

  }
}
