import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { User } from '../user';
import { Poll } from '../poll';

import { UserService } from '../user.service';
import { PollService } from '../poll.service';
import { POLL } from '../mock-poll';

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
  
  constructor(
    private userService: UserService,
    private pollService: PollService
  ) { }
  
  getUser(): void {
    this.user = this.userService.getUser();
    this.author = this.user;
  }
  
  getAuthor(id: number): void {
    this.userService.getOtherUser(id).subscribe(author => this.author = author);
  }
  
  getPoll(id: number): void {
    this.pollService.getPoll(id).subscribe(poll => { 
      this.poll = poll;
      this.getAuthor(this.poll.userId);
      this.voting = true; // This should get if the person voted and if so what they voted for
      this.userVote = -1; // set to -1 if not voted
    });
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