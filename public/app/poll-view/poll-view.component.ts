import { Component, OnInit } from '@angular/core';
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
export class PollView implements OnInit {
  
  user: User;
  poll: Poll;
  author: User;
  voting: boolean = true;
  
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
    this.pollService.getPoll(id).subscribe(poll => this.poll = poll);
  }
  
  ngOnInit() {
    this.getUser();
    this.getPoll(1); // TODO: get this to be dynamic by route
    this.getAuthor(this.poll.userId); // TODO: this might not come back in time??
  }
}