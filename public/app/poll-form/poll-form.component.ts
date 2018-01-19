import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../user';
import { Poll } from '../poll';
import { Option } from '../option';

import { UserService } from '../user.service';

@Component({
  selector: 'poll-form',
  templateUrl: './poll-form.component.html',
  styleUrls: ['./poll-form.component.css']
})
export class PollForm implements OnInit {
  
  poll: Poll;
  editResetPoll: Poll;
  
  user: User;
  newPoll: boolean;
  
  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) { }
  
  getUser(): void {
    this.user = this.userService.getUser();
  }
  
  getPoll(): void {
    if (this.route.snapshot.paramMap.get('id') == 'new') {
      this.newPoll = true;
      this.poll = new Poll;
      // anything else to setup the poll new should go here
    } else {
      this.newPoll = false;
      // TODO: this needs to have a poll service to get the poll information requested and a redirect if not found
      this.poll = {id: 1, question: "Is this a question?", options: [{ id: 0, text: "Yes", voteCount: 100 }, { id: 1, text: "No", voteCount: 50 }, { id: 2, text: "??", voteCount: 1000 }], open: false };
      this.editResetPoll = JSON.parse(JSON.stringify(this.poll));
      // TODO: once poll component and object is built, build this out
    }
  }
  
  addOption(value: string): void {
    // need to add validation to give it a proper ID | check if I even need to if I just replace the options instead of insert in Mongo, if so I can just renumber the id for all?
    // need to check for duplicate options
    if (value === '') return;
    let newOption: Option = {id: -1, text: value, voteCount: 0};
    this.poll.options.push(newOption);
  }
  
  removeOption(id: number): void {
    this.poll.options.splice(id, id + 1);
  }
  
  revertBeforeChanges(): void {
    this.poll = JSON.parse(JSON.stringify(this.editResetPoll));
  }
  
  ngOnInit() {
    this.getUser();
    this.getPoll();
  }
}