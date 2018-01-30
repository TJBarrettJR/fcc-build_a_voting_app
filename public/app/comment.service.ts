import { Injectable } from '@angular/core';
import { Comment } from './comment';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { COMMENTS } from './mock-comments';

@Injectable()
export class CommentService {
    constructor() { }

    getComments(pollId: number): Observable<Comment[]> { // TODO: need to actually build this logic
        if (pollId !== 1) {
            return; // Need to figure this out when not found
        }
        return of(COMMENTS);
    }

    addComment() {
        // TODO: add this logic
    }

    editComment() {
        // TODO: add this logic
    }
    
    deleteComment() {
        // TODO: add this logic
    }
}
