import { Component, OnInit, Input } from '@angular/core';
import {Router} from '@angular/router';
import { CharDataService } from '../../services/char-data.service';

@Component({
  selector: 'app-char-notes',
  templateUrl: './char-notes.component.html',
  styleUrls: ['./char-notes.component.css']
})
export class CharNotesComponent implements OnInit {
  charID: number;
  curChar: string;
  note: string;
  allNotes =  [];
  filterText = '';
  notesSet = {};
  notesForm;
  newNote;

  constructor(
    private charDataSvc: CharDataService,
    private router: Router) { }

  ngOnInit(): void {
    this.charDataSvc.getCharID.subscribe( (val) => this.charID = val);
    this.charDataSvc.getAllNotes.subscribe( (val) => this.notesSet = val === null ? {} : val);
    this.charDataSvc.getAllNotes.subscribe( (val) => this.allNotes = val === null ? [] : val.results);
    this.charDataSvc.getAllNotes.subscribe( (val) => this.curChar = val === null ? '0' : val.charID);
    if (this.charID && this.charID.toString() !== this.curChar) {
      this.charDataSvc.loadNotes(this.charID).subscribe( val => {
        this.allNotes = val.results;
        this.charDataSvc.setAllNotes(val);
        console.log(this.charID, this.curChar , this.allNotes)
      });
    }
  }

  addNewNote = (evt:Event) => {
    this.newNote = true;
  }

  onSubmit = (evt) => {
    evt.preventDefault();
    const body ={
      charID: this.charID,
      note: this.note
    }

    this.charDataSvc.addNoteHeader(body).subscribe(vals => {
      this.notesSet['results'] = [...this.notesSet['results'], vals];
      this.charDataSvc.setAllNotes(this.notesSet);
      this.note ='';
      this.newNote = false;
    });
  }

  editNote = (evt:Event, id:string) => {
    console.log(evt)
  }
  deleteNote = (evt:Event, id:string) => {
    console.log(evt)
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
}