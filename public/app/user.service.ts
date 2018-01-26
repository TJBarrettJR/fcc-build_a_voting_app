import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { USER } from './mock-user';
import { OTHER_USER } from './mock-other-user';

@Injectable()
export class UserService {
  constructor() { }
  
  user: User; 
  
  checkIfLogged(): boolean {
    return this.user ? true : false ;
  }
  
  getUser(): User {
    return this.user;
  }
  
  getOtherUser(id: number): Observable<User> {
    return of(OTHER_USER);
  }
  
  signIn(): Observable<User> {
    this.user = USER;
    return of(USER);
  }
}