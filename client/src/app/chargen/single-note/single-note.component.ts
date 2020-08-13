import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { CharDataService } from '../../services/char-data.service';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import _ from 'lodash';

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
  noteID;

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

  editNote = (id:string) => {
    const oneNote = this.allNotes.find(a => a.id.toString() === id);
    this.router.navigate(['/charGen/notes/editNote/' + id], {state: {data: {type:'ind', theNote:oneNote.itemDetails}}});
  }

  drop(event: CdkDragDrop<string[]>) {
    const anArray = [event.previousIndex, event.currentIndex].sort();
    moveItemInArray(this.allNotes, event.previousIndex, event.currentIndex);
    this.allNotes.map( (c, i) => c.itemOrder = i + 1);
    const passVal = _.slice(this.allNotes, anArray[0],  anArray[1] + 1);
    this.charDataSvc.reorderNoteItems({ updates: passVal}).subscribe( (arg) => {
    })

  }
}
