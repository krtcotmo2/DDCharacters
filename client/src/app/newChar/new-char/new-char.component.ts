import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { CharDataService } from '../../services/char-data.service';
import { UserService } from '../../services/user.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import _ from 'lodash';
import {Stats, Saves} from '../../helpers/enum';

@Component({
  selector: 'app-new-char',
  templateUrl: './new-char.component.html',
  styleUrls: ['./new-char.component.css']
})
export class NewCharComponent implements OnInit {
  modForm;
  loggedIn: {};
  charName: string;
  charRace: string;
  charClass: string;
  charAlignment: string;
  charHP: string;
  charLevel: string;
  charStr: string;
  charDex: string;
  charCon: string;
  charInt: string;
  charWis: string;
  charChr: string;

  constructor(private charDataSvc: CharDataService,
    private userDataService: UserService,
    private router: Router,
    private http: HttpClient ) { }

    ngOnInit(): void {
      this.userDataService.getUser.subscribe( (val) => this.loggedIn = val);
    }
    onCancel = evt =>{
      console.log('evt')
      this.router.navigate(['/charLoad']);
    }

    onSubmit = (evt) => {
      evt.preventDefault();
      const body = {
        userID: this.loggedIn['userID'],
        charName: this.charName,
        charHP: this.charHP,
        raceID: this.charRace,
        alignID: this.charAlignment,
        classID: this.charClass,
        classLvl: this.charLevel
      };
      this.charDataSvc.addCharacter(body).subscribe(vals => {
        this.router.navigate(['/charLoad']);
      });
    }
  }
