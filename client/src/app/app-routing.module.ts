import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './home/home.component';

const routes: Routes = [
  {path: 'charGen', loadChildren: () => import('./chargen/chargen.module').then(m => m.ChargenModule) },
  {path: 'charLoad', loadChildren: () => import('./charload/charload.module').then(m => m.CharloadModule) },
  {path: 'newChar', loadChildren: () => import('./newChar/new-char.module').then(m => m.NewCharModule) },
  {path: 'party', loadChildren: () => import('./party/party.module').then(m => m.PartyModule) },
  {path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
