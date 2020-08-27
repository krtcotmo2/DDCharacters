import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Input() control: FormControl;
  @Input() label: string;
  @Input() val: string;
  @Input() placeHolder = '';

  constructor() {

   }

  ngOnInit(): void { }

  isErrored = () => {
    const {dirty, touched, errors} = this.control;
    return errors && touched && dirty;
  }
  checkNum = (arg) => {
    return isNaN(arg) || arg.length < 3 || arg.length > 4;
  }
}
