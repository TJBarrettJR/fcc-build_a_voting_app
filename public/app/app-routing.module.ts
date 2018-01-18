import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Dashboard } from './dashboard/dashboard.component';
import { UserInfo } from './user-info/user-info.component';
import { PollForm } from './poll-form/poll-form.component';

const routes: Routes = [
  { path: '', component: Dashboard },
  { path: 'account', component: UserInfo },
  { path: 'pollform/:id', component: PollForm },
  { path: '**', redirectTo: '', pathMatch: 'full' }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }