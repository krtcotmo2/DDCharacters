import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { CharService } from '../../services/char.service';
import { CharDataService } from '../../services/char-data.service';

@Component({
  selector: 'app-load',
  templateUrl: './load.component.html',
  styleUrls: ['./load.component.css']
})
export class LoadComponent implements OnInit {
  characters = [];
  charID: number;
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
