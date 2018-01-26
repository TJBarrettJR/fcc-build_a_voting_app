import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Dashboard } from './dashboard/dashboard.component';
import { UserInfo } from './user-info/user-info.component';
import { PollForm } from './poll-form/poll-form.component';
import { PollView } from './poll-view/poll-view.component';

const routes: Routes = [
  { path: '', component: Dashboard },
  { path: 'account', component: UserInfo },
  { path: 'pollform/:id', component: PollForm },
  { path: 'poll/:id', component: PollView },
  { path: '**', redirectTo: '', pathMatch: 'full' }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }