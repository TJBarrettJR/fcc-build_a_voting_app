"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var app_nav_component_1 = require("./app-nav/app-nav.component");
var app_footer_component_1 = require("./app-footer/app-footer.component");
var user_info_component_1 = require("./user-info/user-info.component");
var dashboard_component_1 = require("./dashboard/dashboard.component");
var poll_form_component_1 = require("./poll-form/poll-form.component");
var poll_view_component_1 = require("./poll-view/poll-view.component");
var user_service_1 = require("./user.service");
var poll_service_1 = require("./poll.service");
var vote_service_1 = require("./vote.service");
var comment_service_1 = require("./comment.service");
var app_routing_module_1 = require("./app-routing.module");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                app_routing_module_1.AppRoutingModule
            ],
            declarations: [
                app_component_1.AppComponent,
                app_nav_component_1.AppNav,
                app_footer_component_1.AppFooter,
                user_info_component_1.UserInfo,
                dashboard_component_1.Dashboard,
                poll_form_component_1.PollForm,
                poll_view_component_1.PollView
            ],
            providers: [
                user_service_1.UserService,
                poll_service_1.PollService,
                vote_service_1.VoteService,
                comment_service_1.CommentService
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map