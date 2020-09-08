import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { CharDataService } from '../../services/char-data.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import _ from 'lodash';
import {Stats, Saves} from '../../helpers/enum';

@Component({
  selector: 'app-char-mod',
  templateUrl: './char-mod.component.html',
  styleUrls: ['./char-mod.component.css']
})
export class CharModComponent implements OnInit {
  modForm;
  charID: number;
  partID = _.last(this.router.url.split('/'));
  attribute = []
  numChanged = 0;
  numFinished = 0;
  modType = this.getTypeOfMod();
  modName: string;
  mainTitle: string;
  scoreParts = [];
  theStats;
  theFeats;
  theSkills;
  theSaves;
  theToHits;
  theACs;
  theCharBasics;

  constructor(private charDataSvc: CharDataService,
              private router: Router,
              private http: HttpClient ) { }

  ngOnInit(): void {
    this.charDataSvc.getCharID.subscribe( (val) => this.charID = val);
    if (this.charID === 0){
      this.router.navigate(['/charGen']);
    }
    switch (this.modType){
      case 'skill':
        this.charDataSvc.getAllSkills.subscribe( (val) => this.theSkills = val);
        this.attribute = this.theSkills.results.filter(arg => arg.skillID.toString() === this.partID);
        break;
      case 'stat':
        this.charDataSvc.getAllStats.subscribe( (val) => this.theStats = val);
        this.attribute = this.theStats.results.filter(arg => arg.statID.toString() === this.partID);
        break;
      case 'feat':
        this.charDataSvc.getAllFeats.subscribe( (val) => this.theFeats = val);
        break;
      case 'tohit':
        this.charDataSvc.getAllToHits.subscribe( (val) => this.theToHits = val);
        this.attribute = this.theToHits.results.filter(arg => arg.toHitID.toString() === this.partID);
        break;
      case 'save':
        this.charDataSvc.getAllSaves.subscribe( (val) => this.theSaves = val);
        this.attribute = this.theSaves.results.filter(arg => arg.saveID.toString() === this.partID);
        break;
      case 'ac':
        this.charDataSvc.getAllACs.subscribe( (val) => {
          this.theACs = val;
          this.attribute = this.theACs.results.filter(arg => arg.charID === this.charID);
        });
        break;
      case 'hp':
          this.charDataSvc.getCharBasics.subscribe( (val) => this.theCharBasics = val);
          this.attribute = [{id:this.theCharBasics.charID ,score:this.theCharBasics.results.charHP}]
          break;
      case 'init':
        this.charDataSvc.getCharBasics.subscribe( (val) => this.theCharBasics = val);
        this.attribute = [{id:this.theCharBasics.charID ,score:this.theCharBasics.results.init}]
        break;
      case 'xp':
        this.charDataSvc.getCharBasics.subscribe( (val) => this.theCharBasics = val);
        this.attribute = [{id:this.theCharBasics.charID ,score:this.theCharBasics.results.charXP}]
        break;
      default:
        this.router.navigate(['/charGen']);
      }
    if (this.modType === 'skill'){
        this.attribute.sort(
          function (a,b) {
            if (a.isClassSkill && b.isRanks){
              return 1
            } else if (b.isClassSkill && a.isRanks){
              return -1;
            } else if (a.isClassSkill ){
              return -1;
            } else {
              return 1;
            }
          })
      }

    this.modName = this.getModName(this.attribute[0]);
    this.mainTitle = this.modType === 'skill' ? 'Ranks' : 'Base';
  }
  addMod = (evt) => {
    this.attribute.push({id: 0, score: '', modDesc: '', isMod: true, isRanks: false, isBase: false})
    evt.target.classList.add('disabled')
  }
  onSubmit = (evt) => {
    evt.preventDefault();
    this.numChanged = 0;
    this.numFinished = 0;
    for (let a of this.attribute){
      // tslint:disable:no-string-literal
      // tslint:disable:max-line-length
      const score = document.getElementsByName('score' + a.id);
      const desc = document.getElementsByName('desc' + a.id);
      const scoreNull = a.score === null ? '' : a.score.toString();
      const statChanged = scoreNull !== score[0]['value'];
      const baseChecked = document.getElementsByName('stat' + a.id);
      const descChnaged = (a.modDesc === undefined && desc.length === 0) || (a.modDesc !== null && a.modDesc !== desc[0]['value'].trim()) || (a.modDesc === null && desc[0]['value'].trim() !== '')  ;

      if (statChanged || descChnaged){
        this.numChanged++;
        let attrObj = {
          id: a.id,
          score: parseInt(score[0]['value'], 10),
          modDesc: desc.length > 0 ? desc[0]['value'].trim() : '',
          statID: parseInt(this.partID, 10),
          charID:  this.charID,
          isBase: baseChecked.length > 0 ? baseChecked[0]['checked'] : false ,
          isMod:  baseChecked.length > 1 ? baseChecked[1]['checked']: false ,
          isClassSkill: baseChecked[2] === undefined ? false :  baseChecked[2]['checked'],
        }

        if (this.modType === 'hp'){
          this.charDataSvc.updateHP(this.charID, attrObj.score).subscribe(val => {
            if(val.results){
              this.theCharBasics.results = {...this.theCharBasics.results, charHP: attrObj.score};
              this.charDataSvc.setCharBasics(this.theCharBasics);
              this.router.navigate(['/charGen']);
            }
          });
        } else if(this.modType === 'init'){
          this.charDataSvc.updateInit(this.charID, attrObj.score).subscribe(val => {
            if(val.results){
              this.theCharBasics.results = {...this.theCharBasics.results, init: attrObj.score};
              this.charDataSvc.setCharBasics(this.theCharBasics);
              this.router.navigate(['/charGen']);
            }
          });
        } else if(this.modType === 'xp'){
          this.charDataSvc.updateXP(this.charID, attrObj.score).subscribe(val => {
            if(val.results){
              this.theCharBasics.results = {...this.theCharBasics.results, charXP: attrObj.score};
              this.charDataSvc.setCharBasics(this.theCharBasics);
              this.router.navigate(['/charGen']);
            }
          });
        } else {
          this.charDataSvc.updateAttribute(this.modType, attrObj).subscribe( val => {
            let list = '';
            switch(this.modType){
              case 'skill':
                list = 'theSkills';
                break;
              case 'stat':
                list = 'theStats';
                break;
              case 'save':
                list = 'theSaves';
                break;
              case 'ac':
                list = 'theACs';
                break;
              case 'tohit':
                list = 'theToHits';
                break;
              case 'hp':
                list = 'theCharBasics';
              default:
                break;
            }
            if (a.id === 0){
              this[list].results.push(a);
            }
            this[list].results = this[list].results.map(li => {
              if (li.id === 0 || li.id === val.results.id){
                li = {...val.results};
                this.numFinished++;
              }
              return li;
            })

            try{
              switch(this.modType){
                case 'skill':
                  this.charDataSvc.setAllSkills(this.theSkills);
                  break;
                case 'stat':
                  this.charDataSvc.setStats(this.theStats);
                  break;
                case 'save':
                  this.charDataSvc.setSaves(this.theSaves);
                  break;
                case 'ac':
                  this.charDataSvc.setAllACs(this.theACs);
                  break;
                case 'tohit':
                  this.charDataSvc.setAllToHits(this.theToHits);
                  break;
                default:
                  break;
              }
            } catch (err){
              throw new Error("did not save")
            } finally {
              if (this.numChanged === this.numFinished){
                let retRoute =  this.modType.trim() === 'ac' ? '' : this.modType + 's';
                this.router.navigate(['/charGen/' + retRoute]);
              }
            }

          });
        }

      }
    }

  }
  onCancel = () => {
    switch(this.modType){
      case 'skill':
        this.router.navigate(['/charGen/skills']);
        break;
      case 'stat':
        this.router.navigate(['/charGen/stats']);
        break;
      case 'feat':
        this.router.navigate(['/charGen/stats']);
        break;
      case 'tohit':
        this.router.navigate(['/charGen/tohits']);
        break;
      case 'save':
          this.router.navigate(['/charGen/saves']);
          break;
      case 'ac':
        this.router.navigate(['/charGen']);
        break;
      case 'hp':
        this.router.navigate(['/charGen']);
        break;
      case 'init':
          this.router.navigate(['/charGen']);
          break;
      default:
        this.router.navigate(['/charGen']);
    }
  }
  deleteAttribute = (arg) =>{
    this.charDataSvc.deleteAttribute(this.modType, parseInt(arg, 10)).subscribe( val => {
      try{
        switch (this.modType){
          case 'skill':
            this.theSkills = this.theSkills.results.filter(li => li.id !== parseInt(arg, 10));
            this.charDataSvc.setAllSkills(this.theSkills);
            break;
          case 'stat':
            this.theStats = this.theStats.results.filter(li => li.id !== parseInt(arg, 10));
            this.charDataSvc.setStats(this.theStats);
            break;
          case 'save':
            this.theSaves = this.theSaves.results.filter(li => li.id !== parseInt(arg, 10));
            this.charDataSvc.setSaves(this.theSaves);
            break;
          case 'ac':
            this.theACs.results = this.theACs.results.filter(li => li.id !== parseInt(arg, 10));
            this.charDataSvc.setAllACs(this.theACs);
            break;
          case 'tohit':
            this.theToHits = this.theToHits.results.filter(li => li.id !== parseInt(arg, 10));
            this.charDataSvc.setAllToHits(this.theToHits);
            break;
          default:
            break;
        }
      } catch (err){
      } finally {
        if(this.modType === 'ac'){
          this.router.navigate(['/charGen']);
          return;
        }
        this.router.navigate(['/charGen/' + this.modType + 's']);
      }

    });
  }
  setInputName = (prefix: string, id: string) => {
    return prefix + id;
  }
  getTypeOfMod(){
    if (this.router.url.includes('stat')){
      return 'stat';
    } else if (this.router.url.includes('skill')){
      return 'skill';
    } else if (this.router.url.includes('feat')){
      return 'feat';
    } else if (this.router.url.includes('save')){
      return 'save';
    } else if (this.router.url.includes('ac')){
      return 'ac';
    } else if (this.router.url.includes('hp')){
      return 'hp';
    } else if (this.router.url.includes('init')){
      return 'init';
    } else if (this.router.url.includes('tohit')){
      return 'tohit';
    } else if (this.router.url.includes('xp')){
        return 'xp';
    }
  }
  getModName(obj){
    if (this.modType.toLowerCase() === 'save'){
      return Saves[parseInt(this.partID, 10)];
    } else if (this.modType.toLowerCase() === 'skill') {
      return obj.Skill.skillName;
    } else if (this.modType.toLowerCase() === 'stat'){
      return Stats[parseInt(this.partID, 10)];
    } else if (this.modType.toLowerCase() === 'ac'){
      return 'AC';
    } else if (this.modType.toLowerCase() === 'hp'){
      return 'HP';
    } else if (this.modType.toLowerCase() === 'init'){
        return 'Initiative';
    } else if (this.modType.toLowerCase() === 'xp'){
      return 'Experience Points';
    } else {
     return '';
    }
  }
  getBaseBinding(ranks, base){
    return ranks !== undefined ? ranks : base;
  }
}
