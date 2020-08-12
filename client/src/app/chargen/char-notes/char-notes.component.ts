import { Component, OnInit, Input } from '@angular/core';
import {Router} from '@angular/router';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { CharDataService } from '../../services/char-data.service';
import _ from 'lodash';

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

  editNote = (id:string) => {
    const oneNote = this.notesSet['results'].find(a => a.noteID.toString() === id);
    this.router.navigate(['/charGen/notes/editNote/' + id], {state: {data: {type:'header', theNote:oneNote.noteTitle} }});
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

  drop(event: CdkDragDrop<string[]>) {
    const anArray = [event.previousIndex, event.currentIndex].sort();
    console.log(anArray);
    moveItemInArray(this.allNotes, event.previousIndex, event.currentIndex);
    this.allNotes.map( (c, i) => c.noteOrder = i + 1);
    const passVal = _.slice(this.allNotes, anArray[0],  anArray[1] + 1);
    console.log(this.allNotes, passVal);
    this.charDataSvc.reorderNoteHeader({ updates: passVal}).subscribe( (arg) => {
      console.log(arg)
    })

  }
}
