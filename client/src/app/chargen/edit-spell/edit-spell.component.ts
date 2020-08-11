import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { CharDataService } from '../../services/char-data.service';
import _ from 'lodash';

@Component({
  selector: 'app-edit-spell',
  templateUrl: './edit-spell.component.html',
  styleUrls: ['./edit-spell.component.css']
})
export class EditSpellComponent implements OnInit {
  modForm;
  theType: string;
  theSpell: string;
  spellLevel: number;
  notesSet;
  indNotes;
  theID = _.last(this.router.url.split('/'));

  constructor(private charDataSvc: CharDataService,
    private router: Router) { }

  ngOnInit(): void {
    this.spellLevel = history.state.data.spellLevel;
    this.theSpell = history.state.data.spellName;

  }

  deleteNote = (id:string) => {
    this.charDataSvc.deleteSpell(id).subscribe( (val) => {
      let a = val;
      this.router.navigate(['/charGen/spells']);
    })

  }

  onSubmit = (evt:Event) => {
    let body = {
      id: this.theID,
      spellLevel: this.spellLevel,
      spellName: this.theSpell
    }
    this.charDataSvc.updateSpell(body).subscribe(val => {
      this.router.navigate(['/charGen/spells']);
    })
  }

  onCancel = () => {
    this.router.navigate(['/charGen/spells']);
  }
}
