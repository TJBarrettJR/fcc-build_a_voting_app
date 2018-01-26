import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { AppNav } from './app-nav/app-nav.component';
import { AppFooter } from './app-footer/app-footer.component';
import { UserInfo } from './user-info/user-info.component';
import { Dashboard } from './dashboard/dashboard.component';
import { PollForm } from './poll-form/poll-form.component';
import { PollView } from './poll-view/poll-view.component';

import { UserService } from './user.service';
import { PollService } from './poll.service';
import { VoteService } from './vote.service';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [ 
    AppComponent,
    AppNav,
    AppFooter,
    UserInfo,
    Dashboard,
    PollForm,
    PollView
  ],
  providers: [ 
    UserService,
    PollService,
    VoteService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
