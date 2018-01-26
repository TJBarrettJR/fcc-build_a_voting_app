import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class Dashboard implements OnInit {
  
  @Input() user: User; // TODO: need to fix this as it will not be pushed through @Input. Review user-info for details
  
  constructor() { }
  ngOnInit() {
    
  }
}