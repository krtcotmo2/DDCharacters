import { Component, OnInit} from '@angular/core';
import { CharDataService } from '../../services/char-data.service';
import { UserService } from '../../services/user.service';
import {Router} from '@angular/router';
import _ from 'lodash';
import { CharBasics } from '../../interfaces/charBasic';
import { Expendable, ExpendableService } from 'src/app/services/expendable.service';
import { ExpendableType } from 'src/app/services/expendable.service';
import { SocketService } from 'src/app/services/socket.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-expendables',
  templateUrl: './expendables.component.html',
  styleUrls: ['./expendables.component.css']
})
export class ExpendablesComponent implements OnInit {
  charID: number;
  curChar: number;
  qty: number;
  description: string;
  expForm;
  gatherNewInfo = false;
  filterText = '';
  loggedIn: {};
  isMyCharacter: boolean;
  charBasic: CharBasics;
  selExp: string;
  expTypes = ExpendableType;
  allExpendables: Expendable[] = [];
  classExpendables: Expendable[] = [];
  potionExpendables: Expendable[] = [];
  scrollExpendables: Expendable[] = [];
  chargeExpendables: Expendable[] = [];
  subs: Subscription[] = [];

  constructor(
    private charDataSvc: CharDataService,
    private userService: UserService,
    private router: Router,
    private expendableService: ExpendableService,
    private socketService: SocketService,
  ) { }

  ngOnInit(): void {
    this.userService.getUser.subscribe( (val) => this.loggedIn = val);
    this.charDataSvc.getCharID.subscribe( (val) => this.charID = val);
    this.charDataSvc.getCharBasics.subscribe( (val) => this.charBasic = val);
    this.isMyCharacter = this.loggedIn['userID'] === this.charBasic.results.userID;
    this.expendableService.loadExpendables(this.charID).subscribe( (val) => {
      this.allExpendables = val.results;
      this.classExpendables = val.results.filter(exp => exp.expType === 'Class');
      this.potionExpendables = val.results.filter(exp => exp.expType === 'Potion');
      this.scrollExpendables = val.results.filter(exp => exp.expType === 'Scroll');
      this.chargeExpendables = val.results.filter(exp => exp.expType === 'Charge');
    });
    this.subs.push(
      this.socketService.updateExpendable().subscribe( (data: Expendable): void => {
        if (data.charID === this.charID) {
          const anExp = this.allExpendables.find(exp => exp.id === data.id);
          anExp.qty = data.qty;
        }
      }),
      this.socketService.updateExpendable().subscribe( (data: Expendable): void => {
        if (data.charID === this.charID) {
          const anExp = this.allExpendables.find(exp => exp.id === data.id);
          anExp.qty = data.qty;
        }
      }),
    );
  }

  onSubmit = (evt: Event) => {
    evt.preventDefault();
    if (this.selExp === '') {
      return;
    }
    console.log('this.selExp', this.selExp)
    const body = {
      charID: this.charID,
      description: this.description,
      qty: this.qty,
      expType: ExpendableType[this.selExp]
    }
    this.expendableService.insertExpendables(body).subscribe (val => {
      const newExp: Expendable = {
        id: val.id,
        ...body
      };
      this.allExpendables.push(newExp);
      this.classExpendables = this.allExpendables.filter(exp => exp.expType === 'Class');
      this.potionExpendables = this.allExpendables.filter(exp => exp.expType === 'Potion');
      this.scrollExpendables = this.allExpendables.filter(exp => exp.expType === 'Scroll');
      this.chargeExpendables = this.allExpendables.filter(exp => exp.expType === 'Charge');
      this.selExp = '';
      this.qty = 0;
      this.description = '';
      this.toggleForm(false);
      this.charDataSvc.broadcastMessage('ADDEXPENDABLE', val);
    });
  }

  categoryselected = (evt) => {
    this.selExp = evt.target.getAttribute("data-value");
  }
  filterList = (evt) => {
    this.filterText = evt.target.value;
    const allRows: any = document.getElementsByClassName('stat six wide column');
    for(let r of allRows){
      if (r.innerText.toLowerCase().includes(this.filterText.toLowerCase())) {
        r.parentElement.classList.remove('hidden');
      } else {
        r.parentElement.classList.add('hidden');
      }
    }
  }
  deleteEquip = (evt: Event, id: number) => {
    this.expendableService.deleteExpendables(id).subscribe( val => {
      this.charDataSvc.broadcastMessage('DELETEEXPENDABLE', {id});
      this.allExpendables = this.allExpendables.filter( exp => exp.id !== id);
      this.classExpendables = this.allExpendables.filter(exp => exp.expType === 'Class');
      this.potionExpendables = this.allExpendables.filter(exp => exp.expType === 'Potion');
      this.scrollExpendables = this.allExpendables.filter(exp => exp.expType === 'Scroll');
      this.chargeExpendables = this.allExpendables.filter(exp => exp.expType === 'Charge');
    })
  }
  toggleForm = (arg: boolean) => {
    this.gatherNewInfo = arg;
  }
  adjustItem = (id: number, val: number) => {
    const anExp = this.allExpendables.find(exp => exp.id === id);
    anExp.qty = anExp.qty + val;
    this.expendableService.updateExpendables(anExp).subscribe(val => {
      console.log(val);
    });
  }
}
