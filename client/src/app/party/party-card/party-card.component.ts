import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PartyMember, PartyService } from 'src/app/services/party.service';
import _ from 'lodash';
import { ACPart, CharDataService, Spell } from 'src/app/services/char-data.service';
import { CharService } from 'src/app/services/char.service';
import { BehaviorSubject, Subscription } from 'rxjs';
import { SocketService } from 'src/app/services/socket.service';
import { ExpendablesComponent } from 'src/app/chargen/expendables/expendables.component';
import { Expendable, ExpendableService } from 'src/app/services/expendable.service';


interface SpellChange {
  isCast: boolean;
  id: number;
}

@Component({
  selector: 'app-party-card',
  templateUrl: './party-card.component.html',
  styleUrls: ['./party-card.component.css']
})

export class PartyCardComponent implements OnInit {
  @Input() charID: number;
  @Input() dmTools: boolean;
  hpForm;
  partyID = _.last(this.router.url.split('/'));
  curHP: number;
  charName: string;
  charAC: number;
  isCaster = false;
  allACs: ACPart[];
  allExpendables: Expendable[] = [];
  classExpendables: Expendable[] = [];
  potionExpendables: Expendable[] = [];
  scrollExpendables: Expendable[] = [];
  chargeExpendables: Expendable[] = [];
  fortSave: number;
  reflexSave: number;
  willSave: number;
  hpModifier = 0;
  maxHP: number;
  theChar;
  currentMember: PartyMember;
  subs: Subscription[] = [];
  spellTag: string;
  otherExpendables = 0;

  spellList = new BehaviorSubject<Spell>( [] as unknown as Spell );
  getAllSpells = this.spellList.asObservable();
  setAllSpells = (arg) => { this.spellList.next(arg); };


  // private docSub: Subscription;

  constructor(
    private charSvc: CharService,
    private charDataSvc: CharDataService,
    private partyService: PartyService,
    private router: Router,
    private socketService: SocketService,
    private expendableSvc: ExpendableService,
    private element: ElementRef<HTMLInputElement>,
  ) { }

  ngOnInit(): void {
    this.partyService.getAllParties.subscribe(
      val => {
        this.curHP = val.results.find( party => party.partyID.toString() === this.partyID && party.charID === this.charID).curHP;
      }
    );
    this.partyService.getHPMod.subscribe(
      val => {
        this.hpModifier = val.hpModifier;
        this.addHP(val.isHeal).then(() => this.hpModifier = 0);
      }
    )
    this.charSvc.getAllChars.subscribe( val => {
      const char = val.results.find( person => person.charID === this.charID)
      this.charName = char.charName;

      let shortenedArray
      this.allACs = _.orderBy(char["ACs"], 'sortValue', 'asc');
      if(this.allACs.length > 0 ){
        shortenedArray = char.CharACs.filter( val => val.acID === this.allACs[0].acID);
        this.charAC = shortenedArray.reduce( (x, y) => x + y.score, 0 );
      }else{
        this.charAC = char.CharACs.reduce( (x, y) => x + y.score, 0 );
      }
    });
    this.charDataSvc.loadSpells(this.charID).subscribe( spells => {
      this.isCaster = spells.results.length > 0;
      this.setAllSpells(spells);
      this.spellList = spells.results;
    });
    this.charDataSvc.loadSaves(this.charID.toString()).subscribe( saves => {
      this.fortSave = saves.results.filter( save => save.saveID === 1 ).reduce( (x, y) => x + y.score, 0);
      this.reflexSave = saves.results.filter( save => save.saveID === 2 ).reduce( (x, y) => x + y.score, 0);
      this.willSave = saves.results.filter( save => save.saveID === 3 ).reduce( (x, y) => x + y.score, 0);
    });
    this.charDataSvc.loadCharBase(this.charID.toString()).subscribe( char => {
      this.maxHP = char.results.charHP;
      if (this.curHP > this.maxHP) {
        this.curHP = this.maxHP;
      }
    });
    this.expendableSvc.loadExpendables(this.charID).subscribe( expendables => {
      this.allExpendables = expendables.results;
      this.classExpendables = expendables.results.filter(exp => exp.expType === 'Class');
      this.potionExpendables = expendables.results.filter(exp => exp.expType === 'Potion');
      this.scrollExpendables = expendables.results.filter(exp => exp.expType === 'Scroll');
      this.chargeExpendables = expendables.results.filter(exp => exp.expType === 'Charge');
      this.otherExpendables = this.potionExpendables.length +
      this.scrollExpendables.length +
      this.chargeExpendables.length;
    });  
    this.subs.push(
      this.socketService.updateHP().subscribe( (data: any): void => {
        if (data.charID === this.charID) {
          this.currentMember = data;
          this.curHP = data.curHP;
        }
      }),
      this.socketService.updateExpendable().subscribe( (data: Expendable): void => {
        if (data.charID === this.charID) {
          const anExp = this.allExpendables.find(exp => exp.id === data.id);
          anExp.qty = data.qty;
        }
      }),
      this.socketService.addExpendable().subscribe( (data: Expendable): void => {
        if (data.charID === this.charID) {
          const anExp: Expendable = {
            id: data.id,
            description: data.description,
            qty: data.qty,
            charID: data.charID,
            expType: data.expType
          };
          this.allExpendables.push(anExp);
          this.classExpendables = this.allExpendables.filter(exp => exp.expType === 'Class');
          this.potionExpendables = this.allExpendables.filter(exp => exp.expType === 'Potion');
          this.scrollExpendables = this.allExpendables.filter(exp => exp.expType === 'Scroll');
          this.chargeExpendables = this.allExpendables.filter(exp => exp.expType === 'Charge');
          this.otherExpendables = this.potionExpendables.length +
            this.scrollExpendables.length +
            this.chargeExpendables.length;
        }
      }),
      this.socketService.deleteExpendable().subscribe( (data: {id: number}): void => {
          this.allExpendables = this.allExpendables.filter(exp => exp.id !== data.id);
          this.classExpendables = this.allExpendables.filter(exp => exp.expType === 'Class');
          this.potionExpendables = this.allExpendables.filter(exp => exp.expType === 'Potion');
          this.scrollExpendables = this.allExpendables.filter(exp => exp.expType === 'Scroll');
          this.chargeExpendables = this.allExpendables.filter(exp => exp.expType === 'Charge');
          this.otherExpendables = this.potionExpendables.length +
            this.scrollExpendables.length +
            this.chargeExpendables.length;
      }),
    );  
  }

  addHP = async (heal: boolean): Promise<void> => {
    if (!+this.hpModifier) {
      this.hpModifier = 0;
      return;
    }
    this.curHP = this.curHP + (this.hpModifier * (heal ? 1 : -1));
    if(this.curHP > this.maxHP){
      this.curHP = this.maxHP;
    }
    await this.partyService.updateHP(
      +this.partyID,
      this.charID,
      this.curHP
    ).subscribe();
    this.hpModifier = 0;
  }
  doNothing = (evt: Event): void => {
    evt.preventDefault();
  }
  buildClass = (): string => {
    switch (true) {
      case this.curHP > this.maxHP * 0.66:
        return 'fine';
      case this.curHP > this.maxHP * 0.25 && this.curHP <= this.maxHP * 0.66:
        return 'yellow';
      case this.curHP > -1 && this.curHP <= this.maxHP * 0.25:
        return 'red';
      case this.curHP < 0:
        return 'dead';
    }
  }
  toggelDisplay = (evt: Event) => {
    const ico: HTMLElement = evt.target as HTMLElement;
    ico.classList.toggle('down');
    ico.classList.toggle('right');
    const el: HTMLElement = ico.parentElement.nextSibling.nextSibling as HTMLElement;
    el.classList.toggle('collapsed');
  }

  setSpellAvail = (str: any) => {
    this.spellTag = str;
  }

  adjustItem = (id: number, val: number) => {
    const anExp = this.allExpendables.find(exp => exp.id === id);
    anExp.qty = anExp.qty + val;
    this.expendableSvc.updateExpendables(anExp).subscribe(val => {
      console.log(val);
    });
  }
}


