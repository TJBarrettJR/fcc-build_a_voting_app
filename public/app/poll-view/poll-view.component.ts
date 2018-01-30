import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { User } from '../user';
import { Poll } from '../poll';
import { Comment } from '../comment';

import { UserService } from '../user.service';
import { PollService } from '../poll.service';
import { VoteService } from '../vote.service';
import { CommentService } from '../comment.service';

@Component({
  selector: 'poll-view',
  templateUrl: './poll-view.component.html',
  styleUrls: ['./poll-view.component.css']
})
export class PollView implements OnInit, AfterViewChecked {
  
  user: User;
  poll: Poll;
  author: User;
  voting: boolean;
  userVote: number;
  comments: Comment[];
  
  constructor(
    private userService: UserService,
    private pollService: PollService,
    private voteService: VoteService,
    private commentService: CommentService
  ) { }
  
  getUser(): void {
    this.user = this.userService.getUser();
    this.author = this.user;
  }
  
  getAuthor(id: number): void {
    this.userService.getOtherUser(id).subscribe(author => this.author = author);
  }

  getComments(id: number): void {
    this.commentService.getComments(id).subscribe(comments => this.comments = comments);
  }
  
  getPoll(id: number): void {
    this.pollService.getPoll(id).subscribe(poll => { 
      this.poll = poll;
      this.getAuthor(this.poll.userId);
      this.getComments(this.poll.id);
      this.voting = true; // This should get if the person voted and if so what they voted for
      this.userVote = -1; // set to -1 if not voted
    });
  }

  submitComment(): void {
    let commentText = <HTMLTextAreaElement>document.getElementById("new-comment-text");
    let noText = document.getElementById("no-text");
    if (commentText.value) {
      let nextId = this.comments.reduce((max, comment) => {return max.id > comment.id ? max : comment}).id + 1;
      let newComment: Comment = {id: ++nextId, text: commentText.value, pollId: this.poll.id, user: this.user.displayName};
      this.comments.push(newComment);
      commentText.value = "";
      noText.style.display = "none";
    } else {
      noText.style.display = "block";
    }
  }
  
  submitVote(): void {
    for (let count = 0; count < this.poll.options.length; count++) {
      let currElem = document.getElementById(count+""); // TODO: will need to create record of the users vote
      if (currElem.classList.contains("active")) {
        this.userVote = count;
        this.poll.options[count].voteCount++;
        this.voting = false;
      }
    }
    let noVote = document.getElementById("no-vote");
    if (this.userVote === -1) {
      noVote.style.display = "block";
    } else {
      noVote.style.display = "none";
    }
  }

  setUserVote(): void {
    if (this.userVote !== -1) {
      let selectionElem = document.getElementById(this.userVote+"");
      selectionElem.classList.add("active");
      selectionElem.classList.add("show");
    } else {
      for (let count = 0; count < this.poll.options.length; count++) {
        let selectElem = document.getElementById(count+"");
        selectElem.classList.remove("active");
        selectElem.classList.remove("show");
      }
    }
  }

  ngAfterViewChecked() {
    this.setUserVote();
  }

  ngOnInit() {
    this.getUser();
    this.getPoll(1); // TODO: get this to be dynamic by route
  }
}