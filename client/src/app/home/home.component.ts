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
  emailAddress: string;
  newPassword: string;
  confPassword: string;
  modForm;
  restForm;
  isNew: boolean;
  @ViewChild('confPasswordField') confPasswordField: ElementRef;
  constructor(private userService: UserService,
    private router: Router,
    private http: HttpClient,
    private _snackBar: MatSnackBar ) { }

  ngOnInit(): void {
    this.isNew = document.location.pathname === '/newUser';
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
    const body = {
      userName: this.emailAddress,
      password: this.newPassword,
      userID: this.theUser.userID
    };

    this.userService.resetPassword(body).subscribe( (val) => {
      const aValue: {} = val;
      if (aValue['status'] === 'done') {
        this.theUser.isLoggedIn = true;
        this.theUser.forcedReset = false;
        this.userService.setUser(this.theUser);
        this.isForced = false;
        this.isLoggedIn = true;
        this.router.navigate(['/charLoad']);
      }
    });
  }

  onCreate = (evt) => {
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
    const body = {
      userName: this.userName,
      password: this.newPassword,
      userEmail: this.emailAddress
    };
    this.userService.insertUser(body).subscribe( val => {
      this.theUser = val;
      this.theUser.userPassword = null;
      this.userService.setUser(this.theUser);
      this.router.navigate(['/charLoad']);
    });
  }

  resendPassword = () =>{
    const tempEmail = this.userName;
    this.userName = '';
    console.log(tempEmail);
    const body = {
      userEmail: tempEmail
    }
    this.userService.newPassword(body).subscribe(val => {
      this._snackBar.open('Password reset. Check your email', '', {
        duration: 2000,
        horizontalPosition: 'center',
        verticalPosition: 'top',
        panelClass: ['red-snackbar']
      });
    },
    err => {
      this._snackBar.open('Email not found in database', '', {
        duration: 2000,
        horizontalPosition: 'center',
        verticalPosition: 'top',
        panelClass: ['red-snackbar']
      });
    });
  }
}
