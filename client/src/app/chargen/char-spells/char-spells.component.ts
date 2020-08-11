import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { CharDataService } from '../../services/char-data.service';
import _ from 'lodash';


@Component({
  selector: 'app-char-spells',
  templateUrl: './char-spells.component.html',
  styleUrls: ['./char-spells.component.css']
})
export class CharSpellsComponent implements OnInit {
  allSpells = [
  ]
  levelBreakDown = [];
  spellName: string;
  spellLevel: number;
  filterText = '';
  showingForm = false;
  charID: number;

  constructor(private charDataSvc: CharDataService,
    private router: Router) { }

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
      let nameSorter = spell => spell.spellName.toLowerCase();
      this.allSpells = _.orderBy(this.allSpells, ['spellLevel', nameSorter], ['asc','asc']);
      console.log(this.allSpells)
      this.levelBreakDown = Array.from(Array(this.allSpells.slice(-1).pop().spellLevel), (_, i) => i + 1);
      this.spellLevel= null;
      this.spellName='';
      this.showingForm = false;
    })
  }

  editNote = (id: string) => {
    console.log(id,this.spellLevel, this.spellName)
    let chosenSpell = this.allSpells.find(s => s.id.toString() === id);
    this.router.navigate(['/charGen/spells/' + id], {state: {data: {spellLevel: chosenSpell.spellLevel, spellName: chosenSpell.spellName}}});

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
