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
var of_1 = require("rxjs/observable/of");
var mock_poll_1 = require("./mock-poll");
var PollService = /** @class */ (function () {
    function PollService() {
    }
    PollService.prototype.checkValidPollId = function (id) {
        return id === 1 ? true : false; // TODO: fix this to actually check and choose if this is the best way
    };
    PollService.prototype.getPoll = function (id) {
        if (id === void 0) { id = 1; }
        if (!this.checkValidPollId(id)) {
            return;
        }
        return of_1.of(mock_poll_1.POLL);
    };
    PollService.prototype.newPoll = function () {
        // TODO: create this logic
    };
    PollService.prototype.editPoll = function () {
        // TODO: create this logic
    };
    PollService.prototype.deletePoll = function () {
        // TODO: create this logic
    };
    PollService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], PollService);
    return PollService;
}());
exports.PollService = PollService;
//# sourceMappingURL=poll.service.js.map