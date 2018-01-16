import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { AppNav } from './app-nav/app-nav.component';
import { AppFooter } from './app-footer/app-footer.component';

import { UserService } from './user.service';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ 
    AppComponent,
    AppNav,
    AppFooter
  ],
  providers: [ UserService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
