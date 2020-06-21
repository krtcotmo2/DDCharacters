import { Component, OnInit, Input } from '@angular/core';
import {Router} from '@angular/router';
import { CharDataService } from '../../services/char-data.service';
import { DomSanitizer } from '@angular/platform-browser'

@Component({
  selector: 'app-char-saves',
  templateUrl: './char-saves.component.html',
  styleUrls: ['./char-saves.component.css']
})
export class CharSavesComponent implements OnInit {
  isNew: boolean;
  charID: number;
  curChar: string;
  allSaves=  [];
  grpSaves = [];

  constructor(private charDataSvc: CharDataService,
    private router: Router,
    private sanitizer: DomSanitizer,) { }

  ngOnInit(): void {
    this.charDataSvc.getIsNew.subscribe( (val) => this.isNew = val);
    this.charDataSvc.getCharID.subscribe( (val) => this.charID = val === null ? 0 : val);
    this.charDataSvc.getAllSaves.subscribe( (val) => {
      this.curChar = val === null ? '0' : val.charID;
    });
    this.charDataSvc.getAllSaves.subscribe( (val) => this.allSaves = val === null ? null : val.results);
    if (!this.isNew && this.charID && this.charID.toString() !== this.curChar) {
      this.charDataSvc.loadSaves(this.charID.toString()).subscribe( val => {
        this.allSaves = val.results;
        this.charDataSvc.setSaves(val);
        this.grpSaves = this.createSaveGrps(this.allSaves);
      });
    } else {
      this.grpSaves = this.createSaveGrps(this.allSaves);
    }
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

  createSaveGrps = (ar) => {
    const retVal = [];
    const ids = [...new Set(ar.map(i => i.saveID))];
    for( const sid of ids){
      const temp = ar.filter( i => i.saveID === sid);
      const score = temp.reduce( (a, b) => a + b.score, 0);
      const breakdown = [];
      const tempSc = temp.find(d => d.isBase);
      breakdown.push({score: tempSc.score, desc: 'Base'})
      for( const aSk of temp.filter(d => d.isBase === false)){
        const reason = aSk.modDesc;
        breakdown.push({score: aSk.score, desc: reason})
      }
      const obj = {id: sid, score: score, saveName: temp[0].Save.saveDesc,  breakdown: breakdown};
      retVal.push(obj);
    }



    retVal.sort( function (a,b) {
      return a.skillName < b.skillName ? -1 : 1;
    })
    return retVal;
  }
  processBreakDown(stat){
    let retStr = ''
    for(let item of stat){
      const desc = item.desc;
      const score = item.score;
      retStr += '<div><span style="width:36px; display:inline-block; text-align:right">' + score + '</span> - ' + desc + '</div>';

    }
    return this.sanitizer.bypassSecurityTrustHtml(retStr);
  }
  processSaves(svid: number){
    if(this.allSaves === undefined || this.allSaves === null) return 0;
    const curStats = this.allSaves.filter(item => item.saveID === svid);
    return curStats.reduce( (a, b) => a + b.score, 0);
  }
  editSave = (arg: number) => {
    this.router.navigate(['/charGen/mods/save/' + arg]);
  }
}
