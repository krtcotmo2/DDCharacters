import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { CharDataService } from '../../services/char-data.service';
import _ from 'lodash';

@Component({
  selector: 'app-edit-notes',
  templateUrl: './edit-notes.component.html',
  styleUrls: ['./edit-notes.component.css']
})
export class EditNotesComponent implements OnInit {
  modForm;
  theType: string;
  theNote: string;
  notesSet;
  indNotes;
  theID = _.last(this.router.url.split('/'));;

  constructor(private charDataSvc: CharDataService,
    private router: Router) { }

  ngOnInit(): void {
    this.theType = history.state.data.type;
    console.log(history.state.data)
    this.theNote = history.state.data.theNote;
  }

  deleteNote = (id:string) => {
    if(this.theType === 'ind') {
      this.charDataSvc.deleteNoteItem(this.theID).subscribe( retVal => {})
    }else{
      this.charDataSvc.deleteNoteHeader(this.theID).subscribe( retItem => {
        this.charDataSvc.getAllNotes.subscribe((val) => this.notesSet = val === null ? {} : val);
        let filteredArr = this.notesSet['results'].filter(a => a.noteID.toString() !== this.theID );
        this.notesSet['results'] = filteredArr
        console.log(this.notesSet)
        this.charDataSvc.setAllNotes(this.notesSet);
      });
    }
    this.router.navigate(['/charGen/notes']);
  }

  onSubmit = (evt:Event) => {
    evt.preventDefault();
    let body = {
      id:'',
      noteID:this.theID,
      note: this.theNote
    }
    if(this.theType === 'ind') {
      body = {
        id: this.theID,
        noteID: '',
        note : this.theNote
      }
      this.charDataSvc.updateNoteItem(body).subscribe( retItem => {});
    }else{
      this.charDataSvc.updateNoteHeader(body).subscribe( retItem => {
        this.charDataSvc.getAllNotes.subscribe((val) => this.notesSet = val === null ? {} : val);
        let filteredArr = this.notesSet['results'].filter(a => a.noteID !== retItem.noteID )
        console.log(filteredArr, retItem)
        this.notesSet['results'] = _.orderBy([...filteredArr, retItem], ['noteOrder']);
        this.charDataSvc.setAllNotes(this.notesSet);
      });
    }
    this.router.navigate(['/charGen/notes']);
  }

  onCancel = () => {
    this.router.navigate(['/charGen/notes']);
  }

}
