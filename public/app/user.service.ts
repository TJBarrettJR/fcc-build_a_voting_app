import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { USER } from './mock-user';

@Injectable()
export class UserService {
  constructor() { }
  
  getUser(): Observable<User> {
    return of(USER);
  }
}