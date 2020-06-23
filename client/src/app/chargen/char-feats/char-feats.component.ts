import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';
import { CharService } from '../../services/char.service';
import { CharDataService } from '../../services/char-data.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-char-feats',
  templateUrl: './char-feats.component.html',
  styleUrls: ['./char-feats.component.css']
})
export class CharFeatsComponent implements OnInit {
  isNew: boolean;
  curChar: string;
  charID: number;
  featForm = new FormGroup({
    val1: new FormControl('1')
  });
  allFeats = [];
  filterText = '';

  constructor(private charSvc: CharService,
    private charDataSvc: CharDataService,
    private router: Router) {

   }


   ngOnInit(): void {
    this.charDataSvc.getIsNew.subscribe( (val) => this.isNew = val);
    this.charDataSvc.getCharID.subscribe( (val) => this.charID = val);

    this.charDataSvc.getAllFeats.subscribe( (val) => this.allFeats = val === null ? [] : val.results);
    this.charDataSvc.getAllFeats.subscribe( (val) => this.curChar = val === null ? "0" :val.charID);
    if (!this.isNew && this.charID && this.charID.toString() !== this.curChar) {
      this.allFeats = [];
      this.charDataSvc.loadFeats(this.charID.toString()).subscribe( results => {
        this.allFeats = results.results;
        this.charDataSvc.setAllFeats(results);
        console.log(this.allFeats)
      });
    } else {
      this.charDataSvc.getAllFeats.subscribe( (val) => this.allFeats = val.results);

    }
  }
  addNewFeat = () => {
    this.router.navigate(['/charGen/mods/newfeat']);
  }
  filterList = (evt) => {
    this.filterText = evt.target.value;
    const allRows: any = document.getElementsByClassName('ui grid gridRow');
    for(let r of allRows){
      const aTag: any = r.getElementsByTagName('div')[0].innerText;
      const bTag: any = r.getElementsByTagName('div')[1].innerText;
      if (aTag.toLowerCase().includes(this.filterText.toLowerCase()) || bTag.toLowerCase().includes(this.filterText.toLowerCase())) {
        r.classList.remove('hidden');
      } else {
        r.classList.add('hidden');
      }
    }
  }

}
