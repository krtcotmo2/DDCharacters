import { Component, OnDestroy, OnInit } from '@angular/core';
import { CharDataService } from './services/char-data.service';
import { Subscription, of } from 'rxjs';
import { UserService } from './services/user.service';
import { PartyMember } from './services/party.service';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';

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
  currentMember: PartyMember;

  constructor(
    // private charDataSvc: CharDataService,
    private userService: UserService,
    private router:Router,
  ){}

    ngOnInit(): void {
      this.userService.getUser.subscribe( val => {
        this.theUser = val;
        this.isLoggedIn = this.theUser['isLoggedIn'];
        this.userName = this.theUser['userName'];
      });
      
    }
    ngAfterContentInit(): void {
      // this.userService.checkLoggedInStatus({}).pipe(
      //   catchError(err => of({}))
      // ).subscribe((val)=>{
      //   if(val.ok !== undefined && !val.ok){
      //     return;
      //   }
      //   this.theUser = val;
      //   this.isLoggedIn = true;
      //   this.userService.setUser(val);
      //   if(this.theUser?.['userEmail']){
      //     this.router.navigateByUrl('charLoad')
      //   }
      // });
    }
    ngOnDestroy(): void {
      this.subs.forEach( (s: Subscription) => s.unsubscribe());
    }

    logout(){
      this.userService.logOut().subscribe(val=>{
        this.userService.setUser(val);
        this.isLoggedIn = false;
        this.userName ='';
        this.router.navigateByUrl('')
      });
    }
}
