import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewCharComponent } from './new-char/new-char.component';

const routes: Routes = [
  {path: '', component: NewCharComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
 export class NewCharRoutingModule { }
