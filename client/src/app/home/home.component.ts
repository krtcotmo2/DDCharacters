import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import {Router} from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';
import { UserService } from '../services/user.service';
import _ from 'lodash';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isLoggedIn: boolean;
  isForced: boolean;
  theUser;
  userName: string;
  password:string;
  newPassword: string;
  confPassword: string;
  modForm;
  restForm;
  @ViewChild('confPasswordField') confPasswordField: ElementRef;
  constructor(private userService: UserService,
    private router: Router,
    private http: HttpClient,
    private _snackBar: MatSnackBar ) { }

  ngOnInit(): void {
    this.isForced = false;
    this.userService.getUser.subscribe( val => this.theUser = val);
    this.isLoggedIn = this.theUser.userEmail !== undefined;
  }

  onSubmit = evt => {
    evt.preventDefault();
    const body = {
      userEmail: this.userName,
      password: this.password
    }
    this.userService.loginUser(body).subscribe( (val) => {
      this.theUser = val;
      console.log(this.theUser);
      if (this.theUser.forcedReset){
        this.isLoggedIn = true;
        this.isForced = true;
        return;
      } else {
        this.theUser.isLoggedIn = true;
        this.userService.setUser(this.theUser);
        this.router.navigate(['/charLoad']);
      }
    },
    err => {
      this._snackBar.open('Invalid Login. Try Again', '', {
        duration: 2000,
        horizontalPosition: 'center',
        verticalPosition: 'top',
        panelClass: ['red-snackbar']
      });
    })
  }

  onReSubmit = evt => {
    evt.preventDefault();
    if (this.newPassword !== this.confPassword){
      this.confPassword = '';
      this.confPasswordField.nativeElement.focus()
      this._snackBar.open('Passwords did not match, Try Again', '', {
        duration: 2000,
        horizontalPosition: 'center',
        verticalPosition: 'top',
        panelClass: ['red-snackbar']
      });
      return;
    }
    this._snackBar.open('Password Sent', '', {
      duration: 2000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: ['green-snackbar']
    });
  }
}
