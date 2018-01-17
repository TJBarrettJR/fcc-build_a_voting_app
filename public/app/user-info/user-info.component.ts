import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfo implements OnInit {
  
  @Input() user: User;
  
  constructor() { }
  ngOnInit() {
    
  }
}