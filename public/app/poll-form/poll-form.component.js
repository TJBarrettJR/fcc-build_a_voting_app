"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var user_service_1 = require("../user.service");
var PollForm = /** @class */ (function () {
    function PollForm(userService, route) {
        this.userService = userService;
        this.route = route;
        this.nextOption = 0;
    }
    PollForm.prototype.getUser = function () {
        this.user = this.userService.getUser();
    };
    PollForm.prototype.getPoll = function () {
        if (this.route.snapshot.paramMap.get('id') == 'new') {
            this.newPoll = true;
            this.poll = { id: -1, question: "", options: [], open: false };
            document.getElementById('save-submit').innerText = 'Submit';
            // anything else to setup the poll new should go here
        }
        else {
            this.newPoll = false;
            // TODO: this needs to have a poll service to get the poll information requested and a redirect if not found
            this.poll = { id: 1, question: "Is this a question?", options: [{ id: 0, text: "Yes", voteCount: 100 }, { id: 1, text: "No", voteCount: 50 }, { id: 2, text: "??", voteCount: 1000 }], open: false };
            this.editResetPoll = JSON.parse(JSON.stringify(this.poll));
            this.nextOption = this.poll.options.length;
            // TODO: once poll component and object is built, build this out
        }
    };
    PollForm.prototype.addOption = function (value) {
        // need to check for duplicate options
        var invalid = document.getElementById("newOption");
        var emptyOption = document.getElementById('empty-option');
        var dupOption = document.getElementById('dup-option');
        if (value === '') {
            dupOption.style.display = "none";
            emptyOption.style.display = 'block';
            return;
        }
        emptyOption.style.display = 'none';
        for (var _i = 0, _a = this.poll.options; _i < _a.length; _i++) {
            var option = _a[_i];
            if (option.text == value) {
                this.invalidOption = invalid.value;
                invalid.value = '';
                dupOption.style.display = "block";
                return;
            }
        }
        dupOption.style.display = "none";
        var newOption = { id: this.nextOption++, text: value, voteCount: 0 };
        this.poll.options.push(newOption);
    };
    PollForm.prototype.submit = function () {
        var question = document.getElementById('question');
        var needMoreOptions = document.getElementById('need-more-options');
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
    };
    PollForm.prototype.removeOption = function (id) {
        this.poll.options.splice(id, 1);
    };
    PollForm.prototype.revertBeforeChanges = function () {
        this.poll = JSON.parse(JSON.stringify(this.editResetPoll));
    };
    PollForm.prototype.ngOnInit = function () {
        this.getUser();
        this.getPoll();
    };
    PollForm = __decorate([
        core_1.Component({
            selector: 'poll-form',
            templateUrl: './poll-form.component.html',
            styleUrls: ['./poll-form.component.css']
        }),
        __metadata("design:paramtypes", [user_service_1.UserService,
            router_1.ActivatedRoute])
    ], PollForm);
    return PollForm;
}());
exports.PollForm = PollForm;
//# sourceMappingURL=poll-form.component.js.map