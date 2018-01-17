import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { AppNav } from './app-nav/app-nav.component';
import { AppFooter } from './app-footer/app-footer.component';
import { UserInfo } from './user-info/user-info.component';
import { Dashboard } from './dashboard/dashboard.component';

import { UserService } from './user.service';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [ 
    BrowserModule,
    AppRoutingModule
  ],
  declarations: [ 
    AppComponent,
    AppNav,
    AppFooter,
    UserInfo,
    Dashboard
  ],
  providers: [ UserService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
