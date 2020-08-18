import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserService } from '../services/user.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import _ from 'lodash';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isLoggedIn: boolean;
  theUser;
  userName: string;
  password:string;
  modForm;

  constructor(private userService: UserService,
    private router: Router,
    private http: HttpClient,
    private modalService: NgbModal ) { }

  ngOnInit(): void {
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
        alert("need to redo password");
        return;
      } else {
        this.theUser.isLoggedIn = true;
        this.userService.setUser(this.theUser);
        this.router.navigate(['/charLoad']);
      }
    },
    err => {
      alert('invalid login')
    })
  }

}
