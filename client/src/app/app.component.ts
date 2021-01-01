import { Component } from '@angular/core';
import { CharDataService } from './services/char-data.service';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'character Manager';
  theUser = {};
  userName: string;
  isLoggedIn = false;

  constructor(private charDataSvc: CharDataService,
    private userService: UserService){}

    ngOnInit(): void {
      this.userService.getUser.subscribe( val => {
        this.theUser = val;
        this.isLoggedIn = this.theUser['isLoggedIn'];
        this.userName = this.theUser['userName'];
      });

    }
}
