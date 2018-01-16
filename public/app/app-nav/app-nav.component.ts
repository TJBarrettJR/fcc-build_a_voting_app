import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-nav',
  templateUrl: './app-nav.component.html',
  styleUrls: ['./app-nav.component.css']
})
export class AppNav implements OnInit {
  
  @Input() user: User;
  
  constructor() { }
  ngOnInit() {
    
  }
}