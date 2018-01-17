import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class Dashboard implements OnInit {
  
  @Input() user: User;
  
  constructor() { }
  ngOnInit() {
    
  }
}