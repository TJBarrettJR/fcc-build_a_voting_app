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
  
  nextOption: number = 0;
  invalidOption: string;

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
      this.poll = {id: -1, question: "", options: [], open: false};
      document.getElementById('save-submit').innerText = 'Submit';
      // anything else to setup the poll new should go here
    } else {
      this.newPoll = false;
      // TODO: this needs to have a poll service to get the poll information requested and a redirect if not found
      this.poll = {id: 1, question: "Is this a question?", options: [{ id: 0, text: "Yes", voteCount: 100 }, { id: 1, text: "No", voteCount: 50 }, { id: 2, text: "??", voteCount: 1000 }], open: false };
      this.editResetPoll = JSON.parse(JSON.stringify(this.poll));
      this.nextOption = this.poll.options.length;
      // TODO: once poll component and object is built, build this out
    }
  }
  
  addOption(value: string): void {
    // need to check for duplicate options
    let invalid = <HTMLInputElement>document.getElementById("newOption");
    let emptyOption = document.getElementById('empty-option');
    let dupOption = document.getElementById('dup-option');
    if (value === '') {
      dupOption.style.display = "none";
      emptyOption.style.display = 'block';
      return;
    }
    emptyOption.style.display = 'none';
    for (let option of this.poll.options) {
      if (option.text == value) {
        this.invalidOption = invalid.value;
        invalid.value = '';
        dupOption.style.display = "block";
        return;
      }
    }
    dupOption.style.display = "none";

    let newOption: Option = {id: this.nextOption++, text: value, voteCount: 0};
    this.poll.options.push(newOption);
  }

  submit(): void {
    let question = <HTMLInputElement>document.getElementById('question');
    let needMoreOptions = document.getElementById('need-more-options');
    if (question.value === '') {
      console.log('test');
      question.classList.add('is-invalid');
      return;
    }
    question.classList.remove('is-invalid');
    if (this.poll.options.length < 2) {
      needMoreOptions.style.display = 'block';
      return;
    }
    needMoreOptions.style.display = 'none';

    /* wire this once DB is connected
       Add warning for reset of poll counts if editing
       Reset option id's if editing
    */
  }
  
  removeOption(id: number): void {
    this.poll.options.splice(id, 1);
  }
  
  revertBeforeChanges(): void {
    this.poll = JSON.parse(JSON.stringify(this.editResetPoll));
  }
  
  ngOnInit() {
    this.getUser();
    this.getPoll();
  }
}