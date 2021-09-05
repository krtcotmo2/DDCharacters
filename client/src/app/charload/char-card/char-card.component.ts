import { Component, OnInit, Input } from '@angular/core';
import {Router} from '@angular/router';
import { CharDataService } from '../../services/char-data.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-char-card',
  templateUrl: './char-card.component.html',
  styleUrls: ['./char-card.component.css']
})
export class CharCardComponent implements OnInit {
  @Input() char: {};
  ac:number;

  constructor(private router: Router,
    private userService: UserService,
    private charDataSvc: CharDataService) { }

  ngOnInit(): void {
    this.ac = this.calcAc(this.char["CharACs"]);
  }
  isDeceased = (pers: {}) => {
    return pers['isDead'];
  }
  joinArrays = (arr: []) => {
    const classes = arr.map(arg => arg['CharClass']['className']+'/').join('');
    const lvls = arr.map(arg => arg['classLevel']+'/').join('');
    return `${classes.substr(0, classes.length - 1)} - ${lvls.substr(0, lvls.length - 1)}`;
  }
  calcAc = (arr:[]) => {
    return arr.reduce( (a, b) => a + b["score"], 0);
  }

}
