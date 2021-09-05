import { Component, Input, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { CharDataService } from '../../services/char-data.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import _ from 'lodash';
import {Stats, Saves} from '../../helpers/enum';

interface CharLevels {
  classLevel: number;
  CharClass: {
    className: string;
    classID: number;
  }
}
@Component({
  selector: 'app-char-level',
  templateUrl: './char-level.component.html',
  styleUrls: ['./char-level.component.css']
})
export class CharLevelComponent implements OnInit {
  modForm;
  charBasic;
  theLevels: CharLevels[];
  charID: number;
  charClass;
  avaialbleClasses = [
    {value: 1, name: 'Barbarian'},
    {value: 2, name: 'Bard'},
    {value: 3, name: 'Cleric'},
    {value: 4, name: 'Druid'},
    {value: 5, name: 'Fighter'},
    {value: 6, name: 'Monk'},
    {value: 7, name: 'Paladin'},
    {value: 8, name: 'Ranger'},
    {value: 9, name: 'Rogue'},
    {value: 10, name: 'Sorcerer'},
    {value: 11, name: 'Wizard'}
  ]
  numFinished = 0;


  constructor(private charDataSvc: CharDataService,
              private router: Router,
              private http: HttpClient) { }

  ngOnInit(): void {
    this.charDataSvc.getCharID.subscribe( (val) => this.charID = val);
    if (this.charID === 0){
      this.router.navigate(['/charGen']);
    }
    this.charDataSvc.getCharBasics.subscribe( (val) => {
      this.charBasic = val;
      this.theLevels = [...val.results.CharLevels];
      this.charID = val.results.charID;
    });

  }

  onSubmit = (evt) => {
    evt.preventDefault();
    this.numFinished = 0;
    const arrLen = this.theLevels.length;
    if (this.theLevels[arrLen - 1].CharClass.classID === 0) {
      const classID = document.getElementsByName('charClass')[0]['value'];
      this.theLevels[arrLen - 1].CharClass.classID = document.getElementsByName('charClass')[0]['value'];
      this.theLevels[arrLen - 1].CharClass.className = this.avaialbleClasses.find(x => x.value === parseInt(classID, 10)).name;
    }
    this.theLevels.map( (cl) => {
      this.charDataSvc.insertClassLevels({charID: this.charID, classID: cl.CharClass.classID, classLevel: cl.classLevel})
        .subscribe( val => {
          this.numFinished++;
          if (this.numFinished === this.theLevels.length) {
            this.charBasic.results.CharLevels = [...this.theLevels];
            this.charDataSvc.setCharBasics(this.charBasic);
            this.router.navigate(['/charGen']);
          }
        });
    });
  }

  onCancel = () => {
    this.theLevels.pop();
    this.router.navigate(['/charGen']);
  }

  setInputName = (prefix: string, id: string) => {
    return prefix + id;
  }

  addLevel = (evt) => {
    const newClass = {
      classLevel: 1,
      CharClass: {
        className: 'string',
        classID: 0,
      }
    };
    this.avaialbleClasses = this.avaialbleClasses.filter(cl => {
      return !this.theLevels.find(arg => arg.CharClass.classID === cl.value);
    });
    this.theLevels.push(newClass);
    evt.target.classList.add('disabled');
  }
}
