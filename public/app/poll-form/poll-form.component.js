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
var poll_1 = require("../poll");
var user_service_1 = require("../user.service");
var PollForm = /** @class */ (function () {
    function PollForm(userService, route) {
        this.userService = userService;
        this.route = route;
    }
    PollForm.prototype.getUser = function () {
        this.user = this.userService.getUser();
    };
    PollForm.prototype.getPoll = function () {
        if (this.route.snapshot.paramMap.get('id') == 'new') {
            this.newPoll = true;
            this.poll = new poll_1.Poll;
            // anything else to setup the poll new should go here
        }
        else {
            this.newPoll = false;
            // TODO: this needs to have a poll service to get the poll information requested and a redirect if not found
            this.poll = { id: 1, question: "Is this a question?", options: [{ id: 0, text: "Yes", voteCount: 100 }, { id: 1, text: "No", voteCount: 50 }, { id: 2, text: "??", voteCount: 1000 }], open: false };
            this.editResetPoll = JSON.parse(JSON.stringify(this.poll));
            // TODO: once poll component and object is built, build this out
        }
    };
    PollForm.prototype.addOption = function (value) {
        // need to add validation to give it a proper ID | check if I even need to if I just replace the options instead of insert in Mongo, if so I can just renumber the id for all?
        // need to check for duplicate options
        if (value === '')
            return;
        var newOption = { id: -1, text: value, voteCount: 0 };
        this.poll.options.push(newOption);
    };
    PollForm.prototype.removeOption = function (id) {
        this.poll.options.splice(id, id + 1);
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