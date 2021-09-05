import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { NewCharRoutingModule } from './new-char-routing.module';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    NewCharRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class NewCharModule { }
