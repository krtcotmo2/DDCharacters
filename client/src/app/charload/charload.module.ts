import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharloadRoutingModule } from './charload-routing.module';
import { LoadComponent } from './load/load.component';


@NgModule({
  declarations: [LoadComponent],
  imports: [
    CommonModule,
    CharloadRoutingModule
  ]
})
export class CharloadModule { }
