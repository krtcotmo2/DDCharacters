import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { CharService } from '../../services/char.service';
import { CharDataService } from '../../services/char-data.service';
import {CharCardComponent} from "../char-card/char-card.component"

interface Character {
  results: {
    charID: number;
    charName: string;
    charHP: number;
    Race: {
      raceDesc: string;
    },
    User: {
      userName: string;
      userEmail: string;
    },
    CharLevels: {
      classLevel: number;
      CharClass: {
        className: string;
      }
    }[],
    Alignment:{
      alignID: number;
      alignName: string;
    }
  }[];
}


@Component({
  selector: 'app-load',
  templateUrl: './load.component.html',
  styleUrls: ['./load.component.css']
})
export class LoadComponent implements OnInit {
  characters = [];
  deadCharacters = [];
  charID: number;
  carChars2 = [
    {charName: 'Sybak theUsurper',
    charID: 5,
    owner: 'Kurt',
    isDead: false,
    hp: 38,
    ac: 21,
    race: 'Half-Elf',
    alignment: 'Neutral Good',
    class: ['Druid'],
    level: [4],
    image: 'sybak.png',
    },
    {charName: 'Chip',
    charID: 3,
    owner: 'Dean',
    isDead: true,
    hp: 35,
    ac: 20,
    race: 'Elf',
    alignment: 'Chaotic Good',
    class: ['Ranger', 'Rogue'],
    level: [4, 1],
    image: 'chip.png',
    },
    {charName: 'Sybak theUsurper',
    charID: 1,
    owner: 'Kurt',
    isDead: false,
    hp: 38,
    ac: 21,
    race: 'Half-Elf',
    alignment: 'Neutral Good',
    class: ['Druid'],
    level: [4],
    image: 'sybak.png',
    },
    {charName: 'Chip',
    charID: 45,
    owner: 'Dean',
    isDead: true,
    hp: 35,
    ac: 20,
    race: 'Elf',
    alignment: 'Chaotic Good',
    class: ['Ranger', 'Rogue'],
    level: [4, 1],
    image: 'chip.png',
    }
  ]
  constructor(private charSvc: CharService,
              private charDataSvc: CharDataService,
              private router: Router) { }

  ngOnInit(): void {
    this.charSvc.getChars().subscribe( results => {
      this.characters = results.results;
    });
  }
  displayChar = async (id: number, name: string) => {
    this.charDataSvc.reset();
    this.charDataSvc.loadCharBase(id.toString()).subscribe( async val => {
      this.charDataSvc.setCharBasics(val);
      this.charDataSvc.setCharID(id);
      this.charDataSvc.setCharName(name);
      this.router.navigate(['/charGen']);
    });

  }
  getClasses = (arr) => {
    const str = []
    for ( const c of arr){
      str.push(c.CharClass.className);
    }
    return str.join(', ');
  }

  getLevels = (arr: []) => {
    const str = []
    for ( const c of arr){
      str.push(c['classLevel']);
    }
    return str.join('/');
  }
}
