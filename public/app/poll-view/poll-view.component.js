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
var user_service_1 = require("../user.service");
var poll_service_1 = require("../poll.service");
var PollView = /** @class */ (function () {
    function PollView(userService, pollService) {
        this.userService = userService;
        this.pollService = pollService;
        this.voting = true;
    }
    PollView.prototype.getUser = function () {
        this.user = this.userService.getUser();
        this.author = this.user;
    };
    PollView.prototype.getAuthor = function (id) {
        var _this = this;
        this.userService.getOtherUser(id).subscribe(function (author) { return _this.author = author; });
    };
    PollView.prototype.getPoll = function (id) {
        var _this = this;
        this.pollService.getPoll(id).subscribe(function (poll) { return _this.poll = poll; });
    };
    PollView.prototype.ngOnInit = function () {
        this.getUser();
        this.getPoll(1); // TODO: get this to be dynamic by route
        this.getAuthor(this.poll.userId); // TODO: this might not come back in time??
    };
    PollView = __decorate([
        core_1.Component({
            selector: 'poll-view',
            templateUrl: './poll-view.component.html',
            styleUrls: ['./poll-view.component.css']
        }),
        __metadata("design:paramtypes", [user_service_1.UserService,
            poll_service_1.PollService])
    ], PollView);
    return PollView;
}());
exports.PollView = PollView;
//# sourceMappingURL=poll-view.component.js.map