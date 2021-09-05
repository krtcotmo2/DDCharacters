import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PartyRoutingModule } from './party-routing.module';
import { SearchComponent } from './search/search.component';
import { OverviewComponent } from './overview/overview.component';
import { NewPartyComponent } from './new-party/new-party.component';


@NgModule({
  declarations: [SearchComponent, OverviewComponent, NewPartyComponent],
  imports: [
    CommonModule,
    PartyRoutingModule
  ]
})
export class PartyModule { }
