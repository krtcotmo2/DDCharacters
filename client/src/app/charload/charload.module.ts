import { NgModule } from '@angular/core';
import { LoadComponent } from './load/load.component';

import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CharloadRoutingModule } from './charload-routing.module';



@NgModule({
  declarations: [LoadComponent],
  imports: [
    CommonModule,
    CharloadRoutingModule,
    FontAwesomeModule,
  ]
})
export class CharloadModule { }
