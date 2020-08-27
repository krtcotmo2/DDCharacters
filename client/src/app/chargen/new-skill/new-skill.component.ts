import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { CharDataService } from '../../services/char-data.service';

@Component({
  selector: 'app-new-skill',
  templateUrl: './new-skill.component.html',
  styleUrls: ['./new-skill.component.css']
})
export class NewSkillComponent implements OnInit {
  charID: number;
  curChar: string;
  curSkills;
  allSkills =  [];

  constructor(private charDataSvc: CharDataService,
    private router: Router) { }

  ngOnInit(): void {
    this.charDataSvc.getCharID.subscribe( (val) => this.charID = val);
    this.charDataSvc.getAllSkills.subscribe( (val) => this.curChar = val.charID);
    this.charDataSvc.getAllSkills.subscribe( (val) => this.curSkills = val);
    const ids = [...new Set(this.curSkills.results.map(i => i.skillID))];
    this.getAllSkills(ids);
  }

  getAllSkills(arr){
    this.charDataSvc.loadOtherSkills(arr).subscribe(arg => {
      this.allSkills = arg.results;
    })
  }

  optionSelected(event){
    const selected = event.target.getAttribute("data-value");
    const aSkill = this.allSkills.find(arg => arg.skillID.toString() === selected);
    const newSkill = {
      Skill:{...aSkill},
      skillID: aSkill.skillID,
      isRanks: true,
      isMod: false,
      isClassSkill: false,
      modDesc: '',
      charID: this.charID,
      score: 0,
      id: 0
    }

    this.charDataSvc.saveNewSkill(this.charID, aSkill).subscribe(val => {
      this.curSkills.results.push(val);
      this.charDataSvc.setAllSkills(this.curSkills);
      this.router.navigate(['/charGen/skills']);
    })
  }
}
