import { Component, OnInit } from '@angular/core';
import { CharDataService } from '../../services/char-data.service';

@Component({
  selector: 'app-chargen-home',
  templateUrl: './chargen-home.component.html',
  styleUrls: ['./chargen-home.component.css']
})
export class ChargenHomeComponent implements OnInit {
  isReadOnly: boolean;
  isNew: boolean;
  charID: number;
  charName: string;

  constructor(private charDataSvc: CharDataService) { }

  ngOnInit(): void {
    this.charDataSvc.getIsNew.subscribe( (val) => this.isNew = val);
    this.charDataSvc.getIsReadOnly.subscribe( (val) => this.isReadOnly = val);
    this.charDataSvc.getCharID.subscribe( (val) => this.charID = val);
    this.charDataSvc.getCharName.subscribe( (val) => this.charName = val);
  }

  titleValue = () => {
    return this.isNew ? 'Create Character' : this.charName;
  }

}
