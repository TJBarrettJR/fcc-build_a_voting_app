import { Component, OnInit } from '@angular/core';
import { User } from '../user';

import { UserService } from '../user.service';

@Component({
  selector: 'user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfo implements OnInit {
  
  user: User;
  
  constructor(private userService: UserService) { }
  
  getUser(): void {
    this.user = this.userService.getUser();
  }
  
  ngOnInit() {
    this.getUser();
  }
}