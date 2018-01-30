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
var vote_service_1 = require("../vote.service");
var comment_service_1 = require("../comment.service");
var PollView = /** @class */ (function () {
    function PollView(userService, pollService, voteService, commentService) {
        this.userService = userService;
        this.pollService = pollService;
        this.voteService = voteService;
        this.commentService = commentService;
    }
    PollView.prototype.getUser = function () {
        this.user = this.userService.getUser();
        this.author = this.user;
    };
    PollView.prototype.getAuthor = function (id) {
        var _this = this;
        this.userService.getOtherUser(id).subscribe(function (author) { return _this.author = author; });
    };
    PollView.prototype.getComments = function (id) {
        var _this = this;
        this.commentService.getComments(id).subscribe(function (comments) { return _this.comments = comments; });
    };
    PollView.prototype.getPoll = function (id) {
        var _this = this;
        this.pollService.getPoll(id).subscribe(function (poll) {
            _this.poll = poll;
            _this.getAuthor(_this.poll.userId);
            _this.getComments(_this.poll.id);
            _this.voting = true; // This should get if the person voted and if so what they voted for
            _this.userVote = -1; // set to -1 if not voted
        });
    };
    PollView.prototype.submitComment = function () {
        var commentText = document.getElementById("new-comment-text");
        var noText = document.getElementById("no-text");
        if (commentText.value) {
            var nextId = this.comments.reduce(function (max, comment) { return max.id > comment.id ? max : comment; }).id + 1;
            var newComment = { id: ++nextId, text: commentText.value, pollId: this.poll.id, user: this.user.displayName };
            this.comments.push(newComment);
            commentText.value = "";
            noText.style.display = "none";
        }
        else {
            noText.style.display = "block";
        }
    };
    PollView.prototype.submitVote = function () {
        for (var count = 0; count < this.poll.options.length; count++) {
            var currElem = document.getElementById(count + ""); // TODO: will need to create record of the users vote
            if (currElem.classList.contains("active")) {
                this.userVote = count;
                this.poll.options[count].voteCount++;
                this.voting = false;
            }
        }
        var noVote = document.getElementById("no-vote");
        if (this.userVote === -1) {
            noVote.style.display = "block";
        }
        else {
            noVote.style.display = "none";
        }
    };
    PollView.prototype.setUserVote = function () {
        if (this.userVote !== -1) {
            var selectionElem = document.getElementById(this.userVote + "");
            selectionElem.classList.add("active");
            selectionElem.classList.add("show");
        }
        else {
            for (var count = 0; count < this.poll.options.length; count++) {
                var selectElem = document.getElementById(count + "");
                selectElem.classList.remove("active");
                selectElem.classList.remove("show");
            }
        }
    };
    PollView.prototype.ngAfterViewChecked = function () {
        this.setUserVote();
    };
    PollView.prototype.ngOnInit = function () {
        this.getUser();
        this.getPoll(1); // TODO: get this to be dynamic by route
    };
    PollView = __decorate([
        core_1.Component({
            selector: 'poll-view',
            templateUrl: './poll-view.component.html',
            styleUrls: ['./poll-view.component.css']
        }),
        __metadata("design:paramtypes", [user_service_1.UserService,
            poll_service_1.PollService,
            vote_service_1.VoteService,
            comment_service_1.CommentService])
    ], PollView);
    return PollView;
}());
exports.PollView = PollView;
//# sourceMappingURL=poll-view.component.js.map