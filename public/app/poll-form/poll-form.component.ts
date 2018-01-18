import { Component, OnInit } from '@angular/core';
import { User } from '../user';

import { UserService } from '../user.service';

@Component({
  selector: 'poll-form',
  templateUrl: './poll-form.component.html',
  styleUrls: ['./poll-form.component.css']
})
export class PollForm implements OnInit {
  
  user: User;
  
  constructor(private userService: UserService) { }
  
  getUser(): void {
    this.user = this.userService.getUser();
  }
  
  ngOnInit() {
    this.getUser();
  }
}