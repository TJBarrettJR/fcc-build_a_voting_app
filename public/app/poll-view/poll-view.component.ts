import { Component, OnInit } from '@angular/core';
import { User } from '../user';

import { UserService } from '../user.service';

@Component({
  selector: 'poll-view',
  templateUrl: './poll-view.component.html',
  styleUrls: ['./poll-view.component.css']
})
export class PollView implements OnInit {
  
  user: User;
  
  constructor(private userService: UserService) { }
  
  getUser(): void {
    this.user = this.userService.getUser();
  }
  
  ngOnInit() {
    this.getUser();
  }
}