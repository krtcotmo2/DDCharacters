import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Party, PartyService } from 'src/app/services/party.service';
import _ from 'lodash';
import { CharBasics, CharDataService } from 'src/app/services/char-data.service';
import { CharService } from 'src/app/services/char.service';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-spell-list',
  templateUrl: './spell-list.component.html',
  styleUrls: ['./spell-list.component.css']
})
export class SpellListComponent implements OnInit {
  @Input() spellList = []
  @Input() charID: number;
  levelBreakDown = [];
  filterText = '';

  constructor() { }

  ngOnInit(): void {
    this.levelBreakDown =  _.uniqBy(this.spellList, 'spellLevel');
  }

  toggelDisplay = (evt: Event, lvl: any) => {
    const el: HTMLDivElement = document.getElementById('lvl' + lvl.spellLevel + "-" + this.charID) as HTMLDivElement;
    el.classList.toggle('collapsed');
    const ico: HTMLElement = evt.target as HTMLElement;
    ico.classList.toggle('down');
    ico.classList.toggle('right');
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

  setIDName = (lvl) => {
    return "lvl" + lvl.spellLevel + "-" + this.charID;
  }

  filteredSpells = (l: number) => {
    return this.spellList.filter( a => a.spellLevel === l);
  }

  getRemaining(arg): string {
    const count = this.spellList.filter(spell => spell.spellLevel === arg.spellLevel).length;
    const unused = this.spellList.filter(spell => spell.spellLevel === arg.spellLevel &&
      !spell.isCast).length;
    return `${unused} of ${count}`;
  }
}
