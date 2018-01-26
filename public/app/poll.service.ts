import { Injectable } from '@angular/core';
import { Poll } from './poll';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { POLL } from './mock-poll';

@Injectable()
export class PollService {
  constructor() { }
  
  checkValidPollId(id: number): boolean {
    return id === 1 ? true : false; // TODO: fix this to actually check and choose if this is the best way
  }
  
  getPoll(id: number = 1): Observable<Poll> {
    if (!this.checkValidPollId(id)) {
      return;
    }
    return of(POLL);
  }
  
  newPoll(): void {
    // TODO: create this logic
  }
  
  editPoll(): void {
    // TODO: create this logic
  }
  
  deletePoll(): void {
    // TODO: create this logic
  }
}