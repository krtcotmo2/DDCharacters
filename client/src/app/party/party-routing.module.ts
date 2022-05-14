import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewPartyComponent } from './new-party/new-party.component';
import { OverviewComponent } from './overview/overview.component';
import { SearchComponent } from './search/search.component';


const routes: Routes = [
  {path: 'search', component: SearchComponent},
  {path: 'new', component: NewPartyComponent},
  {path: '**', component: OverviewComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PartyRoutingModule { }
