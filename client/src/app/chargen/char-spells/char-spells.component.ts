import { Component, OnInit } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-char-spells',
  templateUrl: './char-spells.component.html',
  styleUrls: ['./char-spells.component.css']
})
export class CharSpellsComponent implements OnInit {
  allSpells = [
    {
      id: 6,
      spellID: null,
      charID: 5,
      spellLevel: 1,
      spellName: "Cure Light Wounds",
      isCast: false,
    },
    {
      id: 2,
      spellID: null,
      charID: 5,
      spellLevel: 1,
      spellName: "FaireFire",
      isCast: false,
    },
    {
      id: 1,
      spellID: null,
      charID: 5,
      spellLevel: 1,
      spellName: "Thunderstomp",
      isCast: false,
    },
    {
      id: 4,
      spellID: null,
      charID: 5,
      spellLevel: 2,
      spellName: "Hold Person",
      isCast: false,
    },
    {
      id: 3,
      spellID: null,
      charID: 5,
      spellLevel: 2,
      spellName: "Silence",
      isCast: false,
    },
    {
      id: 5,
      spellID: null,
      charID: 5,
      spellLevel: 3,
      spellName: "Dispell Magic",
      isCast: false,
    },
    {
      id: 5,
      spellID: null,
      charID: 5,
      spellLevel: 4,
      spellName: "Dispell Magic",
      isCast: false,
    },
    {
      id: 5,
      spellID: null,
      charID: 5,
      spellLevel: 5,
      spellName: "Dispell Magic",
      isCast: false,
    },
    {
      id: 5,
      spellID: null,
      charID: 5,
      spellLevel: 4,
      spellName: "Dispell Magic",
      isCast: false,
    },
    {
      id: 5,
      spellID: null,
      charID: 5,
      spellLevel: 5,
      spellName: "Dispell Magic",
      isCast: false,
    },
    {
      id: 5,
      spellID: null,
      charID: 5,
      spellLevel: 4,
      spellName: "Dispell Magic",
      isCast: false,
    },
    {
      id: 5,
      spellID: null,
      charID: 5,
      spellLevel: 5,
      spellName: "Dispell Magic",
      isCast: false,
    }
  ]
  levelBreakDown = [];
  spellName: string;
  spellLevel: number;
  filterText = '';

  constructor() { }

  ngOnInit(): void {
    this.levelBreakDown = Array.from(Array(this.allSpells.slice(-1).pop().spellLevel), (_, i) => i + 1);
    console.log(this.levelBreakDown)
  }

  filterList = (evt: Event) => {

  }

  addNewSpell = (evt: Event) => {

  }

  onSubmit = (evt: Event) => {

  }

  editNote = (id: string) => {

  }

  filteredSpells = (l: number) => {
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
}
