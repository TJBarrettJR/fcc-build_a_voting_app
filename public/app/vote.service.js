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
var mock_vote_1 = require("./mock-vote");
var VoteService = /** @class */ (function () {
    function VoteService() {
    }
    VoteService.prototype.getVote = function (id) {
        if (id === void 0) { id = 1; }
        if (id !== 1) {
            return; // TODO: this is if the item is not found
        }
        return of_1.of(mock_vote_1.VOTE); // TODO: fix this to actually check
    };
    VoteService.prototype.addVote = function () {
        // TODO: create this logic
    };
    VoteService.prototype.editVote = function () {
        // TODO: create this logic
    };
    VoteService.prototype.deleteVote = function () {
        // TODO: create this logic
    };
    VoteService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], VoteService);
    return VoteService;
}());
exports.VoteService = VoteService;
//# sourceMappingURL=vote.service.js.map