import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartyRoutingModule } from './party-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SearchComponent } from './search/search.component'
import { NewPartyComponent } from './new-party/new-party.component';
import { OverviewComponent } from './overview/overview.component';
import { PartyCardComponent } from './party-card/party-card.component';
import { SpellListComponent } from './spell-list/spell-list.component';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';


const config: SocketIoConfig = { url: 'http://localhost:3000', options: {} };

@NgModule({
  declarations: [
    SearchComponent,
    NewPartyComponent,
    OverviewComponent,
    PartyCardComponent,
    SpellListComponent,
  ],
  imports: [
    CommonModule,
    PartyRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    NgbModule,
    FormsModule,
    SocketIoModule.forRoot(config),
  ]
})
export class PartyModule { }
