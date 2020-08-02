import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { CharDataService } from '../../services/char-data.service';

@Component({
  selector: 'app-single-note',
  templateUrl: './single-note.component.html',
  styleUrls: ['./single-note.component.css']
})
export class SingleNoteComponent implements OnInit {
  charID: number;
  curChar: string;
  note: string;
  allNotes =  [];
  filterText = '';
  noteTitle = '';
  notesForm;
  newNote;
  noteID
  constructor( private charDataSvc: CharDataService,
    private router: Router) { }

  ngOnInit(): void {
    this.charDataSvc.getCharID.subscribe( (val) => this.charID = val);
    this.noteID = this.router.url.split("/").pop();
    this.charDataSvc.loadNotesItems(this.noteID).subscribe( val => {
        this.allNotes = val.results;
        this.noteTitle = val.title;
    });

  }

  addNewNote = (evt:Event) => {
    this.newNote = true;
  }

  onSubmit = (evt) => {
    evt.preventDefault();
    const body = {
      noteID: this.noteID,
      itemDetails: this.note
    };
    this.charDataSvc.addNoteItem(body).subscribe(vals => {
      this.allNotes = [...this.allNotes, vals];
      this.note ='';
      this.newNote = false;
    });
  }

  filterList = (evt) => {
    this.filterText = evt.target.value;
    const allRows: any = document.getElementsByClassName('ui grid gridRow');
    for( let r of allRows){
      const aTag: any = r.getElementsByTagName('span')[0].innerText;
      if (aTag.toLowerCase().includes(this.filterText.toLowerCase())) {
        r.classList.remove('hidden');
      } else {
        r.classList.add('hidden');
      }
    }
  }

  editNote = (evt:Event, id:string) => {
    console.log(evt)
  }
  deleteNote = (evt:Event, id:string) => {
    console.log(evt)
  }

}
