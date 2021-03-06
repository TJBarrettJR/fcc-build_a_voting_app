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
var mock_comments_1 = require("./mock-comments");
var CommentService = /** @class */ (function () {
    function CommentService() {
    }
    CommentService.prototype.getComments = function (pollId) {
        if (pollId !== 1) {
            return; // Need to figure this out when not found
        }
        return of_1.of(mock_comments_1.COMMENTS);
    };
    CommentService.prototype.addComment = function () {
        // TODO: add this logic
    };
    CommentService.prototype.editComment = function () {
        // TODO: add this logic
    };
    CommentService.prototype.deleteComment = function () {
        // TODO: add this logic
    };
    CommentService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], CommentService);
    return CommentService;
}());
exports.CommentService = CommentService;
//# sourceMappingURL=comment.service.js.map