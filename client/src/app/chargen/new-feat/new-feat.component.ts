import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { CharDataService } from '../../services/char-data.service';

@Component({
  selector: 'app-new-feat',
  templateUrl: './new-feat.component.html',
  styleUrls: ['./new-feat.component.css']
})
export class NewFeatComponent implements OnInit {
  isNew: boolean;
  charID: number;
  curChar: string;
  curFeats;
  categories = [];
  allFeats =  [];
  filteredFeats =  [];
  selCat='Choose a Category';

  constructor(private charDataSvc: CharDataService,
    private router: Router) { }

  ngOnInit(): void {
    this.charDataSvc.getIsNew.subscribe( (val) => this.isNew = val);
    this.charDataSvc.getCharID.subscribe( (val) => this.charID = val);
    this.charDataSvc.getAllFeats.subscribe( (val) => this.curChar = val.charID);
    this.charDataSvc.getAllFeats.subscribe( (val) => this.curFeats = val);
    const ids = [...new Set(this.curFeats.results.map(i => i.id))];
    this.getAllFeats(ids);
  }

  getAllFeats(arr){
    this.charDataSvc.loadOtherFeats(arr).subscribe(arg => {
      this.categories = [...new Set(arg.results.map(i => i['type'] ))];
      this.allFeats = arg.results;
    })
  }

  optionSelected(event){
    const selected = event.target.getAttribute("data-value");
    const aFeat = this.allFeats.find(arg => arg.id.toString() === selected);
    const newFeat = {
      Feat:{...aFeat},
      featID: aFeat.featID,
      charID: true,
      id: 0
    }

    this.charDataSvc.saveNewFeat(this.charID, aFeat).subscribe(val => {
      this.curFeats.results.push(val);
      this.charDataSvc.setAllFeats(this.curFeats);
      this.router.navigate(['/charGen/feats']);
    })
  }

  categoryselected(event){
    this.selCat = event.target.innerText;
    this.filteredFeats = this.allFeats.filter(item => item['type'] === this.selCat);

  }}
