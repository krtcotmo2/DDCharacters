import { Component, OnInit, Input } from '@angular/core';
import {Router} from '@angular/router';
import { CharDataService } from '../../services/char-data.service';


@Component({
  selector: 'app-char-skills',
  templateUrl: './char-skills.component.html',
  styleUrls: ['./char-skills.component.css']
})

export class CharSkillsComponent implements OnInit {
  isNew: boolean;
  charID: number;
  curChar: string;
  allSkills=  [];
  grpSkils = [];
  filterText:string;

  constructor(private charDataSvc: CharDataService,
    private router: Router) { }

  ngOnInit(): void {
    this.charDataSvc.getIsNew.subscribe( (val) => this.isNew = val);
    this.charDataSvc.getCharID.subscribe( (val) => this.charID = val);
    this.charDataSvc.getAllSkills.subscribe( (val) => this.allSkills = val === null ? [] : val.results);
    this.charDataSvc.getAllSkills.subscribe( (val) => this.curChar = val === null ? "0" :val.charID);
    if (!this.isNew && this.charID && this.charID.toString() !== this.curChar) {
      this.charDataSvc.loadSkills(this.charID.toString()).subscribe( val => {
        this.allSkills = val.results;
        this.charDataSvc.setAllSkills(val);
        if(this.allSkills.length > 0){
          this.grpSkils = this.createSkillGrps(this.allSkills);
        }
      });
    } else {
      if(this.allSkills.length > 0){
      this.grpSkils = this.createSkillGrps(this.allSkills);
    }
    }

  }
  showBreakDown(evt){
    const gridRowsElements = document.getElementsByClassName('gridRow');
    const  gridRows = Array.prototype.slice.call(gridRowsElements);
    const filtered = gridRows.filter(element =>  {
      return element.contains(evt.target);
    });
    const myRow = filtered[0].children;
    console.log(myRow)
    myRow[4].classList.toggle('expanded');
  }

  createSkillGrps = (ar) => {
    const retVal = [];
    const ids = [...new Set(ar.map(i => i.skillID))];
    for( const sid of ids){
      const temp = ar.filter( i => i.skillID === sid);
      console.log(temp)
      const score = temp.reduce( (a, b) => a + b.score, 0);
      const breakdown = [];
      const tempSk = temp.find(d => d.isRanks);
      breakdown.push({score: tempSk.score, desc: 'Ranks'})
      const clSk = temp.find(d => d.isClassSkill);
      if(clSk){
        breakdown.push({score: clSk.score, desc: 'Class Skill'})
      }
      for( const aSk of temp.filter(d => d.isRanks === false && d.isClassSkill === false)){
        const reason = aSk.isClassSkill ? 'Class Skill' : aSk.modDesc;
        breakdown.push({score: aSk.score, desc: reason})
      }

      const obj = {id: sid, score: score, skillName: temp[0].Skill.skillName, skillDesc: temp[0].Skill.skillDesc, breakdown: breakdown};
      retVal.push(obj);
    }
    retVal.sort( function (a,b) {
      return a.skillName < b.skillName ? -1 : 1;
    })
    return retVal;
  }
  editSkill = (arg: number) => {
    this.router.navigate(['/charGen/mods/skill/' + arg]);
  }
  addNewSkill = () => {
    this.router.navigate(['/charGen/mods/newskill']);
  }
  filterList = (evt) => {
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
}
