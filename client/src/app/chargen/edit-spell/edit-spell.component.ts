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
  charID: number;

  constructor(
    private charDataSvc: CharDataService,
    private router: Router) { }

  ngOnInit(): void {

    this.charDataSvc.getCharID.subscribe((val) => this.charID = val === null ? 0 : val);
    this.spellLevel = history.state.data.spellLevel;
    this.theSpell = history.state.data.spellName;

  }

  deleteNote = (id:string) => {
    this.charDataSvc.deleteSpell(id).subscribe( (val) => {
      this.charDataSvc.broadcastMessage('DELETESPELL', {charID: this.charID, id});
      this.router.navigate(['/charGen/spells']);
    })

  }

  onSubmit = (evt:Event) => {
    let body = {
      id: this.theID,
      spellLevel: this.spellLevel,
      spellName: this.theSpell,
      charID: this.charID
    }
    this.charDataSvc.updateSpell(body).subscribe(val => {
      this.charDataSvc.broadcastMessage('CHANGESPELL', body);
      this.router.navigate(['/charGen/spells']);
    })
  }

  onCancel = () => {
    this.router.navigate(['/charGen/spells']);
  }
}
