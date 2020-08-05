import { Component, OnInit } from '@angular/core';
import { CharDataService } from '../../services/char-data.service';

@Component({
  selector: 'app-char-spells',
  templateUrl: './char-spells.component.html',
  styleUrls: ['./char-spells.component.css']
})
export class CharSpellsComponent implements OnInit {
  allSpells = [
    // {
    //   id: 6,
    //   spellID: null,
    //   charID: 5,
    //   spellLevel: 1,
    //   spellName: "Cure Light Wounds",
    //   isCast: false,
    // },
    // {
    //   id: 2,
    //   spellID: null,
    //   charID: 5,
    //   spellLevel: 1,
    //   spellName: "FaireFire",
    //   isCast: false,
    // },
    // {
    //   id: 1,
    //   spellID: null,
    //   charID: 5,
    //   spellLevel: 1,
    //   spellName: "Thunderstomp",
    //   isCast: true,
    // },
    // {
    //   id: 4,
    //   spellID: null,
    //   charID: 5,
    //   spellLevel: 2,
    //   spellName: "Hold Person",
    //   isCast: false,
    // },
    // {
    //   id: 3,
    //   spellID: null,
    //   charID: 5,
    //   spellLevel: 2,
    //   spellName: "Silence",
    //   isCast: false,
    // },
    // {
    //   id: 5,
    //   spellID: null,
    //   charID: 5,
    //   spellLevel: 3,
    //   spellName: "Dispell Magic",
    //   isCast: false,
    // },
    // {
    //   id: 5,
    //   spellID: null,
    //   charID: 5,
    //   spellLevel: 4,
    //   spellName: "Dispell Magic",
    //   isCast: false,
    // },
    // {
    //   id: 5,
    //   spellID: null,
    //   charID: 5,
    //   spellLevel: 5,
    //   spellName: "Dispell Magic",
    //   isCast: false,
    // },
    // {
    //   id: 5,
    //   spellID: null,
    //   charID: 5,
    //   spellLevel: 4,
    //   spellName: "Dispell Magic",
    //   isCast: false,
    // },
    // {
    //   id: 5,
    //   spellID: null,
    //   charID: 5,
    //   spellLevel: 5,
    //   spellName: "Dispell Magic",
    //   isCast: false,
    // },
    // {
    //   id: 5,
    //   spellID: null,
    //   charID: 5,
    //   spellLevel: 4,
    //   spellName: "Dispell Magic",
    //   isCast: false,
    // },
    // {
    //   id: 5,
    //   spellID: null,
    //   charID: 5,
    //   spellLevel: 5,
    //   spellName: "Dispell Magic",
    //   isCast: false,
    // }
  ]
  levelBreakDown = [];
  spellName: string;
  spellLevel: number;
  filterText = '';
  showingForm = false;
  charID: number;

  constructor(private charDataSvc: CharDataService,) { }

  ngOnInit(): void {
    this.charDataSvc.getCharID.subscribe( (val) => this.charID = val === null ? 0 : val);
    this.charDataSvc.loadSpells(this.charID).subscribe( val => {
      this.allSpells = val.results;
      this.charDataSvc.setAllSpells(val);
      this.levelBreakDown = Array.from(Array(this.allSpells.slice(-1).pop().spellLevel), (_, i) => i + 1);
    });
  }

  filterList = (evt: Event) => {

  }

  addNewSpell = (evt: Event) => {
    this.showingForm = true;
  }

  cancelAdd = (event:Event) => {
    event.preventDefault();
    this.showingForm = false;
  }
  onSubmit = (evt: Event) => {
    evt.preventDefault();
    const body = {
      charID: this.charID,
      name:  this.spellName,
      level: this.spellLevel
    }
    this.charDataSvc.insertSpell(body).subscribe(val => {
      console.log(val)
      this.allSpells = [...this.allSpells, val];
      this.levelBreakDown = Array.from(Array(this.allSpells.slice(-1).pop().spellLevel), (_, i) => i + 1);
      this.spellLevel= null;
      this.spellName='';
      this.showingForm = false;
    })
  }

  editNote = (id: string) => {

  }

  filteredSpells = (l: number) => {
    console.log("l",l)
    return this.allSpells.filter( a => a.spellLevel === l);
  }
  toggelDisplay = (evt:Event, arg:number) => {
    const el: HTMLDivElement = <HTMLDivElement>document.getElementById('lvl'+arg.toString());
    el.classList.toggle('collapsed');
    const ico: HTMLElement = <HTMLElement>evt.target;
    ico.classList.toggle('down')
    ico.classList.toggle('right')
  }
  setIDName = (lvl) => {
    return "lvl"+lvl.toString();
  }

  reportCheck = (evt:Event, id:string) => {
    let aSpell = this.allSpells.find(x => x.id === parseInt(id));
    const chk = <HTMLInputElement>evt.target;
    aSpell.isCast = chk.checked;
    const body = {
      id: id,
      currentStatus: chk.checked
    }
    this.charDataSvc.toggleSpell(body).subscribe( retVal => {
      if(retVal === true){
        console.log('saved');
      }else{
        console.log('save error')
      }
    })
  }
}
