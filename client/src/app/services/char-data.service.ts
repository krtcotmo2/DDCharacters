import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {pluck} from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CharSkillsComponent } from '../chargen/char-skills/char-skills.component';

interface CharBasics {
  charID: string;
  results: {
    charID: number;
    charName: string;
    charHP: number;
    Alignment: {
      alignID: number;
      alignName: string;
    },
    Race: {
      raceID: number;
      raceDesc: string;
    },
    CharLevels: {
      classLevel: number;
      CharClass: {
        className: string;
        classID: number;
      }
    }[]
  };
}

interface Stats {
  charID: string;
  results: {
    statID: number;
    score: number;
    isBase: boolean;
    isMod: boolean;
    modDesc: string;
  }[];
}

interface Saves {
  charID: string;
  results: {
    id: number;
    saveID: number;
    score: number;
    isBase: boolean;
    isMod: boolean;
    modDesc: string;
    Save: {
      saveDesc: string;
    }
  }[];
}

interface CharToHits {
  charID: string;
  results: {
      name: string,
    }[];
}

interface CharFeat {
  charID: string;
  results: {
      benefit: string;
      id: number,
      name: string,
      normal: string,
      prerequisites: string,
      prerequisitie_feats: string,
      shortdescription: string,
      special: string
    }[];
}

interface CharSkills {
  charID: string;
  results: {
    skillID: number;
    score: number;
    isRanks: boolean;
    isMod: boolean;
    isClassSkill: boolean;
    modDesc: string;
    Skill: {
      skillID: number;
      skillName: string;
      skillAttr: string;
      SkillDesc: string;
      untrained: boolean;
    }
  }[];
}

interface CharClasses {
  results: {
      name: string,
    }[];
}

interface Equipment {
  charID: number,
  results: {
      id: number,
      charID: number,
      weight: number,
      equip: string,
      location: string,
    }[];
}
interface AC {
  charID: number,
  results: {
      id: number,
      charID: number,
      score: number,
      modDesc: string,
      isBase: boolean,
      isMod: boolean,
    }[];
}

@Injectable({
  providedIn: 'root'
})
export class CharDataService {
  constructor(private http: HttpClient) { }

  // DECLARATIONS
  private isNew = new BehaviorSubject(true);
  private readOnly = new BehaviorSubject(true);
  private curCharID = new BehaviorSubject(0);
  private charID = new BehaviorSubject(0);
  private charBasics = new BehaviorSubject<CharBasics> ({results: {}} as CharBasics);
  private charName = new BehaviorSubject('');
  private allFeats = new BehaviorSubject<CharFeat>( {results: []} as CharFeat );
  private allStats = new BehaviorSubject<Stats>( {results: []} as Stats );
  private allSaves = new BehaviorSubject<Saves>( {results: []} as Saves );
  private allSkills = new BehaviorSubject<CharSkills>( {results: []} as CharSkills );
  private allToHits = new BehaviorSubject<CharToHits>( {results: []} as CharToHits );
  private allEquipment = new BehaviorSubject<Equipment>( {results: []} as Equipment );
  private allAC = new BehaviorSubject<AC>( {results: []} as AC );

  // GETTERS
  getIsNew = this.isNew.asObservable();
  getIsReadOnly = this.readOnly.asObservable();
  getCurCharID = this.curCharID.asObservable();
  getCharID = this.charID.asObservable();
  getCharBasics = this.charBasics.asObservable();
  getCharName = this.charName.asObservable();
  getAllFeats = this.allFeats.asObservable();
  getAllStats = this.allStats.asObservable();
  getAllSaves = this.allSaves.asObservable();
  getAllSkills = this.allSkills.asObservable();
  getAllToHits = this.allToHits.asObservable();
  getAllEquip = this.allEquipment.asObservable();
  getAllACs = this.allAC.asObservable();

  // SETTERS
  changeIsNew(arg: boolean) { this.isNew.next(arg); }
  changeReadOnly(arg: boolean) { this.readOnly.next(arg); }
  setCurCharID(arg: number) { this.curCharID.next(arg); }
  setCharID(arg: number) { this.charID.next(arg); }
  setCharBasics = (arg) => { this.charBasics.next(arg); };
  setCharName(arg: string) { this.charName.next(arg); }
  setAllFeats = (arg) => { this.allFeats.next(arg); };
  setStats = (arg) => { this.allStats.next(arg); };
  setSaves = (arg) => { this.allSaves.next(arg); };
  setAllSkills = (arg) => { this.allSkills.next(arg); };
  setAllToHits = (arg) => { this.allToHits.next(arg) };
  setAllEquipment = (arg) => { this.allEquipment.next(arg) };
  setAllACs = (arg) => { this.allAC.next(arg) };

  // global reset
    reset = () => {
      this.readOnly.next(true);
      this.isNew.next(true);
      this.charName.next('');
      this.charID.next(0);
      this.allFeats.next(null);
      this.allSkills.next(null);
      this.allStats.next(null);
      this.allSaves.next(null);
      this.allToHits.next(null);
    }

  // remote loaders
    // tslint:disable:max-line-length
    loadCharBase = (id: string) => {
      //const val = this.http.get<CharBasics>('https://cors-anywhere.herokuapp.com/https://pathfinder-krc.herokuapp.com/api/characters/' + id, {
      const val = this.http.get<CharBasics>('/api/characters/' + id, {
          headers: new HttpHeaders({
          'Access-Control-Allow-Origin': '*'
        }),
      });

      return val;
    }

    loadStats = (arg: number ) => {
      //const val = this.http.get<Stats>('https://cors-anywhere.herokuapp.com/https://pathfinder-krc.herokuapp.com/api/stats/ ' + arg, {
      const val = this.http.get<Stats>('/api/stats/ ' + arg, {
          headers: new HttpHeaders({
          'Access-Control-Allow-Origin': '*'
        }),
      });
      return val;
    }

    loadFeats = (id: string) => {
      //const val =  this.http.get<CharFeat>('https://cors-anywhere.herokuapp.com/https://pathfinder-krc.herokuapp.com/api/characters/feats/' + id, {
      const val =  this.http.get<CharFeat>('/api/characters/feats/' + id, {
          headers: new HttpHeaders({
          'Access-Control-Allow-Origin': '*'
        }),
      });
      return val;
    }

    loadOtherFeats = (arr) => {
      const body = {
        val: arr.join(",")
      };
      //const val =  this.http.post<CharSkills>('https://cors-anywhere.herokuapp.com/https://pathfinder-krc.herokuapp.com/api/feats/all', body, {
      const val =  this.http.post<CharSkills>('/api/feats/all', body, {
          headers: new HttpHeaders({
          'Access-Control-Allow-Origin': '*'
        }),
      });
      return val;
    }

    saveNewFeat = (charID, feat) => {
      const body = {
        charID,
        feat
      };
      //const val =  this.http.post<CharFeat>('https://cors-anywhere.herokuapp.com/https://pathfinder-krc.herokuapp.com/api/feats/addFeat', body, {
      const val =  this.http.post<CharFeat>('/api/feats/addFeat', body, {
          headers: new HttpHeaders({
          'Access-Control-Allow-Origin': '*'
        }),
      });
      return val;
    }

    deleteFeat = (id) => {
      //const val =  this.http.delete<CharFeat>('https://cors-anywhere.herokuapp.com/https://pathfinder-krc.herokuapp.com/api/feats/delete/' + id, {
      const val =  this.http.delete<CharFeat>('/api/feats/delete/' + id, {
          headers: new HttpHeaders({
          'Access-Control-Allow-Origin': '*'
        }),
      });
      return val;
    }

    loadSkills = (id: string) => {
      //const val =  this.http.get<CharSkills>('https://cors-anywhere.herokuapp.com/https://pathfinder-krc.herokuapp.com/api/characters/skills/' + id, {
      const val =  this.http.get<CharSkills>('/api/characters/skills/' + id, {
          headers: new HttpHeaders({
          'Access-Control-Allow-Origin': '*'
        }),
      });
      return val;
    }

    loadOtherSkills = (arr) => {
      const body = {
        val: arr.join(",")
      };
      //const val =  this.http.post<CharSkills>('https://cors-anywhere.herokuapp.com/https://pathfinder-krc.herokuapp.com/api/skills/all', body, {
      const val =  this.http.post<CharSkills>('/api/skills/all', body, {
          headers: new HttpHeaders({
          'Access-Control-Allow-Origin': '*'
        }),
      });
      return val;
    }

    saveNewSkill = (charID, skill) => {
      const body = {
        charID,
        skill
      };
      //const val =  this.http.post<CharSkills>('https://cors-anywhere.herokuapp.com/https://pathfinder-krc.herokuapp.com/api/skills/addSKill', body, {
      const val =  this.http.post<CharSkills>('/api/skills/addSKill', body, {
          headers: new HttpHeaders({
          'Access-Control-Allow-Origin': '*'
        }),
      });
      return val;
    }

    loadSaves = (id: string) => {
      //const val =  this.http.get<Saves>('https://cors-anywhere.herokuapp.com/https://pathfinder-krc.herokuapp.com/api/characters/saves/' + id, {
      const val =  this.http.get<Saves>('/api/characters/saves/' + id, {
          headers: new HttpHeaders({
          'Access-Control-Allow-Origin': '*'
        }),
      });
      return val;
    }

    loadToHits = (id: string) => {
      //const val =  this.http.get<CharToHits>('https://cors-anywhere.herokuapp.com/https://pathfinder-krc.herokuapp.com/api/characters/toHits/' + id, {
      const val =  this.http.get<CharToHits>('/api/characters/toHits/' + id, {
          headers: new HttpHeaders({
          'Access-Control-Allow-Origin': '*'
        }),
      });
      return val;
    }

    newToHit = (cID, obj) => {
      const body = {
        id: obj.toHitID,
        toHitDesc: obj.toHitDesc,
        damage: obj.damage,
        critRange: obj.critRange,
        critDamage: obj.critDamage,
        charID: cID,
      }
      //const val = this.http.post<any>('https://cors-anywhere.herokuapp.com/https://pathfinder-krc.herokuapp.com/api/newToHit/', body, {
      const val = this.http.post<any>('/api/newToHit/', body, {
          headers: new HttpHeaders({'Access-Control-Allow-Origin': '*'}),
      });
      return val;
    }

    updateAttribute = (attType, obj ) => {
      const body = {
        id: obj.id,
        modDesc: obj.modDesc,
        score: obj.score,
        charID: obj.charID,
        saveID: attType === 'save' ? obj.statID : null,
        skillID: attType === 'skill' ? obj.statID : null,
        statID: attType === 'stat' ? obj.statID : null,
        toHitID: attType === 'tohit' ? obj.statID : null,
        isBase: obj.isBase,
        isMod: obj.isMod,
        isClassSkill: obj.isClassSkill
      };
      let val;
      switch(attType){
        case 'skill':
          //val =  this.http.post<any>('https://cors-anywhere.herokuapp.com/https://pathfinder-krc.herokuapp.com/api/characters/updateSkill/', body, {
          val =  this.http.post<any>('/api/characters/updateSkill/', body, {
              headers: new HttpHeaders({'Access-Control-Allow-Origin': '*'}),
          });
          break;
        case 'stat':
          //val =  this.http.post<any>('https://cors-anywhere.herokuapp.com/https://pathfinder-krc.herokuapp.com/api/characters/updateStat/', body, {
          val =  this.http.post<any>('/api/characters/updateStat/', body, {
              headers: new HttpHeaders({'Access-Control-Allow-Origin': '*'}),
          });
          break;
        case 'save':
          //val =  this.http.post<any>('https://cors-anywhere.herokuapp.com/https://pathfinder-krc.herokuapp.com/api/characters/updateSave/', body, {
          val =  this.http.post<any>('/api/characters/updateSave/', body, {
              headers: new HttpHeaders({'Access-Control-Allow-Origin': '*'}),
          });
          break;
        case 'ac':
          //val =  this.http.post<any>('https://cors-anywhere.herokuapp.com/https://pathfinder-krc.herokuapp.com/api/characters/ac/', body, {
          val =  this.http.post<any>('/api/characters/ac/', body, {
              headers: new HttpHeaders({'Access-Control-Allow-Origin': '*'}),
          });
            break;
        case 'tohit':
          //val =  this.http.post<any>('https://cors-anywhere.herokuapp.com/https://pathfinder-krc.herokuapp.com/api/characters/updateToHit/', body, {
          val =  this.http.post<any>('/api/characters/updateToHit/', body, {
              headers: new HttpHeaders({'Access-Control-Allow-Origin': '*'}),
          });
          break;
        default:
          break;
      }

      return val;
    }

    deleteAttribute = (attType, attId) => {
      const body = {
        id: attId,
      };
      console.log(body)
      let val;
      switch(attType){
        case 'skill':
          //val =  this.http.delete<any>('https://cors-anywhere.herokuapp.com/https://pathfinder-krc.herokuapp.com/api/characters/deleteSkill/'+attId);
          val =  this.http.delete<any>('/api/characters/deleteSkill/'+attId);
          break;
        case 'stat':
          //val =  this.http.delete<any>('https://cors-anywhere.herokuapp.com/https://pathfinder-krc.herokuapp.com/api/characters/deleteStat/'+attId);
          val =  this.http.delete<any>('/api/characters/deleteStat/'+attId);
          break;
          break;
        case 'save':
          //val =  this.http.delete<any>('https://cors-anywhere.herokuapp.com/https://pathfinder-krc.herokuapp.com/api/characters/deleteSave/'+attId);
          val =  this.http.delete<any>('/api/characters/deleteSave/'+attId);
          break;
        case 'ac':
          //val =  this.http.delete<any>('https://cors-anywhere.herokuapp.com/https://pathfinder-krc.herokuapp.com/api/characters/deleteAC/'+attId);
          val =  this.http.delete<any>('/api/characters/deleteAC/'+attId);
          break;
        case 'tohit':
          //val =  this.http.delete<any>('https://cors-anywhere.herokuapp.com/https://pathfinder-krc.herokuapp.com/api/characters/deleteToHit/'+attId);
          val =  this.http.delete<any>('/api/characters/deleteToHit/'+attId);
          break;
        default:
          break;
      }
      return val;
    }

    loadEquipment = (id: number) => {
      //const val =  this.http.get<Equipment>('https://cors-anywhere.herokuapp.com/https://pathfinder-krc.herokuapp.com/api/characters/equip/' + id, {
      const val =  this.http.get<Equipment>('/api/characters/equip/' + id, {
          headers: new HttpHeaders({
          'Access-Control-Allow-Origin': '*'
        }),
      });
      return val;
    }

    addEquipment = (body: {}) => {
      //const val =  this.http.post<any>('https://cors-anywhere.herokuapp.com/https://pathfinder-krc.herokuapp.com/api/characters/equip/add', body, {
      const val =  this.http.post<any>('/api/characters/equip/add', body, {
          headers: new HttpHeaders({
          'Access-Control-Allow-Origin': '*'
        }),
      });
      return val;
    }

    deleteEquipment = (id: number) => {
      //const val =  this.http.delete<Equipment>('https://cors-anywhere.herokuapp.com/https://pathfinder-krc.herokuapp.com/api/characters/deleteequip/' + id, {
      const val =  this.http.delete<Equipment>('/api/characters/deleteequip/' + id, {
          headers: new HttpHeaders({
          'Access-Control-Allow-Origin': '*'
        }),
      });
      return val;
    }

    loadAC = (id: number) => {
      console.log("id", id)
      //const val =  this.http.get<Equipment>('https://cors-anywhere.herokuapp.com/https://pathfinder-krc.herokuapp.com/api/characters/ac/' + id, {
      const val =  this.http.get<Equipment>('/api/characters/ac/' + id, {
          headers: new HttpHeaders({
          'Access-Control-Allow-Origin': '*'
        }),
      });
      return val;
    }

    updateHP = (charID: number, charHP: number) => {
      const body = {
        charID: charID,
        charHP: charHP
      }
     //const val =  this.http.get<Equipment>('https://cors-anywhere.herokuapp.com/https://pathfinder-krc.herokuapp.com/api/characters/ac/' + id, {
      const val =  this.http.post<any>('/api/updateHP/', body, {
          headers: new HttpHeaders({
          'Access-Control-Allow-Origin': '*'
        }),
      });
      return val;
    }

    loadClasses = (id: string) => {
    }

}
