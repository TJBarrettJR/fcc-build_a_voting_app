import { Injectable } from '@angular/core';
import { Vote } from './vote';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { VOTE } from './mock-vote';

@Injectable()
export class VoteService {
  constructor() { }
  
  getVote(id: number = 1): Observable<Vote> { // TODO: need this to actually check by user and poll
    if (id !== 1) {
      return; // TODO: this is if the item is not found
    }
    return of(VOTE); // TODO: fix this to actually check
  }
  
  addVote(): void {
    // TODO: create this logic
  }
  
  editVote(): void {
    // TODO: create this logic
  }
  
  deleteVote(): void {
    // TODO: create this logic
  }
}