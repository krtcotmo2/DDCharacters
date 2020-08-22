import { Injectable, ɵɵresolveBody } from '@angular/core';
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
    init:number,
    userID:number,
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

interface Spells {
  charID: string;
  results: {
    id: number,
    spellID: number,
    charID: number,
    spellLevel: number,
    spellName: string,
    isCast: boolean
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
      equipOrder: number
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

interface Notes {
  charID: string,
  results: {
    noteID: number;
    noteOrder: number;
    noteTitle: string;
  }[];
}

@Injectable({
  providedIn: 'root'
})
export class CharDataService {
  constructor(private http: HttpClient) { }

  // DECLARATIONS
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
  private allNotes = new BehaviorSubject<Notes>( {results: []} as Notes);
  private allSpells = new BehaviorSubject<Spells>( {results: []} as Spells);

  // GETTERS
  getCurCharID = this.curCharID.asObservable();
  getCharID = this.charID.asObservable();
  getCharBasics = this.charBasics.asObservable();
  getCharName = this.charName.asObservable();
  getAllFeats = this.allFeats.asObservable();
  getAllStats = this.allStats.asObservable();
  getAllSaves = this.allSaves.asObservable();
  getAllSkills = this.allSkills.asObservable();
  getAllNotes = this.allNotes.asObservable();
  getAllToHits = this.allToHits.asObservable();
  getAllEquip = this.allEquipment.asObservable();
  getAllACs = this.allAC.asObservable();
  getAllSpells = this.allSpells.asObservable();

  // SETTERS
  setCurCharID(arg: number) { this.curCharID.next(arg); }
  setCharID(arg: number) { this.charID.next(arg); }
  setCharBasics = (arg) => { this.charBasics.next(arg); };
  setCharName(arg: string) { this.charName.next(arg); }
  setAllFeats = (arg) => { this.allFeats.next(arg); };
  setStats = (arg) => { this.allStats.next(arg); };
  setSaves = (arg) => { this.allSaves.next(arg); };
  setAllSkills = (arg) => { this.allSkills.next(arg); };
  setAllNotes = (arg) => { this.allNotes.next(arg); };
  setAllToHits = (arg) => { this.allToHits.next(arg) };
  setAllEquipment = (arg) => { this.allEquipment.next(arg) };
  setAllACs = (arg) => { this.allAC.next(arg) };
  setAllSpells = (arg) => { this.allSpells.next(arg) };

  // global reset
    reset = () => {
      this.charBasics.next(null);
      this.charName.next('');
      this.charID.next(0);
      this.allFeats.next(null);
      this.allSkills.next(null);
      this.allStats.next(null);
      this.allSaves.next(null);
      this.allToHits.next(null);
      this.allNotes.next(null);
      this.allSpells.next(null);
    }

  // remote loaders
    // tslint:disable:max-line-length

    // CHARACTER
      loadCharBase = (id: string) => {
        //const val = this.http.get<CharBasics>('https://cors-anywhere.herokuapp.com/https://pathfinder-krc.herokuapp.com/api/characters/' + id, {
        const val = this.http.get<CharBasics>('/api/characters/' + id, {
            headers: new HttpHeaders({
            'Access-Control-Allow-Origin': '*'
          }),
        });

        return val;
      }

    // STATS
      loadStats = (arg: number ) => {
        //const val = this.http.get<Stats>('https://cors-anywhere.herokuapp.com/https://pathfinder-krc.herokuapp.com/api/stats/ ' + arg, {
        const val = this.http.get<Stats>('/api/stats/ ' + arg, {
            headers: new HttpHeaders({
            'Access-Control-Allow-Origin': '*'
          }),
        });
        return val;
      }

    // FEATS
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

    // SKILLS
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

    // SAVES
      loadSaves = (id: string) => {
        //const val =  this.http.get<Saves>('https://cors-anywhere.herokuapp.com/https://pathfinder-krc.herokuapp.com/api/characters/saves/' + id, {
        const val =  this.http.get<Saves>('/api/characters/saves/' + id, {
            headers: new HttpHeaders({
            'Access-Control-Allow-Origin': '*'
          }),
        });
        return val;
      }

    // TO HITS
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

      reorderToHits = (body: {}) => {
        const val =  this.http.put<any>('/api/newToHit/reorderToHits', body, {
          headers: new HttpHeaders({
            'Access-Control-Allow-Origin': '*'
          }),
        });
        return val;
      }
    // EQUIPMENT
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

      reorderEqiup = (body: {}) => {
        const val =  this.http.put<any>('/api/characters/equip/reorderEquip', body, {
          headers: new HttpHeaders({
            'Access-Control-Allow-Origin': '*'
          }),
        });
        return val;
      }
    // AC
      loadAC = (id: number) => {
        //const val =  this.http.get<Equipment>('https://cors-anywhere.herokuapp.com/https://pathfinder-krc.herokuapp.com/api/characters/ac/' + id, {
        const val =  this.http.get<Equipment>('/api/characters/ac/' + id, {
            headers: new HttpHeaders({
            'Access-Control-Allow-Origin': '*'
          }),
        });
        return val;
      }

    // HP
      updateHP = (charID: number, charHP: number) => {
        const body = {
          charID: charID,
          charHP: charHP
        }
      //const val =  this.http.get<Equipment>('https://cors-anywhere.herokuapp.com/https://pathfinder-krc.herokuapp.com/api/characters/ac/' + id, {
        const val =  this.http.post<any>('/api/characters/updateHP/', body, {
            headers: new HttpHeaders({
            'Access-Control-Allow-Origin': '*'
          }),
        });
        return val;
      }

    // INITIATIVE
      updateInit = (charID: number, init: number) => {
        const body = {
          charID: charID,
          init: init
        }
        const val =  this.http.post<any>('/api/characters/updateInit/', body, {
              headers: new HttpHeaders({
              'Access-Control-Allow-Origin': '*'
            }),
          });
          return val;
      }

    // NOTES
      loadNotes = (charID: number) =>{
        const val =  this.http.get<any>('/api/notes/getCharNotes/' + charID.toString(), {
            headers: new HttpHeaders({
            'Access-Control-Allow-Origin': '*'
          }),
        });
        return val;
      }

      loadNotesItems = (noteID: string) => {
        const val =  this.http.get<any>('/api/notes/getNoteItems/' + noteID, {
          headers: new HttpHeaders({
            'Access-Control-Allow-Origin': '*'
          }),
        });
        return val;
      }

      addNoteHeader = (body: {}) => {
        //const val =  this.http.post<any>('https://cors-anywhere.herokuapp.com/https://pathfinder-krc.herokuapp.com/api/characters/equip/add', body, {
        const val =  this.http.post<any>('/api/notes/insertNoteHeader', body, {
            headers: new HttpHeaders({
            'Access-Control-Allow-Origin': '*'
          }),
        });
        return val;
      }

      addNoteItem = (body: {}) => {
        //const val =  this.http.post<any>('https://cors-anywhere.herokuapp.com/https://pathfinder-krc.herokuapp.com/api/characters/equip/add', body, {
        const val =  this.http.post<any>('/api/notes/insertNoteItem', body, {
            headers: new HttpHeaders({
            'Access-Control-Allow-Origin': '*'
          }),
        });
        return val;
      }

      updateNoteHeader = (body: {}) => {
        const val =  this.http.post<any>('/api/notes/updateNote', body, {
          headers: new HttpHeaders({
            'Access-Control-Allow-Origin': '*'
          }),
        });
        return val;
      }

      updateNoteItem = (body: {}) => {
        const val =  this.http.post<any>('/api/notes/updateNoteItem', body, {
          headers: new HttpHeaders({
            'Access-Control-Allow-Origin': '*'
          }),
        });
        return val;
      }

      deleteNoteHeader = (noteID: string) => {
        const val =  this.http.post<any>('/api/notes/deleteNote/' + noteID, {
          headers: new HttpHeaders({
            'Access-Control-Allow-Origin': '*'
          }),
        });
        return val;
      }

      deleteNoteItem = (id: string) => {
        const val =  this.http.post<any>('/api/notes/deleteNoteItem/' + id, {
          headers: new HttpHeaders({
            'Access-Control-Allow-Origin': '*'
          }),
        });
        return val;
      }

      reorderNoteItems = (body: {}) => {
        const val =  this.http.put<any>('/api/notes/reorderNoteItem', body, {
          headers: new HttpHeaders({
            'Access-Control-Allow-Origin': '*'
          }),
        });
        return val;
      }

      reorderNoteHeader = (body: {}) => {
        const val =  this.http.put<any>('/api/notes/reorderNoteHeader', body, {
          headers: new HttpHeaders({
            'Access-Control-Allow-Origin': '*'
          }),
        });
        return val;
      }
    // CLASSES
      loadClasses = (id: string) => {
      }
    //SPELLS
      loadSpells = (charID: number) =>{
        const val =  this.http.get<any>('/api/spells/getAllSpells/' + charID.toString(), {
            headers: new HttpHeaders({
            'Access-Control-Allow-Origin': '*'
          }),
        });
        return val;
      }

      insertSpell = (body: {}) => {
        const val =  this.http.post<any>('/api/spells/addASpell', body, {
          headers: new HttpHeaders({
            'Access-Control-Allow-Origin': '*'
          }),
        });
        return val;
      }

      toggleSpell = (body: {}) => {
        const val =  this.http.post<any>('/api/spells/toggleSpell', body, {
          headers: new HttpHeaders({
            'Access-Control-Allow-Origin': '*'
          }),
        });
        return val;
      }

      updateSpell = (body: {}) => {
        const val =  this.http.post<any>('/api/spells/updateASpell', body, {
          headers: new HttpHeaders({
            'Access-Control-Allow-Origin': '*'
          }),
        });
        return val;
      }

      deleteSpell = (id: string) => {
        const val =  this.http.delete<any>('/api/spells/deleteASpell/' + id, {
          headers: new HttpHeaders({
            'Access-Control-Allow-Origin': '*'
          }),
        });
        return val;
      }

    }
