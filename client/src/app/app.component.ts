import { Component, OnDestroy, OnInit } from '@angular/core';
import { CharDataService } from './services/char-data.service';
import { Subscription } from 'rxjs';
import { UserService } from './services/user.service';
import { PartyMember } from './services/party.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'character Manager';
  theUser = {};
  userName: string;
  isLoggedIn = false;
  subs: Subscription[] = [];
  currentMenber: PartyMember;

  constructor(
    private charDataSvc: CharDataService,
    private userService: UserService,
    // private socketService: SocketService
  ){}

    ngOnInit(): void {
      this.userService.getUser.subscribe( val => {
        this.theUser = val;
        this.isLoggedIn = this.theUser['isLoggedIn'];
        this.userName = this.theUser['userName'];
      });
    }

    ngOnDestroy(): void {
      this.subs.forEach( (s: Subscription) => s.unsubscribe());
    }
}
