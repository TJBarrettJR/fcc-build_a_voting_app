import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Dashboard } from './dashboard/dashboard.component';
import { UserInfo } from './user-info/user-info.component';

const routes: Routes = [
  { path: '', component: Dashboard },
  { path: 'Account', component: UserInfo },
  { path: '**', redirectTo: '', pathMatch: 'full' }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }