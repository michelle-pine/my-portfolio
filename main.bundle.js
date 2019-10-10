webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<app-header></app-header>\n\n<main class=\"d-flex\" id=\"main\">\n    \n      \n    <div class=\"container-fluid\">\n        <router-outlet></router-outlet>\n    </div>\n</main>\n<app-footer></app-footer>"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@import url(\"https://fonts.googleapis.com/css?family=Roboto:300,400,500,700\");\n@keyframes fadein {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n/* Firefox < 16 */\n/* Safari, Chrome and Opera > 12.1 */\n@-webkit-keyframes fadein {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n/* Internet Explorer */\n/* Opera < 12.1 */\nmain {\n  width: 100vw;\n  background: #fff;\n  min-height: 100vh; }\n.container-fluid {\n  margin-top: 60px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_data_service_service__ = __webpack_require__("../../../../../src/app/services/data-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_imessage_service__ = __webpack_require__("../../../../../src/app/services/imessage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_projects_projects_component__ = __webpack_require__("../../../../../src/app/components/projects/projects.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_projects_page_projects_page_component__ = __webpack_require__("../../../../../src/app/components/projects-page/projects-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_about_page_about_page_component__ = __webpack_require__("../../../../../src/app/components/about-page/about-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_contact_page_contact_page_component__ = __webpack_require__("../../../../../src/app/components/contact-page/contact-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_not_found_not_found_component__ = __webpack_require__("../../../../../src/app/components/not-found/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_single_project_single_project_component__ = __webpack_require__("../../../../../src/app/components/single-project/single-project.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_header_header_component__ = __webpack_require__("../../../../../src/app/components/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_pages_fearless_flight_fearless_flight_component__ = __webpack_require__("../../../../../src/app/components/pages/fearless-flight/fearless-flight.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_footer_footer_component__ = __webpack_require__("../../../../../src/app/components/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_pages_emotiquote_emotiquote_component__ = __webpack_require__("../../../../../src/app/components/pages/emotiquote/emotiquote.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_pages_how_how_component__ = __webpack_require__("../../../../../src/app/components/pages/how/how.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_pages_easy_animator_easy_animator_component__ = __webpack_require__("../../../../../src/app/components/pages/easy-animator/easy-animator.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_pages_ribbons_theme_ribbons_theme_component__ = __webpack_require__("../../../../../src/app/components/pages/ribbons-theme/ribbons-theme.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_pages_maze_game_maze_game_component__ = __webpack_require__("../../../../../src/app/components/pages/maze-game/maze-game.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_pages_forbidden_island_forbidden_island_component__ = __webpack_require__("../../../../../src/app/components/pages/forbidden-island/forbidden-island.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_pages_pj_videos_pj_videos_component__ = __webpack_require__("../../../../../src/app/components/pages/pj-videos/pj-videos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_pages_wonder_theme_wonder_theme_component__ = __webpack_require__("../../../../../src/app/components/pages/wonder-theme/wonder-theme.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_pages_windy_weather_windy_weather_component__ = __webpack_require__("../../../../../src/app/components/pages/windy-weather/windy-weather.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_pages_starborne_theme_starborne_theme_component__ = __webpack_require__("../../../../../src/app/components/pages/starborne-theme/starborne-theme.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_pages_phases_theme_phases_theme_component__ = __webpack_require__("../../../../../src/app/components/pages/phases-theme/phases-theme.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_pages_pj_graphics_pj_graphics_component__ = __webpack_require__("../../../../../src/app/components/pages/pj-graphics/pj-graphics.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_pages_tumblr_graphics_tumblr_graphics_component__ = __webpack_require__("../../../../../src/app/components/pages/tumblr-graphics/tumblr-graphics.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__services_about_service__ = __webpack_require__("../../../../../src/app/services/about.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__services_pjvideo_service__ = __webpack_require__("../../../../../src/app/services/pjvideo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__components_pages_locked_project_locked_project_component__ = __webpack_require__("../../../../../src/app/components/pages/locked-project/locked-project.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__components_pages_blankets_for_boston_blankets_for_boston_component__ = __webpack_require__("../../../../../src/app/components/pages/blankets-for-boston/blankets-for-boston.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__components_pages_daylight_theme_daylight_theme_component__ = __webpack_require__("../../../../../src/app/components/pages/daylight-theme/daylight-theme.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__components_pages_c3po_r3_c3po_r3_component__ = __webpack_require__("../../../../../src/app/components/pages/c3po-r3/c3po-r3.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__components_pages_cf_cf_component__ = __webpack_require__("../../../../../src/app/components/pages/cf/cf.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_projects_projects_component__["a" /* ProjectsComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_projects_page_projects_page_component__["a" /* ProjectsPageComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_about_page_about_page_component__["a" /* AboutPageComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_contact_page_contact_page_component__["a" /* ContactPageComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_not_found_not_found_component__["a" /* NotFoundComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_single_project_single_project_component__["a" /* SingleProjectComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_pages_fearless_flight_fearless_flight_component__["a" /* FearlessFlightComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_pages_emotiquote_emotiquote_component__["a" /* EmotiquoteComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_pages_how_how_component__["a" /* HowComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_pages_easy_animator_easy_animator_component__["a" /* EasyAnimatorComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_pages_ribbons_theme_ribbons_theme_component__["a" /* RibbonsThemeComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components_pages_maze_game_maze_game_component__["a" /* MazeGameComponent */],
                __WEBPACK_IMPORTED_MODULE_23__components_pages_forbidden_island_forbidden_island_component__["a" /* ForbiddenIslandComponent */],
                __WEBPACK_IMPORTED_MODULE_24__components_pages_pj_videos_pj_videos_component__["a" /* PjVideosComponent */],
                __WEBPACK_IMPORTED_MODULE_25__components_pages_wonder_theme_wonder_theme_component__["a" /* WonderThemeComponent */],
                __WEBPACK_IMPORTED_MODULE_26__components_pages_windy_weather_windy_weather_component__["a" /* WindyWeatherComponent */],
                __WEBPACK_IMPORTED_MODULE_27__components_pages_starborne_theme_starborne_theme_component__["a" /* StarborneThemeComponent */],
                __WEBPACK_IMPORTED_MODULE_28__components_pages_phases_theme_phases_theme_component__["a" /* PhasesThemeComponent */],
                __WEBPACK_IMPORTED_MODULE_29__components_pages_pj_graphics_pj_graphics_component__["a" /* PjGraphicsComponent */],
                __WEBPACK_IMPORTED_MODULE_30__components_pages_tumblr_graphics_tumblr_graphics_component__["a" /* TumblrGraphicsComponent */],
                __WEBPACK_IMPORTED_MODULE_33__components_pages_locked_project_locked_project_component__["a" /* LockedProjectComponent */],
                __WEBPACK_IMPORTED_MODULE_34__components_pages_blankets_for_boston_blankets_for_boston_component__["a" /* BlanketsForBostonComponent */],
                __WEBPACK_IMPORTED_MODULE_35__components_pages_daylight_theme_daylight_theme_component__["a" /* DaylightThemeComponent */],
                __WEBPACK_IMPORTED_MODULE_36__components_pages_c3po_r3_c3po_r3_component__["a" /* C3poR3Component */],
                __WEBPACK_IMPORTED_MODULE_37__components_pages_cf_cf_component__["a" /* CfComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forRoot([
                    { path: '', redirectTo: 'projects', pathMatch: 'full' },
                    { path: 'projects', component: __WEBPACK_IMPORTED_MODULE_9__components_projects_page_projects_page_component__["a" /* ProjectsPageComponent */] },
                    { path: 'projects/:id', component: __WEBPACK_IMPORTED_MODULE_13__components_single_project_single_project_component__["a" /* SingleProjectComponent */] },
                    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_10__components_about_page_about_page_component__["a" /* AboutPageComponent */] },
                    { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_11__components_contact_page_contact_page_component__["a" /* ContactPageComponent */] },
                    { path: '**', component: __WEBPACK_IMPORTED_MODULE_12__components_not_found_not_found_component__["a" /* NotFoundComponent */] }
                ]),
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* HttpModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__services_data_service_service__["a" /* DataService */],
                __WEBPACK_IMPORTED_MODULE_6__services_imessage_service__["a" /* AppService */],
                __WEBPACK_IMPORTED_MODULE_31__services_about_service__["a" /* AboutService */],
                __WEBPACK_IMPORTED_MODULE_32__services_pjvideo_service__["a" /* PjvideoService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/about-page/about-page.component.html":
/***/ (function(module, exports) {

module.exports = "<h6 class=\"p-2 text-center page-title mb-2 smaller-page-title\">\n  <i class=\"fa fa-crop\"></i> &nbsp; ABOUT &nbsp;\n  <i class=\"fa fa-code\"></i>\n</h6>\n\n\n<div class=\"p-3 pb-0 text-center description mx-auto\">\n  <h5 class=\"mb-3\">My name is Michelle Pine, and I believe in the combined power of technology and design. </h5>\n  <p>\n    As a computer scientist and designer, I'm constantly exploring ways to use code and visuals to display my ideas in creative\n    and exciting ways. Check out my\n    <a routerLink=\"/projects\">projects</a> for a taste of what I've done so far.</p>\n  <p>Right now, I'm a student at Northeastern University in Boston, where I'm pursuing a combined major in my passions, Computer\n    Science and Design. It's there and with professional experience that I've developed the following skillsets:</p>\n</div>\n\n\n<div class=\"d-flex p-2 justify-content-center align-items-start flex-column flex-md-row\">\n  <ng-container *ngFor=\"let skillset of aboutService.skills\">\n    <div class=\"card about-card m-3 mx-auto\">\n      <div class=\"card-header p-3 d-flex align-items-center\">\n        <h3 class=\"no-bottom-border about-icon d-flex align-items-center justify-content-center\">\n          <i class=\"{{skillset.icon}}\"></i>\n        </h3>&nbsp;&nbsp;\n        <h5 class=\"no-bottom-border\">{{skillset.title}}</h5>\n      </div>\n      <ul class=\"list-group list-group-flush\" *ngFor=\"let item of skillset.abilities\">\n\n        <li class=\"list-group-item p-3\">\n          <i class=\"fa fa-check-square-o\"></i>&nbsp;&nbsp;{{item}}\n        </li>\n\n\n\n\n      </ul>\n\n    </div>\n  </ng-container>\n</div>\n\n<h6 class=\"p-2 text-center page-title mb-2 smaller-page-title\">\n  <i class=\"fa fa-crop\"></i> &nbsp; EXPERIENCE &nbsp;\n  <i class=\"fa fa-code\"></i>\n</h6>\n<div class=\"my-5 \">\n  <ng-container *ngFor=\"let experience of aboutService.experience\">\n    <div class=\"card work-card text-center p-3 mx-auto mb-4\">\n      <div class=\"card-text\">\n        <h5>{{experience.company}}</h5>\n      </div>\n      <div class=\"d-flex align-items-center justify-content-center mx-auto my-2 p-3 title\">\n        <h2 class=\"no-bottom-border\">{{experience.title}}</h2>\n      </div>\n      <div class=\"job-description my-2 px-3\">{{experience.description}}</div>\n    </div>\n  </ng-container>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/about-page/about-page.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@import url(\"https://fonts.googleapis.com/css?family=Roboto:300,400,500,700\");\n@keyframes fadein {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n/* Firefox < 16 */\n/* Safari, Chrome and Opera > 12.1 */\n@-webkit-keyframes fadein {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n/* Internet Explorer */\n/* Opera < 12.1 */\n.description {\n  width: 85vw; }\n.card {\n  background: white; }\n.about-card {\n  width: 275px;\n  max-width: 275px;\n  -webkit-box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.1), 0 3px 5px 0 rgba(0, 0, 0, 0.1);\n          box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.1), 0 3px 5px 0 rgba(0, 0, 0, 0.1);\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s; }\n.about-card .list-group-item {\n    -webkit-box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.1), 0 3px 5px 0 rgba(0, 0, 0, 0.1);\n            box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.1), 0 3px 5px 0 rgba(0, 0, 0, 0.1);\n    -webkit-transition: all 0.3s;\n    transition: all 0.3s; }\n.about-card .list-group-item:hover {\n    -webkit-box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.2), 0 3px 20px 0 rgba(0, 0, 0, 0.19);\n            box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.2), 0 3px 20px 0 rgba(0, 0, 0, 0.19);\n    -webkit-transition: all 0.3s;\n    transition: all 0.3s;\n    color: #fa8100; }\n.about-card .about-icon {\n    width: 50px;\n    height: 50px;\n    border: 3px solid #fa8100;\n    border-radius: 50%;\n    background: white;\n    color: #fa8100; }\n.no-bottom-border {\n  padding-bottom: 0;\n  margin-bottom: 0; }\n.about-card:hover {\n  -webkit-box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.2), 0 3px 20px 0 rgba(0, 0, 0, 0.19);\n          box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.2), 0 3px 20px 0 rgba(0, 0, 0, 0.19); }\n.work-card {\n  border-radius: 25px;\n  -webkit-box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.1), 0 3px 5px 0 rgba(0, 0, 0, 0.1);\n          box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.1), 0 3px 5px 0 rgba(0, 0, 0, 0.1);\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n  width: 95vw;\n  max-width: 1600px; }\n.work-card .title {\n    width: 70%;\n    background: #fa8100;\n    /* Old browsers */\n    /* FF3.6-15 */\n    /* Chrome10-25,Safari5.1-6 */\n    background: -webkit-gradient(linear, left top, right top, from(#fa8100), to(#ffbe18));\n    background: linear-gradient(to right, #fa8100 0%, #ffbe18 100%);\n    /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\n    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='$accent1', endColorstr='$accent2', GradientType=1);\n    /* IE6-9 */\n    min-height: 50px;\n    border-radius: 20px;\n    color: white;\n    -webkit-box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.1), 0 3px 5px 0 rgba(0, 0, 0, 0.1);\n            box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.1), 0 3px 5px 0 rgba(0, 0, 0, 0.1);\n    -webkit-transition: all 0.3s;\n    transition: all 0.3s; }\n.work-card .title h2 {\n      font-weight: 400;\n      font-size: 25px; }\n.work-card .title:hover {\n    -webkit-box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.2), 0 3px 20px 0 rgba(0, 0, 0, 0.19);\n            box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.2), 0 3px 20px 0 rgba(0, 0, 0, 0.19); }\n.work-card:hover {\n  -webkit-box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.2), 0 3px 20px 0 rgba(0, 0, 0, 0.19);\n          box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.2), 0 3px 20px 0 rgba(0, 0, 0, 0.19); }\n@media screen and (max-width: 720px) {\n  .about-card {\n    width: 90vw;\n    min-width: 90vw; }\n  .description, .work-card {\n    min-width: 95vw; }\n  .work-card .title {\n    width: 100%;\n    border-radius: 20px; }\n    .work-card .title h2 {\n      font-size: 20px !important; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/about-page/about-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_about_service__ = __webpack_require__("../../../../../src/app/services/about.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPageComponent = /** @class */ (function () {
    function AboutPageComponent(aboutService) {
        this.aboutService = aboutService;
    }
    AboutPageComponent.prototype.ngOnInit = function () {
    };
    AboutPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-about-page',
            template: __webpack_require__("../../../../../src/app/components/about-page/about-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/about-page/about-page.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_about_service__["a" /* AboutService */]])
    ], AboutPageComponent);
    return AboutPageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/contact-page/contact-page.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <form (submit)=\"sendEmail(message)\">\n    <div>\n      <label for=\"name\">Name</label>\n      <input type=\"text\" name=\"name\" placeholder=\"Your Name\" [(ngModel)]=\"message.name\">\n    </div>\n    <div>\n      <label for=\"email\">Email</label>\n      <input type=\"text\" name=\"email\" placeholder=\"Your Email\" [(ngModel)]=\"message.email\">\n    </div>\n    <div>\n      <label for=\"message\">Message</label>\n      <textarea rows=\"6\" name=\"message\" [(ngModel)]=\"message.message\"></textarea>\n    </div>\n    <button type=\"submit\">Send Email</button>\n</form> -->\n<h6 class=\"p-2 text-center page-title smaller-page-title\">\n  &nbsp; CONTACT &nbsp;\n</h6>\n<div class=\"d-flex flex-column px-3 text-center\">\n  <div class=\"a-contain mx-auto\">\n\n    <div class=\"text my-3 mx-auto\">\n      Questions, concerns, or just want to talk? Email me at:\n    </div>\n\n\n\n    <div class=\"link-item my-3 mb-5 mx-auto\">\n        <a href=\"mailto:michelleashleypine@gmail.com\" target=\"_top\"><i class=\"fa fa-envelope\"></i>&nbsp;\n     MICHELLEASHLEYPINE@GMAIL.COM</a>\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/contact-page/contact-page.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@import url(\"https://fonts.googleapis.com/css?family=Roboto:300,400,500,700\");\n@keyframes fadein {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n/* Firefox < 16 */\n/* Safari, Chrome and Opera > 12.1 */\n@-webkit-keyframes fadein {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n/* Internet Explorer */\n/* Opera < 12.1 */\n.card {\n  -webkit-box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.1), 0 3px 5px 0 rgba(0, 0, 0, 0.1);\n          box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.1), 0 3px 5px 0 rgba(0, 0, 0, 0.1);\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s; }\n.card:hover {\n  -webkit-box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.2), 0 3px 20px 0 rgba(0, 0, 0, 0.19);\n          box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.2), 0 3px 20px 0 rgba(0, 0, 0, 0.19); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/contact-page/contact-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_imessage_service__ = __webpack_require__("../../../../../src/app/services/imessage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactPageComponent = /** @class */ (function () {
    function ContactPageComponent(appService, http) {
        this.appService = appService;
        this.http = http;
        this.title = 'Angular PHP Email Example!';
        this.message = {};
        this.http.get('assets/php/file.json');
    }
    ContactPageComponent.prototype.sendEmail = function (message) {
        this.appService.sendEmail(message).subscribe(function (res) {
            console.log('AppComponent Success', res);
        }, function (error) {
            console.log('AppComponent Error', error);
        });
    };
    ContactPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-contact-page',
            template: __webpack_require__("../../../../../src/app/components/contact-page/contact-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/contact-page/contact-page.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_imessage_service__["a" /* AppService */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
    ], ContactPageComponent);
    return ContactPageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer>\n  <div class=\"footer-bottom\">\n    <small class=\"p-3\">\n      <p class=\"text-center text-muted\">&copy; Copyright {{text}} Michelle Pine. All rights reserved.</p>\n    </small>\n\n  </div>\n</footer>"

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "footer {\n  background: white; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        var date = new Date();
        this.year = date.getFullYear();
        if (this.year == 2018) {
            this.text = "2018";
        }
        else {
            this.text = "2018-" + this.year;
        }
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n  <div class=\"moving\">\n    <div class=\"header-inner d-flex flex-column align-items-center justify-content-center \">\n      <div class=\"strip d-flex align-items-center justify-content-center flex-wrap\">\n        <div class=\"profile-pic d-flex align-items-center\">\n          <img src=\"./assets/images/profile_pic.svg\">\n        </div>\n        <div class=\"header-text text-center text-md-left \">\n          <h2>Michelle Pine</h2>\n          <p>A computer science student and designer, specializing in the visual side of technology.</p>\n        </div>\n       \n\n      </div>\n      <div class=\"d-flex header-link  justify-content-center\">\n\n        <a routerLink=\"/projects\" id=\"down\" class=\"\">\n          <i class=\"fa fa-chevron-down\"></i>\n        </a>\n  \n  \n  \n      </div>\n      \n\n    </div>\n \n\n\n\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/header/header.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@import url(\"https://fonts.googleapis.com/css?family=Roboto:300,400,500,700\");\n@keyframes fadein {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n/* Firefox < 16 */\n/* Safari, Chrome and Opera > 12.1 */\n@-webkit-keyframes fadein {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n/* Internet Explorer */\n/* Opera < 12.1 */\n.header {\n  width: 100vw;\n  max-width: 100vw;\n  height: 100vh;\n  background: transparent;\n  color: #fff;\n  overflow: hidden !important;\n  left: 0; }\n.header .header-inner {\n    width: 100%;\n    height: 100%;\n    font-size: 35px; }\n.header h2 {\n    text-transform: uppercase;\n    font-size: 80%;\n    font-weight: 400;\n    color: #fa8100; }\n.header p {\n    font-size: 40%;\n    max-width: 100%; }\n.header .strip {\n    width: 50vw;\n    min-width: 300px;\n    height: 300px;\n    background: #fff;\n    color: black;\n    padding: 20px;\n    -webkit-box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.2), 0 3px 20px 0 rgba(0, 0, 0, 0.19);\n            box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.2), 0 3px 20px 0 rgba(0, 0, 0, 0.19);\n    -webkit-transition: all 0.3s;\n    transition: all 0.3s;\n    max-width: 700px; }\n.header .profile-pic {\n    width: 215px;\n    height: 215px; }\n.header .profile-pic img {\n    -webkit-box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.2), 0 3px 20px 0 rgba(0, 0, 0, 0.19);\n            box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.2), 0 3px 20px 0 rgba(0, 0, 0, 0.19);\n    width: 100%;\n    border-radius: 50%; }\n.header .header-text {\n    width: 35vw;\n    max-width: 325px;\n    min-width: 275px;\n    padding: 25px; }\n.header .header-link {\n    max-width: 100vw;\n    overflow: hidden;\n    margin-top: 50px;\n    font-size: 50px;\n    z-index: 1029;\n    bottom: 40px;\n    color: #333;\n    text-align: center; }\n.header #down {\n    cursor: pointer;\n    color: #000;\n    -webkit-transition: all 0.3s;\n    transition: all 0.3s;\n    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.15); }\n.header #down:hover {\n    color: #fff; }\n@media screen and (max-width: 1165px) {\n    .header .strip {\n      min-width: 300px;\n      height: auto; }\n    .header .header-text {\n      text-align: center !important; }\n    .header .profile-pic {\n      margin-top: 10px;\n      height: 150px;\n      width: 150px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
        $("#down").click(function () {
            $('html, body').animate({
                scrollTop: $("#main").offset().top
                    - 50
            }, 600);
        });
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/components/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-sm navbar-light fixed-top\" data-toggle=\"affix\">\n\n    <a class=\"navbar-brand\" href=\"#\">Michelle Pine</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapsingNavbar\">\n      ☰\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"collapsingNavbar\">\n\n      <ul class=\"nav navbar-nav ml-auto\">\n\n        <li class=\"nav-item\">\n          <a routerLink=\"/projects\" routerLinkActive=\"active-link\" class=\"nav-link internal\" href=\"#main\">Projects</a>\n        </li>\n        <li class=\"nav-item \">\n          <a routerLink=\"/about\"  routerLinkActive=\"active-link\" class=\"nav-link internal\" href=\"#main\">About</a>\n        </li>\n        <li class=\"nav-item \">\n          <a routerLink=\"/contact\" routerLinkActive=\"active-link\" class=\"nav-link internal\" href=\"#main\">Contact</a>\n        </li>\n        <li class=\"nav-item \">\n            <a href=\"https://github.com/michelle-pine\" class=\"nav-link\"><i class=\"fa fa-github\"></i></a>\n          </li>\n          <li class=\"nav-item \">\n              <a href=\"https://www.linkedin.com/in/michelle-pine\" class=\"nav-link\"><i class=\"fa fa-linkedin\"></i></a>\n            </li>\n\n      </ul>\n    </div>\n\n</nav>"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@import url(\"https://fonts.googleapis.com/css?family=Roboto:300,400,500,700\");\n@keyframes fadein {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n/* Firefox < 16 */\n/* Safari, Chrome and Opera > 12.1 */\n@-webkit-keyframes fadein {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n/* Internet Explorer */\n/* Opera < 12.1 */\n.navbar {\n  border-radius: 0;\n  -webkit-transition: opacity 0.3s ease-out;\n  transition: opacity 0.3s ease-out;\n  background: white;\n  -webkit-box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.2), 0 3px 20px 0 rgba(0, 0, 0, 0.19);\n          box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.2), 0 3px 20px 0 rgba(0, 0, 0, 0.19);\n  max-width: 100vw;\n  position: fixed;\n  left: 0;\n  top: 0;\n  overflow: hidden; }\n.navbar a {\n    color: #fa8100; }\n.navbar a:hover {\n    color: #ffbe18; }\n.navbar:after {\n  content: \"\";\n  width: 100%;\n  min-height: 200px;\n  height: 100%;\n  background: #fa8100;\n  /* Old browsers */\n  /* FF3.6-15 */\n  /* Chrome10-25,Safari5.1-6 */\n  background: -webkit-gradient(linear, left top, right top, from(#fa8100), to(#ffbe18));\n  background: linear-gradient(to right, #fa8100 0%, #ffbe18 100%);\n  /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='$accent1', endColorstr='$accent2', GradientType=1);\n  /* IE6-9 */\n  z-index: -1;\n  opacity: 0;\n  position: absolute;\n  display: inline-block;\n  left: 0;\n  top: 0;\n  -webkit-transition: opacity 0.3s ease-out;\n  transition: opacity 0.3s ease-out; }\n/* fixed to top styles */\n.affix.navbar:after {\n  -webkit-transition: opacity 0.3s ease-out;\n  transition: opacity 0.3s ease-out;\n  opacity: 1; }\n.affix.navbar {\n  -webkit-box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.2), 0 3px 20px 0 rgba(0, 0, 0, 0.19);\n          box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.2), 0 3px 20px 0 rgba(0, 0, 0, 0.19); }\n.affix.navbar .nav-item > a,\n.affix.navbar .navbar-brand {\n  color: #fff; }\n.navbar-brand {\n  text-transform: uppercase;\n  font-size: 90%; }\n.affix.navbar .nav-item > a,\n.affix.navbar .navbar-brand {\n  color: #fff; }\n.active-link {\n  color: #333 !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
        // router.events.subscribe(event => {
        //   if (event instanceof NavigationEnd) {
        //     if (router.url != '/') {
        //       
        //   }
        // });
    }
    NavbarComponent.prototype.ngOnInit = function () {
        $(function () {
            var scroll = $(window).scrollTop(); // how many pixels you've scrolled
            var os = $('.header').offset().top; // pixels to the top of div1
            var ht = $('.header').height();
            // if you've scrolled further than the top of div1 plus it's height
            // change the color. either by adding a class or setting a css property
            if (scroll > ht - 150) {
                $('.navbar').addClass('affix');
            }
            $(window).scroll(function () {
                scroll = $(window).scrollTop(); // how many pixels you've scrolled
                os = $('.header').offset().top; // pixels to the top of div1
                ht = $('.header').height();
                // if you've scrolled further than the top of div1 plus it's height
                // change the color. either by adding a class or setting a css property
                if (scroll > ht - 150) {
                    $('.navbar').addClass('affix');
                }
                else {
                    $('.navbar').removeClass('affix');
                }
            });
            $('.navbar').on('click', '.internal', function () {
                $('html, body').animate({
                    scrollTop: $("#main").offset().top - 50
                }, 600);
            });
            $(document).on('click', 'a', function () {
                $('html, body').animate({
                    scrollTop: $("#main").offset().top - 50
                }, 600);
            });
        });
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/not-found/not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  This page is not found. \n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/not-found/not-found.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/not-found/not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-not-found',
            template: __webpack_require__("../../../../../src/app/components/not-found/not-found.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/not-found/not-found.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/pages/blankets-for-boston/blankets-for-boston.component.html":
/***/ (function(module, exports) {

module.exports = "<h6 class=\"p-2 text-center page-title smaller-page-title\">\n  &nbsp; BLANKETS FOR BOSTON &nbsp;\n</h6>\n\n<div class=\"d-flex flex-column px-3 text-center\">\n  <div class=\"a-contain mx-auto\">\n    A concept website made for the Mayor's Office of New Urban Mechanics, intended to promote a potential winter activation activity\n    for the public.\n    <div class=\"link-item my-3 mb-3 mx-auto\">\n      <a href=\"https://michelle-pine.github.io/BlanketsForBoston/\" target=\"_blank\">\n        <i class=\"fa fa-laptop\"></i>&nbsp; VIEW DEMO</a>\n    </div>\n    <div class=\"link-item my-3 mb-4 mx-auto\">\n      <a href=\"https://github.com/michelle-pine/BlanketsForBoston\" target=\"_blank\">\n        <i class=\"fa fa-github\"></i>&nbsp; VIEW CODE ON GITHUB</a>\n    </div>\n    <div class=\"d-flex\">\n      <a href=\"./assets/images/blankets-view.png\" class=\"d-block img-contain\" target=\"_blank\">\n        <img src=\"./assets/images/blankets-view.png\" class=\"img-responsive\">\n      </a>\n    </div>\n\n\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/pages/blankets-for-boston/blankets-for-boston.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/pages/blankets-for-boston/blankets-for-boston.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlanketsForBostonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BlanketsForBostonComponent = /** @class */ (function () {
    function BlanketsForBostonComponent() {
    }
    BlanketsForBostonComponent.prototype.ngOnInit = function () {
    };
    BlanketsForBostonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-blankets-for-boston',
            template: __webpack_require__("../../../../../src/app/components/pages/blankets-for-boston/blankets-for-boston.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/pages/blankets-for-boston/blankets-for-boston.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BlanketsForBostonComponent);
    return BlanketsForBostonComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/pages/c3po-r3/c3po-r3.component.html":
/***/ (function(module, exports) {

module.exports = "<h6 class=\"p-2 text-center page-title smaller-page-title\">\n  &nbsp; C3PO-R3 &nbsp;\n</h6>\n\n<div class=\"d-flex flex-column px-3 text-center\">\n  <div class=\"a-contain mx-auto\">\n    <p>In 2018, <a href=\"https://c3po-r3.chboston.org/#/about/background/c3po\">The Congenital Cardiac Catheterization Project on Outcomes (C3PO) </a>sought to update their website to their third iteration: C3PO-R3. As a UI designer and front-end developer at Boston Children's Hospital, I was enlisted to aid them in this endeavor. In doing so, I was able to both design and develop the front end of their website entirely from scratch. The external site is still live and available to users and hospital employees all over the world, but you can view a demo of my original design as well!</p>\n   \n    <p>This project was mocked-up in Balsamiq, prototyped in HTML, and developed in Angular 4 + typescript. </p>\n    <p>Below is a demo separated from Boston Children's databases to preserve patient priacy. The login credentials for the demo are 'username' and 'password'. </p>\n    <div class=\"link-item my-3 mb-3 mx-auto\">\n      <a href=\"https://michelle-pine.github.io/c3por3portfolio/\" target=\"_blank\">\n        <i class=\"fa fa-laptop\"></i>&nbsp; VIEW DEMO OF THE ORIGINAL DESIGN </a>\n    </div>\n    <p>On the live site below, the internal site is not accessible to the public. Sorry!</p>\n    <div class=\"link-item my-3 mb-4 mx-auto\">\n      <a href=\"https://c3po-r3.chboston.org/\" target=\"_blank\">\n        <i class=\"fa fa-laptop\"></i>&nbsp; VIEW LIVE SITE</a>\n    </div>\n    <div class=\"d-flex\">\n      <a href=\"./assets/images/c3po-screenshot.png\" class=\"d-block img-contain\" target=\"_blank\">\n        <img src=\"./assets/images/c3po-screenshot.png\" class=\"img-responsive\">\n      </a>\n    </div>\n\n\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/pages/c3po-r3/c3po-r3.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/pages/c3po-r3/c3po-r3.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return C3poR3Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var C3poR3Component = /** @class */ (function () {
    function C3poR3Component() {
    }
    C3poR3Component.prototype.ngOnInit = function () {
    };
    C3poR3Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-c3po-r3',
            template: __webpack_require__("../../../../../src/app/components/pages/c3po-r3/c3po-r3.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/pages/c3po-r3/c3po-r3.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], C3poR3Component);
    return C3poR3Component;
}());



/***/ }),

/***/ "../../../../../src/app/components/pages/cf/cf.component.html":
/***/ (function(module, exports) {

module.exports = "<h6 class=\"p-2 text-center page-title smaller-page-title\">\n  &nbsp; Cardiac Fitness &nbsp;\n</h6>\n\n<div class=\"d-flex flex-column px-3 text-center\">\n  <div class=\"a-contain mx-auto\">\n    <p>In 2018, while I was on co-op at Boston Children's Hospital, I helped develop the front-end of a fitness\n      application intended to help children with heart problems improve their fitness! </p>\n    <p>This project was mocked-up in Balsamiq, prototyped with Invision and HTML, and developed in Angular.</p>\n    <div class=\"link-item my-3 mb-3 mx-auto\">\n      <a href=\"https://michelle-pine.github.io/cf/\" target=\"_blank\">\n        <i class=\"fa fa-laptop\"></i>&nbsp; VIEW DEMO OF THE ORIGINAL DESIGN </a>\n    </div>\n\n    <div class=\"d-flex justify-content-center\">\n      <a href=\"./assets/images/cf-screenshot1.png\" class=\"d-block img-contain\" target=\"_blank\">\n        <img src=\"./assets/images/cf-screenshot1.png\" class=\"img-responsive\">\n      </a>\n      <a href=\"./assets/images/cf-screenshot2.png\" class=\"d-block img-contain\" target=\"_blank\">\n        <img src=\"./assets/images/cf-screenshot2.png\" class=\"img-responsive\">\n      </a>\n    </div>\n\n\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/pages/cf/cf.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/pages/cf/cf.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CfComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CfComponent = /** @class */ (function () {
    function CfComponent() {
    }
    CfComponent.prototype.ngOnInit = function () {
    };
    CfComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-cf',
            template: __webpack_require__("../../../../../src/app/components/pages/cf/cf.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/pages/cf/cf.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CfComponent);
    return CfComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/pages/daylight-theme/daylight-theme.component.html":
/***/ (function(module, exports) {

module.exports = "<h6 class=\"p-2 text-center page-title smaller-page-title\">\n  &nbsp; DAYLIGHT THEME &nbsp;\n</h6>\n\n<div class=\"d-flex flex-column px-3 text-center\">\n  <div class=\"a-contain mx-auto\">\n    COMING SOON! My first responsive Tumblr theme, featuring the newly-released Bootstrap 4, FontAwesome icons, (of\n    course) gradients, and a whole new layout style! A revamp of Starborne that is far less minimalist than the\n    original.\n    <div class=\"link-item my-4 mb-3 mx-auto\">\n      <a href=\"https://daylight-thm.tumblr.com/\" target=\"_blank\"><i class=\"fa fa-tumblr\"></i>&nbsp;\n        VIEW PREVIEW ON TUMBLR</a>\n    </div>\n    <div class=\"link-item my-4 mb-3 mx-auto\">\n      <a href=\"https://github.com/michelle-pine/daylight-theme\" target=\"_blank\"><i class=\"fa fa-github\"></i>&nbsp;\n        VIEW CODE ON GITHUB</a>\n    </div>\n\n    <div class=\"d-flex flex-wrap justify-content-center flex-md-nowrap align-items-center\">\n      <a href=\"./assets/images/daylight-view.png\" class=\"d-block img-contain mr-0 mr-md-5\" target=\"_blank\">\n        <img src=\"./assets/images/daylight-view.png\" alt=\"The desktop view of the Daylight tumblr theme\" class=\"img-responsive\">\n      </a>\n      <a href=\"./assets/images/daylight-mobile.png\" class=\"d-block img-contain mt-5 mt-md-0\" target=\"_blank\">\n        <img src=\"./assets/images/daylight-mobile.png\" alt=\"The mobile view of the Daylight tumblr theme\" class=\"img-responsive\">\n      </a>\n    </div>\n\n\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/pages/daylight-theme/daylight-theme.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/pages/daylight-theme/daylight-theme.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DaylightThemeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DaylightThemeComponent = /** @class */ (function () {
    function DaylightThemeComponent() {
    }
    DaylightThemeComponent.prototype.ngOnInit = function () {
    };
    DaylightThemeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-daylight-theme',
            template: __webpack_require__("../../../../../src/app/components/pages/daylight-theme/daylight-theme.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/pages/daylight-theme/daylight-theme.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DaylightThemeComponent);
    return DaylightThemeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/pages/easy-animator/easy-animator.component.html":
/***/ (function(module, exports) {

module.exports = "<h6 class=\"p-2 text-center page-title smaller-page-title\">\n    &nbsp; THE EASY ANIMATOR &nbsp;\n  </h6>\n  \n  <div class=\"d-flex flex-column px-3 text-center\">\n    <div class=\"a-contain mx-auto justify-content-center\">\n      A complex animator software which takes textual instructions as an input and outputs a working visual animation. Coded in Java with the Swing Library, this software can produce a textual description of the animation, an interactive animation, or an svg animation per the user's preference. This project was completed in collaboration with Abigail Hodge.\n      <div class=\"d-flex p-3 my-3  easy-animator \">\n        <a href=\"./assets/images/easy-animator.svg\" class=\"m-2 mx-auto\" target=\"_blank\">\n          <img src=\"./assets/images/easy-animator.svg\">\n        </a>\n        \n        \n      </div>\n      <caption class=\"caption d-block text-center mx-auto\">An svg animation produced using the Easy Animator</caption>\n      \n  \n      <app-locked-project></app-locked-project>\n    </div>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/components/pages/easy-animator/easy-animator.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".easy-animator a {\n  width: 50%;\n  min-width: 300px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/pages/easy-animator/easy-animator.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EasyAnimatorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EasyAnimatorComponent = /** @class */ (function () {
    function EasyAnimatorComponent() {
    }
    EasyAnimatorComponent.prototype.ngOnInit = function () {
    };
    EasyAnimatorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-easy-animator',
            template: __webpack_require__("../../../../../src/app/components/pages/easy-animator/easy-animator.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/pages/easy-animator/easy-animator.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], EasyAnimatorComponent);
    return EasyAnimatorComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/pages/emotiquote/emotiquote.component.html":
/***/ (function(module, exports) {

module.exports = "<h6 class=\"p-2 text-center page-title smaller-page-title\">\n  &nbsp; EMOTIQUOTE &nbsp;\n</h6>\n<div class=\"d-flex flex-column px-3 text-center\">\n  <div class=\"a-contain mx-auto\">\n    <div class=\"text  mx-auto\">\n      A ReactJS application for analyzing the emotions of famous (and not-so-famous) people, books, movies, and TV shows. Utilizes\n      the extensive data contained in the Mediawiki API and takes advantage of the Indico API's emotional machine learning.\n      Made in collaboration with Abigail Hodge, Samantha Price, and Sharon He.\n    </div>\n    <h2 class=\"my-4 link-item mx-auto\">\n      <a href=\"https://abigailhodge.github.io/emotiquote/\" target=\"_blank\">\n        <i class=\"fa fa-laptop\"></i>&nbsp;TRY THE APP</a>\n    </h2> \n    <h2 class=\"my-4 link-item mx-auto\">\n      <a href=\"https://github.com/michelle-pine/emotiquote\" target=\"_blank\">\n        <i class=\"fa fa-github\"></i>&nbsp;VIEW IT ON GITHUB</a>\n    </h2>\n    <div class=\"img-wrapper\">\n      <img class=\"my-4\" src=\"./assets/images/hackbeanpot.jpg\">\n\n    </div>\n    <caption class=\"caption mt-2 mb-4 d-block text-center\">Sam Price, Abigail Hodge, myself, and Sharon He accepting their awards for <i>Emotiquote</i> at HackBeanpot 2018.</caption>\n    <h2 class=\"my-4 link-item mx-auto\">CREATED FOR\n      <a href=\"https://hackbeanpot.com/\" target=\"_blank\">HACKBEANPOT</a> 2018! </h2>\n\n      <div class=\"card\">\n        <ul class=\"list-group list-group-flush award-group\">\n          <li class=\"list-group-item\">\n            <i class=\"fa fa-trophy\"></i>&nbsp;\n            Winner of Best UI/UX Design\n          </li>\n          <li class=\"list-group-item \">\n              <i class=\"fa fa-trophy\"></i>&nbsp;\n              Winner of Best Use of the Indico API\n            </li>\n            <li class=\"list-group-item\">\n                <i class=\"fa fa-trophy\"></i>&nbsp;\n               Among the Top 10 Projects\n              </li>\n              <li class=\"list-group-item\">\n                  <i class=\"fa fa-newspaper-o\"></i>&nbsp;\n                 Featured in the <a href=\"https://www.bizjournals.com/boston/news/2018/02/13/hackbeanpot-hackathon-winners-focus-on-emotion-ai.html\" >Boston Business Journal</a>\n                </li>\n        </ul>\n      </div>\n\n\n\n  </div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/pages/emotiquote/emotiquote.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@import url(\"https://fonts.googleapis.com/css?family=Roboto:300,400,500,700\");\n@keyframes fadein {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n/* Firefox < 16 */\n/* Safari, Chrome and Opera > 12.1 */\n@-webkit-keyframes fadein {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n/* Internet Explorer */\n/* Opera < 12.1 */\n.img-wrapper {\n  width: 100%; }\n.img-wrapper img {\n    width: 100%; }\n.award-group {\n  font-size: 20px; }\n.award-group i {\n    color: #ffbe18;\n    font-size: 25px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/pages/emotiquote/emotiquote.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmotiquoteComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EmotiquoteComponent = /** @class */ (function () {
    function EmotiquoteComponent() {
    }
    EmotiquoteComponent.prototype.ngOnInit = function () {
    };
    EmotiquoteComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-emotiquote',
            template: __webpack_require__("../../../../../src/app/components/pages/emotiquote/emotiquote.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/pages/emotiquote/emotiquote.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], EmotiquoteComponent);
    return EmotiquoteComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/pages/fearless-flight/fearless-flight.component.html":
/***/ (function(module, exports) {

module.exports = "<h6 class=\"p-2 text-center page-title mb-4 smaller-page-title\">\n        &nbsp; FEARLESS FLIGHT &nbsp;\n   \n      </h6>\n      \n<div class=\"d-flex flex-wrap\">\n<div id=\"flight-contain\" class=\"mx-auto\"></div>\n<div class=\"info mx-auto\">\n\n    <img class=\"mx-auto my-3\" src=\"./assets/images/fearless-flight/image1.png\">\n    <img class=\"mx-auto\" src=\"./assets/images/fearless-flight/image2.gif\">\n    <img class=\"mx-auto my-3\" src=\"./assets/images/fearless-flight/image3.png\">\n  \n    <img class=\"mx-auto my-3\" src=\"./assets/images/fearless-flight/image5.png\">\n\n</div>\n\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/pages/fearless-flight/fearless-flight.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@import url(\"https://fonts.googleapis.com/css?family=Roboto:300,400,500,700\");\n@keyframes fadein {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n/* Firefox < 16 */\n/* Safari, Chrome and Opera > 12.1 */\n@-webkit-keyframes fadein {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n/* Internet Explorer */\n/* Opera < 12.1 */\n.info {\n  width: 50vw;\n  text-align: center; }\n.info img {\n  width: 80%; }\n@media screen and (max-width: 1260px) {\n  .info {\n    width: 80vw; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/pages/fearless-flight/fearless-flight.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FearlessFlightComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FearlessFlightComponent = /** @class */ (function () {
    function FearlessFlightComponent() {
    }
    FearlessFlightComponent.prototype.ngOnInit = function () {
    };
    FearlessFlightComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-fearless-flight',
            template: __webpack_require__("../../../../../src/app/components/pages/fearless-flight/fearless-flight.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/pages/fearless-flight/fearless-flight.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FearlessFlightComponent);
    return FearlessFlightComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/pages/forbidden-island/forbidden-island.component.html":
/***/ (function(module, exports) {

module.exports = "<h6 class=\"p-2 text-center page-title smaller-page-title\">\n    &nbsp; THE FORBIDDEN ISLAND &nbsp;\n  </h6>\n  \n  <div class=\"d-flex flex-column px-3 text-center\">\n    <div class=\"a-contain mx-auto\">\n      Escape the island before it's too late! This arcade game, coded in Java, tests the player's survival skills in a race against time as the waters rise. \n      <div class=\"d-flex p-3 my-3 proj-images\">\n        <a href=\"./assets/images/for1.png\" class=\"m-2\" target=\"_blank\">\n          <img src=\"./assets/images/for1.png\">\n        </a>\n        <a href=\"./assets/images/for2.png\" class=\"m-2\" target=\"_blank\">\n          <img src=\"./assets/images/for2.png\">\n        </a>\n        <a href=\"./assets/images/for1.png\" class=\"m-2\" target=\"_blank\">\n          <img src=\"./assets/images/for3.png\">\n        </a>\n      </div>\n      \n  \n      <app-locked-project></app-locked-project>\n    </div>\n  </div>\n"

/***/ }),

/***/ "../../../../../src/app/components/pages/forbidden-island/forbidden-island.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/pages/forbidden-island/forbidden-island.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForbiddenIslandComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ForbiddenIslandComponent = /** @class */ (function () {
    function ForbiddenIslandComponent() {
    }
    ForbiddenIslandComponent.prototype.ngOnInit = function () {
    };
    ForbiddenIslandComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-forbidden-island',
            template: __webpack_require__("../../../../../src/app/components/pages/forbidden-island/forbidden-island.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/pages/forbidden-island/forbidden-island.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ForbiddenIslandComponent);
    return ForbiddenIslandComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/pages/how/how.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  how works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/pages/how/how.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/pages/how/how.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HowComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HowComponent = /** @class */ (function () {
    function HowComponent(router) {
        this.router = router;
    }
    HowComponent.prototype.ngOnInit = function () {
        this.router.navigate(['/projects']);
    };
    HowComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-how',
            template: __webpack_require__("../../../../../src/app/components/pages/how/how.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/pages/how/how.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], HowComponent);
    return HowComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/pages/locked-project/locked-project.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"link-item my-3 mx-auto white-text\">\n  <i class=\"fa fa-lock\"></i>&nbsp;THIS PROJECT IS LOCKED\n</div>\n<div class=\"text my-3 mx-auto\">\nTo prevent plagiarism, the code for this project is available for viewing by <a routerLink=\"/contact\">request</a> only. \n</div>"

/***/ }),

/***/ "../../../../../src/app/components/pages/locked-project/locked-project.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".white-text {\n  color: white; }\n  .white-text i {\n    color: black; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/pages/locked-project/locked-project.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LockedProjectComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LockedProjectComponent = /** @class */ (function () {
    function LockedProjectComponent() {
    }
    LockedProjectComponent.prototype.ngOnInit = function () {
    };
    LockedProjectComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-locked-project',
            template: __webpack_require__("../../../../../src/app/components/pages/locked-project/locked-project.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/pages/locked-project/locked-project.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LockedProjectComponent);
    return LockedProjectComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/pages/maze-game/maze-game.component.html":
/***/ (function(module, exports) {

module.exports = "<h6 class=\"p-2 text-center page-title smaller-page-title\">\n  &nbsp; MAZE GAME &nbsp;\n</h6>\n\n<div class=\"d-flex flex-column px-3 text-center\">\n  <div class=\"a-contain mx-auto\">\n    A maze generator/solver game that utilizes Kruskal's Algorithm, breadth-first search, and depth-first search. Developed\n    in Java.\n    <div class=\"d-flex p-3 my-3 proj-images\">\n      <a href=\"./assets/images/for1.png\" class=\"m-2\" target=\"_blank\">\n        <img src=\"./assets/images/maze1.png\">\n      </a>\n      <a href=\"./assets/images/for2.png\" class=\"m-2\" target=\"_blank\">\n        <img src=\"./assets/images/maze2.png\">\n      </a>\n      <a href=\"./assets/images/for1.png\" class=\"m-2\" target=\"_blank\">\n        <img src=\"./assets/images/maze3.png\">\n      </a>\n    </div>\n    \n\n    <app-locked-project></app-locked-project>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/pages/maze-game/maze-game.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/pages/maze-game/maze-game.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MazeGameComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MazeGameComponent = /** @class */ (function () {
    function MazeGameComponent() {
    }
    MazeGameComponent.prototype.ngOnInit = function () {
    };
    MazeGameComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-maze-game',
            template: __webpack_require__("../../../../../src/app/components/pages/maze-game/maze-game.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/pages/maze-game/maze-game.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MazeGameComponent);
    return MazeGameComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/pages/phases-theme/phases-theme.component.html":
/***/ (function(module, exports) {

module.exports = "<h6 class=\"p-2 text-center page-title smaller-page-title\">\n    &nbsp; PHASES THEME &nbsp;\n  </h6>\n  \n  <div class=\"d-flex flex-column px-3 text-center\">\n    <div class=\"a-contain mx-auto\">\n      A colorful, interactive theme for Tumblr bloggers of all kinds! Developed in HTML and CSS. \n      <div class=\"link-item my-3 mb-3 mx-auto\">\n          <a href=\"https://pinephasestheme.tumblr.com/\" target=\"_blank\"><i class=\"fa fa-tumblr\"></i>&nbsp;\n       VIEW DEMO ON TUMBLR</a>\n      </div>\n      <div class=\"link-item my-3 mb-4 mx-auto\">\n          <a href=\"https://github.com/michelle-pine/PhasesThemeForTumblr\" target=\"_blank\"><i class=\"fa fa-github\"></i>&nbsp;\n       VIEW CODE ON GITHUB</a>\n      </div>\n      <div class=\"d-flex\">\n        <a href=\"./assets/images/phases-view.png\" class=\"d-block img-contain\" target=\"_blank\">\n          <img src=\"./assets/images/phases-view.png\" class=\"img-responsive\">\n        </a>\n      </div>\n  \n\n    </div>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/components/pages/phases-theme/phases-theme.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/pages/phases-theme/phases-theme.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhasesThemeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PhasesThemeComponent = /** @class */ (function () {
    function PhasesThemeComponent() {
    }
    PhasesThemeComponent.prototype.ngOnInit = function () {
    };
    PhasesThemeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-phases-theme',
            template: __webpack_require__("../../../../../src/app/components/pages/phases-theme/phases-theme.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/pages/phases-theme/phases-theme.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PhasesThemeComponent);
    return PhasesThemeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/pages/pj-graphics/pj-graphics.component.html":
/***/ (function(module, exports) {

module.exports = "<h6 class=\"p-2 text-center page-title smaller-page-title\">\n    &nbsp; PJ LIBRARY GRAPHICS &nbsp;\n  </h6>\n<div class=\"card-columns p-2 graphics\">\n  <ng-container *ngFor=\"let img of images\">\n    <div class=\"card graphic\">\n      <a href=\"{{img}}\" target=\"_blank\">\n      <img class=\"card-img-top\" src={{img}} alt=\"a pj graphic\"></a>\n    </div>\n  </ng-container>\n\n\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/pages/pj-graphics/pj-graphics.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@import url(\"https://fonts.googleapis.com/css?family=Roboto:300,400,500,700\");\n@keyframes fadein {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n/* Firefox < 16 */\n/* Safari, Chrome and Opera > 12.1 */\n@-webkit-keyframes fadein {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n/* Internet Explorer */\n/* Opera < 12.1 */\n.graphics a {\n  cursor: -webkit-zoom-in;\n  cursor: zoom-in; }\n.graphics .graphic {\n  -webkit-box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.1), 0 3px 5px 0 rgba(0, 0, 0, 0.1);\n          box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.1), 0 3px 5px 0 rgba(0, 0, 0, 0.1);\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s; }\n.graphics .graphic:hover {\n  -webkit-box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.2), 0 3px 20px 0 rgba(0, 0, 0, 0.19);\n          box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.2), 0 3px 20px 0 rgba(0, 0, 0, 0.19); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/pages/pj-graphics/pj-graphics.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PjGraphicsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PjGraphicsComponent = /** @class */ (function () {
    function PjGraphicsComponent() {
        this.images = [];
        var direct = "./assets/images/pj-graphics/";
        for (var i = 1; i <= 26; i++) {
            this.images.push(direct + i + ".png");
        }
    }
    PjGraphicsComponent.prototype.ngOnInit = function () {
    };
    PjGraphicsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-pj-graphics',
            template: __webpack_require__("../../../../../src/app/components/pages/pj-graphics/pj-graphics.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/pages/pj-graphics/pj-graphics.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PjGraphicsComponent);
    return PjGraphicsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/pages/pj-videos/pj-videos.component.html":
/***/ (function(module, exports) {

module.exports = "<h6 class=\"p-2 text-center page-title mb-0 smaller-page-title\">\n  &nbsp; PJ VIDEOS &nbsp;\n\n</h6>\n<div class=\"d-flex p-5 flex-column\">\n\n  <div class=\"text text-center mb-4\">\n    These professional-quqality videos were made using Adobe Premiere Pro and Adobe Photoshop for the Harold Grinspoon Foundation,\n    a non-profit which promotes Jewish cultural engagement. The videos were displayed on social media to market their PJ\n    Library program to parents and children. All image and music rights belong to the foundation.\n  </div>\n\n  <ng-container *ngFor=\"let video of pjvideos.videos\">\n  <div class=\"text text-center mb-4 video-title\">\n    {{video.caption}}\n  </div>\n  <div class=\"embed-responsive embed-responsive-16by9 mx-auto mb-4\">\n    <video class=\"\" controls=\"\" name=\"media\" poster={{video.poster}}>\n      <source src={{video.video}} type=\"video/mp4\">\n    </video>\n  </div>\n</ng-container>\n\n\n\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/pages/pj-videos/pj-videos.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@import url(\"https://fonts.googleapis.com/css?family=Roboto:300,400,500,700\");\n@keyframes fadein {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n/* Firefox < 16 */\n/* Safari, Chrome and Opera > 12.1 */\n@-webkit-keyframes fadein {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n/* Internet Explorer */\n/* Opera < 12.1 */\n.video-title {\n  font-weight: 400;\n  color: #fa8100;\n  font-size: 20px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/pages/pj-videos/pj-videos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PjVideosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_pjvideo_service__ = __webpack_require__("../../../../../src/app/services/pjvideo.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PjVideosComponent = /** @class */ (function () {
    function PjVideosComponent(pjvideos) {
        this.pjvideos = pjvideos;
    }
    PjVideosComponent.prototype.ngOnInit = function () {
    };
    PjVideosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-pj-videos',
            template: __webpack_require__("../../../../../src/app/components/pages/pj-videos/pj-videos.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/pages/pj-videos/pj-videos.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_pjvideo_service__["a" /* PjvideoService */]])
    ], PjVideosComponent);
    return PjVideosComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/pages/ribbons-theme/ribbons-theme.component.html":
/***/ (function(module, exports) {

module.exports = "<h6 class=\"p-2 text-center page-title smaller-page-title\">\n    &nbsp; RIBBONS THEME &nbsp;\n  </h6>\n  \n  <div class=\"d-flex flex-column px-3 text-center\">\n    <div class=\"a-contain mx-auto\">\n      A striking Tumblr theme that practically glows. Use colors and dynamic hover effects to beautify your blog. Developed in HTML and CSS. \n      <div class=\"link-item my-3 mb-3 mx-auto\">\n          <a href=\"https://pineribbonstheme.tumblr.com/\" target=\"_blank\"><i class=\"fa fa-tumblr\"></i>&nbsp;\n       VIEW DEMO ON TUMBLR</a>\n      </div>\n      <div class=\"link-item my-3 mb-4 mx-auto\">\n          <a href=\"https://github.com/michelle-pine/RibbonsThemeForTumblr\" target=\"_blank\"><i class=\"fa fa-github\"></i>&nbsp;\n       VIEW CODE ON GITHUB</a>\n      </div>\n      <div class=\"d-flex\">\n        <a href=\"./assets/images/ribbons-view.png\" class=\"d-block img-contain\" target=\"_blank\">\n          <img src=\"./assets/images/ribbons-view.png\" class=\"img-responsive\">\n        </a>\n      </div>\n  \n\n    </div>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/components/pages/ribbons-theme/ribbons-theme.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/pages/ribbons-theme/ribbons-theme.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RibbonsThemeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RibbonsThemeComponent = /** @class */ (function () {
    function RibbonsThemeComponent() {
    }
    RibbonsThemeComponent.prototype.ngOnInit = function () {
    };
    RibbonsThemeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-ribbons-theme',
            template: __webpack_require__("../../../../../src/app/components/pages/ribbons-theme/ribbons-theme.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/pages/ribbons-theme/ribbons-theme.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], RibbonsThemeComponent);
    return RibbonsThemeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/pages/starborne-theme/starborne-theme.component.html":
/***/ (function(module, exports) {

module.exports = "<h6 class=\"p-2 text-center page-title smaller-page-title\">\n    &nbsp; STARBORNE THEME &nbsp;\n  </h6>\n  \n  <div class=\"d-flex flex-column px-3 text-center\">\n    <div class=\"a-contain mx-auto\">\n      Clean up your blog with this minimalistic but still colorful Tumblr theme. Developed in HTML and CSS. \n      <div class=\"link-item my-3 mb-3 mx-auto\">\n          <a href=\"https://pinestarbornetheme.tumblr.com/\" target=\"_blank\"><i class=\"fa fa-tumblr\"></i>&nbsp;\n       VIEW DEMO ON TUMBLR</a>\n      </div>\n      <div class=\"link-item my-3 mb-4 mx-auto\">\n          <a href=\"https://github.com/michelle-pine/StarborneThemeForTumblr\" target=\"_blank\"><i class=\"fa fa-github\"></i>&nbsp;\n       VIEW CODE ON GITHUB</a>\n      </div>\n      <div class=\"d-flex\">\n        <a href=\"./assets/images/starborne-view.png\" class=\"d-block img-contain\" target=\"_blank\">\n          <img src=\"./assets/images/starborne-view.png\" class=\"img-responsive\">\n        </a>\n      </div>\n  \n\n    </div>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/components/pages/starborne-theme/starborne-theme.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/pages/starborne-theme/starborne-theme.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StarborneThemeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StarborneThemeComponent = /** @class */ (function () {
    function StarborneThemeComponent() {
    }
    StarborneThemeComponent.prototype.ngOnInit = function () {
    };
    StarborneThemeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-starborne-theme',
            template: __webpack_require__("../../../../../src/app/components/pages/starborne-theme/starborne-theme.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/pages/starborne-theme/starborne-theme.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], StarborneThemeComponent);
    return StarborneThemeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/pages/tumblr-graphics/tumblr-graphics.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n Redirecting...\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/pages/tumblr-graphics/tumblr-graphics.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/pages/tumblr-graphics/tumblr-graphics.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TumblrGraphicsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TumblrGraphicsComponent = /** @class */ (function () {
    function TumblrGraphicsComponent(router) {
        this.router = router;
    }
    TumblrGraphicsComponent.prototype.ngOnInit = function () {
        window.open('https://chelle-designs.tumblr.com/', "_blank");
        this.router.navigate(['/projects']);
    };
    TumblrGraphicsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-tumblr-graphics',
            template: __webpack_require__("../../../../../src/app/components/pages/tumblr-graphics/tumblr-graphics.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/pages/tumblr-graphics/tumblr-graphics.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], TumblrGraphicsComponent);
    return TumblrGraphicsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/pages/windy-weather/windy-weather.component.html":
/***/ (function(module, exports) {

module.exports = "<h6 class=\"p-2 text-center page-title mb-3 smaller-page-title\">\n    &nbsp; WINDY WEATHER &nbsp;\n\n</h6>\n\n<div class=\"d-flex flex-column\">\n    <div class=\"info mx-auto p-4\">\n        An animated wind speed visualizer, created using the APIXU Weather API, Adobe Illustrator, and the p5 Javascript library!\n    </div>\n    <div id=\"windy-contain\" class=\"mx-auto\"></div>\n</div> "

/***/ }),

/***/ "../../../../../src/app/components/pages/windy-weather/windy-weather.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@import url(\"https://fonts.googleapis.com/css?family=Roboto:300,400,500,700\");\n@keyframes fadein {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n/* Firefox < 16 */\n/* Safari, Chrome and Opera > 12.1 */\n@-webkit-keyframes fadein {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n/* Internet Explorer */\n/* Opera < 12.1 */\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/pages/windy-weather/windy-weather.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WindyWeatherComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WindyWeatherComponent = /** @class */ (function () {
    function WindyWeatherComponent() {
    }
    WindyWeatherComponent.prototype.ngOnInit = function () {
    };
    WindyWeatherComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-windy-weather',
            template: __webpack_require__("../../../../../src/app/components/pages/windy-weather/windy-weather.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/pages/windy-weather/windy-weather.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], WindyWeatherComponent);
    return WindyWeatherComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/pages/wonder-theme/wonder-theme.component.html":
/***/ (function(module, exports) {

module.exports = "<h6 class=\"p-2 text-center page-title smaller-page-title\">\n    &nbsp; WONDER THEME &nbsp;\n  </h6>\n  \n  <div class=\"d-flex flex-column px-3 text-center\">\n    <div class=\"a-contain mx-auto\">\n      An extremely colorful, responsive Tumblr theme featuring bright gradients and tons of hover effects. Developed in HTML and CSS. The code alone has over 3,000 hits on Pastebin, and 1,400 notes on Tumblr. \n      <div class=\"link-item my-3 mb-3 mx-auto\">\n          <a href=\"https://pinewondertheme.tumblr.com/\" target=\"_blank\"><i class=\"fa fa-tumblr\"></i>&nbsp;\n       VIEW DEMO ON TUMBLR</a>\n      </div>\n      <div class=\"link-item my-3 mb-4 mx-auto\">\n          <a href=\"https://github.com/michelle-pine/WonderThemeForTumblr\" target=\"_blank\"><i class=\"fa fa-github\"></i>&nbsp;\n       VIEW CODE ON GITHUB</a>\n      </div>\n      <div class=\"d-flex\">\n        <a href=\"./assets/images/wonder-view.png\" class=\"d-block img-contain\" target=\"_blank\">\n          <img src=\"./assets/images/wonder-view.png\" class=\"img-responsive\">\n        </a>\n      </div>\n  \n\n    </div>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/components/pages/wonder-theme/wonder-theme.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/pages/wonder-theme/wonder-theme.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WonderThemeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WonderThemeComponent = /** @class */ (function () {
    function WonderThemeComponent() {
    }
    WonderThemeComponent.prototype.ngOnInit = function () {
    };
    WonderThemeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-wonder-theme',
            template: __webpack_require__("../../../../../src/app/components/pages/wonder-theme/wonder-theme.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/pages/wonder-theme/wonder-theme.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], WonderThemeComponent);
    return WonderThemeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/projects-page/projects-page.component.html":
/***/ (function(module, exports) {

module.exports = "<app-projects></app-projects>"

/***/ }),

/***/ "../../../../../src/app/components/projects-page/projects-page.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@import url(\"https://fonts.googleapis.com/css?family=Roboto:300,400,500,700\");\n@keyframes fadein {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n/* Firefox < 16 */\n/* Safari, Chrome and Opera > 12.1 */\n@-webkit-keyframes fadein {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n/* Internet Explorer */\n/* Opera < 12.1 */\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/projects-page/projects-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProjectsPageComponent = /** @class */ (function () {
    function ProjectsPageComponent() {
    }
    ProjectsPageComponent.prototype.ngOnInit = function () {
    };
    ProjectsPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-projects-page',
            template: __webpack_require__("../../../../../src/app/components/projects-page/projects-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/projects-page/projects-page.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProjectsPageComponent);
    return ProjectsPageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/projects/projects.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"p-2 text-center page-title smaller-page-title mb-5\">\n  <i class=\"fa fa-crop\"></i>&nbsp;PROJECTS&nbsp;\n  <i class=\"fa fa-code\"></i>\n</h2>\n<div class=\"project-container card-deck m-2 m-md-3 m-lg-4 \">\n\n  <a *ngFor=\"let project of projects\" [routerLink]=\"['/projects', project.nickname]\" class=\"m-2\" id={{project.nickname}}>\n    <div class=\"project-card card mx-auto\">\n      <div class=\"card-block d-flex\">\n        <div class=\"img-wrapper align-self-center cover\">\n          <img src={{project.cover}} alt={{project.name}}>\n        </div>\n        <div class=\"caption p-0 card-block\">\n          <div class=\"card-text p-3\">\n            <div class=\"card-title d-flex align-items-center\">\n              <div class=\"d-none d-sm-inline mr-sm-1\">\n\n                <div class=\"proj-icon\"><i class=\"fa\" [ngClass]=\"[project.type]\"></i></div>\n                <div style=\"display:inline\" *ngIf=\"project.medal\">\n                    <div class=\"proj-icon trophy\"><i class=\"fa fa-trophy\"></i></div>\n                </div>\n              </div>\n              {{project.name}}\n            </div>\n            <p class=\"desc\">{{project.description}}</p>\n          </div>\n        </div>\n      </div>\n\n    </div>\n\n  </a>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/projects/projects.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@import url(\"https://fonts.googleapis.com/css?family=Roboto:300,400,500,700\");\n@keyframes fadein {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n/* Firefox < 16 */\n/* Safari, Chrome and Opera > 12.1 */\n@-webkit-keyframes fadein {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n/* Internet Explorer */\n/* Opera < 12.1 */\n.cover {\n  background-position: 50%;\n  background-size: 20vw 20vw;\n  min-height: 150px;\n  height: 100%;\n  width: 40%;\n  min-width: 150px;\n  -webkit-box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.1), 0 3px 5px 0 rgba(0, 0, 0, 0.1);\n          box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.1), 0 3px 5px 0 rgba(0, 0, 0, 0.1); }\n.card .cover {\n  -webkit-box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.2), 0 3px 20px 0 rgba(0, 0, 0, 0.19);\n          box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.2), 0 3px 20px 0 rgba(0, 0, 0, 0.19); }\n.caption {\n  width: 100%;\n  height: 100%; }\n.card-block {\n  max-height: 100%; }\n.cover img {\n  width: 100%;\n  height: 100%; }\n.card-text {\n  color: #333;\n  width: 100%; }\n.card-title {\n  font-size: 20px;\n  color: #fa8100;\n  text-transform: uppercase;\n  font-weight: 400; }\n.card-deck a {\n  width: 48%; }\n.project-card {\n  width: 100%;\n  max-height: 250px;\n  overflow: hidden;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n  color: white;\n  border: 0;\n  -webkit-box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.1), 0 3px 5px 0 rgba(0, 0, 0, 0.1);\n          box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.1), 0 3px 5px 0 rgba(0, 0, 0, 0.1);\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s; }\n.project-card:hover {\n  -webkit-box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.2), 0 3px 20px 0 rgba(0, 0, 0, 0.19);\n          box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.2), 0 3px 20px 0 rgba(0, 0, 0, 0.19); }\n@media screen and (max-width: 1020px) {\n  .card-deck a {\n    width: 100%; }\n  .card-title {\n    font-size: 17px; }\n  .card {\n    min-height: 150px; } }\n@media screen and (max-width: 475px) {\n  .project-card {\n    -webkit-box-shadow: none !important;\n            box-shadow: none !important; } }\n@media screen and (max-width: 375px) {\n  .desc {\n    font-size: 12px; } }\n@media screen and (max-width: 360px) {\n  .desc {\n    display: none; }\n  .card {\n    height: auto; } }\n.card-title i {\n  display: inline; }\n.proj-icon {\n  border-radius: 50%;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  padding: 5px;\n  font-size: 14px;\n  color: #fa8100;\n  border: 2px solid #fa8100;\n  margin-right: 3px; }\n.proj-icon.trophy {\n  color: #ffbe18;\n  border-color: #ffbe18; }\n@media screen and (min-width: 990px) and (max-width: 1300px) {\n  .caption {\n    font-size: 13px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/projects/projects.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service_service__ = __webpack_require__("../../../../../src/app/services/data-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent(dataService) {
        this.dataService = dataService;
        this.projects = dataService.projects;
    }
    Object.defineProperty(ProjectsComponent.prototype, "data", {
        get: function () {
            return this.dataService.projects;
        },
        enumerable: true,
        configurable: true
    });
    ProjectsComponent.prototype.ngOnInit = function () {
    };
    ProjectsComponent.prototype.makeDate = function (month, date, year) {
        return new Date(year, month, date);
    };
    ProjectsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-projects',
            template: __webpack_require__("../../../../../src/app/components/projects/projects.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/projects/projects.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_data_service_service__["a" /* DataService */]])
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/single-project/single-project.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"router.url == '/projects/how'\">\n    <app-how></app-how>\n</div>\n\n<div *ngIf=\"router.url == '/projects/emotiquote'\">\n    <app-emotiquote></app-emotiquote>\n</div>\n\n\n<div *ngIf=\"router.url == '/projects/easy-animator'\">\n    <app-easy-animator></app-easy-animator>\n</div>\n\n<div *ngIf=\"router.url == '/projects/ribbons'\">\n    <app-ribbons-theme></app-ribbons-theme>\n</div>\n\n\n<div *ngIf=\"router.url == '/projects/maze-game'\">\n    <app-maze-game></app-maze-game>\n</div>\n\n\n<div *ngIf=\"router.url == '/projects/forbidden-island'\">\n    <app-forbidden-island></app-forbidden-island>\n</div>\n\n<div *ngIf=\"router.url == '/projects/fearless_flight'\">\n    <app-fearless-flight></app-fearless-flight>\n</div>\n\n\n<div *ngIf=\"router.url == '/projects/pj_videos'\">\n    <app-pj-videos></app-pj-videos>\n</div>\n\n<div *ngIf=\"router.url == '/projects/wonder'\">\n    <app-wonder-theme></app-wonder-theme>\n</div>\n\n\n<div *ngIf=\"router.url == '/projects/windy_weather'\">\n    <app-windy-weather></app-windy-weather>\n</div>\n\n<div *ngIf=\"router.url == '/projects/starborne'\">\n    <app-starborne-theme></app-starborne-theme>\n</div>\n\n<div *ngIf=\"router.url == '/projects/phases'\">\n    <app-phases-theme></app-phases-theme>\n</div>\n\n<div *ngIf=\"router.url == '/projects/pj_graphics'\">\n    <app-pj-graphics></app-pj-graphics>\n</div>\n\n<div *ngIf=\"router.url == '/projects/tumblr_graphics'\">\n    <app-tumblr-graphics></app-tumblr-graphics>\n</div>\n\n\n<div *ngIf=\"router.url == '/projects/blankets-for-boston'\">\n    <app-blankets-for-boston></app-blankets-for-boston>\n</div>\n\n<div *ngIf=\"router.url == '/projects/daylight-theme'\">\n    <app-daylight-theme></app-daylight-theme>\n</div>\n\n<div *ngIf=\"router.url == '/projects/c3po'\">\n    <app-c3po-r3></app-c3po-r3>\n</div>\n\n<div *ngIf=\"router.url == '/projects/cf'\">\n    <app-cf></app-cf>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/single-project/single-project.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/single-project/single-project.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SingleProjectComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SingleProjectComponent = /** @class */ (function () {
    function SingleProjectComponent(_router) {
        this._router = _router;
        this.router = _router;
    }
    SingleProjectComponent.prototype.ngOnInit = function () {
    };
    SingleProjectComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-single-project',
            template: __webpack_require__("../../../../../src/app/components/single-project/single-project.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/single-project/single-project.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], SingleProjectComponent);
    return SingleProjectComponent;
}());



/***/ }),

/***/ "../../../../../src/app/models/experience.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Experience; });
var Experience = /** @class */ (function () {
    function Experience(company, title, description) {
        this.company = company;
        this.title = title;
        this.description = description;
    }
    return Experience;
}());



/***/ }),

/***/ "../../../../../src/app/models/project.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Project; });
var Project = /** @class */ (function () {
    function Project(name, description, cover, nickname, type, medal) {
        this.name = name;
        this.description = description;
        this.cover = cover;
        this.nickname = nickname;
        this.type = type;
        this.medal = medal;
    }
    Project.prototype.ngOnInit = function () {
    };
    return Project;
}());



/***/ }),

/***/ "../../../../../src/app/models/skillset.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Skillset; });
var Skillset = /** @class */ (function () {
    function Skillset(title, abilities, icon) {
        this.title = title;
        this.abilities = abilities;
        this.icon = icon;
    }
    return Skillset;
}());



/***/ }),

/***/ "../../../../../src/app/models/video.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Video; });
var Video = /** @class */ (function () {
    function Video(caption, video, poster) {
        this.direct = "./assets/images/pj-posters/";
        this.caption = caption;
        this.video = video;
        this.poster = this.direct + poster;
    }
    return Video;
}());



/***/ }),

/***/ "../../../../../src/app/services/about.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_skillset__ = __webpack_require__("../../../../../src/app/models/skillset.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_experience__ = __webpack_require__("../../../../../src/app/models/experience.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AboutService = /** @class */ (function () {
    function AboutService() {
        this.skills = [];
        this.experience = [];
        this.skills = [
            new __WEBPACK_IMPORTED_MODULE_1__models_skillset__["a" /* Skillset */]("Languages", ["Ruby", "Java", "Javascript", "PostgreSQL", "R", "Python", "Typescript", "HTML", "CSS", "SCSS", "LESS", "Racket", "Command Line"], "fa fa-code"),
            new __WEBPACK_IMPORTED_MODULE_1__models_skillset__["a" /* Skillset */]("Libraries", ["Bootstrap", "Angular", "React", "p5"], "fa fa-file-archive-o"),
            new __WEBPACK_IMPORTED_MODULE_1__models_skillset__["a" /* Skillset */]("Design", ["Photoshop", "Illustrator", "Premiere Pro", "InDesign", "After Effects", "Marvel", "Invision", "Balsamiq"], "fa fa-crop"),
            new __WEBPACK_IMPORTED_MODULE_1__models_skillset__["a" /* Skillset */]("More", ["Public Speaking", "Social Media", "Copywriting"], "fa fa-plus-circle"),
        ];
        this.experience = [
            new __WEBPACK_IMPORTED_MODULE_2__models_experience__["a" /* Experience */]("BookBub", "Software Engineering Co-op", "Edited, maintained, and developed the Bookbub software using React, Ruby on Rails, Postgres, automated tests, and continuous integration practices."),
            new __WEBPACK_IMPORTED_MODULE_2__models_experience__["a" /* Experience */]("Boston Children's Hospital", "Web UI Innovator and Graphics Designer", "Designed, implemented, and improved the front-end design of various Heart Center web applications, utilizing technologies such as Angular, Javascript, HTML, CSS, Balsamiq, SCSS, and LESS"),
            new __WEBPACK_IMPORTED_MODULE_2__models_experience__["a" /* Experience */]("Harold Grinspoon Foundation", "Social Media Intern and Freelance Designer", "Designed various social media graphics; Composed, edited, and animated book trailers and other promotional videos; Marketed the organization through social media copy."),
            new __WEBPACK_IMPORTED_MODULE_2__models_experience__["a" /* Experience */]("Johnson Memorial Hospital", "Information Services Volunteer", "Installed and repaired technological devices; Documented extensive amounts of healthcare data."),
        ];
    }
    AboutService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], AboutService);
    return AboutService;
}());



/***/ }),

/***/ "../../../../../src/app/services/data-service.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_project__ = __webpack_require__("../../../../../src/app/models/project.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataService = /** @class */ (function () {
    function DataService() {
        this.direct = "./assets/images/";
        this.projects = [
            new __WEBPACK_IMPORTED_MODULE_1__models_project__["a" /* Project */]("C3PO-R3", "The front-end of a cardiac catheterization risk registry, developed and designed by me for Boston Children's Hospital's renowned Heart Center", this.direct + "c3po.png", "c3po", "fa-code", false),
            new __WEBPACK_IMPORTED_MODULE_1__models_project__["a" /* Project */]("Cardiac Fitness App", "A responsive application developed for Boston Children Hospital, intended to help children with heart problems track their fitness", this.direct + "cf.png", "cf", "fa-code", false),
            new __WEBPACK_IMPORTED_MODULE_1__models_project__["a" /* Project */]("Emotiquote", "A ReactJS application for analyzing the emotions of famous (and not-so-famous) people, books, movies, and TV shows. A big winner at HackBeanpot 2018.", this.direct + "emotiquote.png", "emotiquote", "fa-code", true),
            new __WEBPACK_IMPORTED_MODULE_1__models_project__["a" /* Project */]("This Website", "Welcome to my new portfolio, built using Angular 4, SCSS, p5, Photoshop, Illustrator, + more.", this.direct + "profile_pic.svg", "how", "fa-code", false),
            new __WEBPACK_IMPORTED_MODULE_1__models_project__["a" /* Project */]("Daylight Theme", "COMING SOON! My first responsive tumblr theme, featuring (of course) gradients, the newly released Bootstrap 4, and FontAwesome icons. ", this.direct + "daylightTheme.gif", "daylight-theme", "fa-code", false),
            new __WEBPACK_IMPORTED_MODULE_1__models_project__["a" /* Project */]("The Easy Animator", "A Java software that converts textual instructions into descriptive, interactive or svg file animations", this.direct + "easy-animator.svg", "easy-animator", "fa-code", false),
            new __WEBPACK_IMPORTED_MODULE_1__models_project__["a" /* Project */]("Blankets for Boston", "A concept website made for the Mayor's Office of New Urban Mechanics, intended as a winter public activation activity.", this.direct + "blanketsForBoston.png", "blankets-for-boston", "fa-code", false),
            new __WEBPACK_IMPORTED_MODULE_1__models_project__["a" /* Project */]("Ribbons Theme", "A desktop javascript arcade game, designed and coded by me using the p5 library", this.direct + "ribbons.png", "ribbons", "fa-code", false),
            new __WEBPACK_IMPORTED_MODULE_1__models_project__["a" /* Project */]("Maze Game", "A desktop Java game which uses Kruskal's Algorithm to create complex mazes, and also uses depth first and breadth first search to solve them.", this.direct + "mazeGame.png", "maze-game", "fa-code", false),
            new __WEBPACK_IMPORTED_MODULE_1__models_project__["a" /* Project */]("Forbidden Island", "An animated desktop Java game involving a race against time to rescue yourself from a sinking island.", this.direct + "forbiddenIsland.png", "forbidden-island", "fa-code", false),
            new __WEBPACK_IMPORTED_MODULE_1__models_project__["a" /* Project */]("Fearless Flight", "A javascript arcade game, developed using Illustrator and the p5 library. Play here and now!", this.direct + "fearless_flight.png", "fearless_flight", "fa-code", false),
            new __WEBPACK_IMPORTED_MODULE_1__models_project__["a" /* Project */]("PJ Library Videos", "A series of video editing projects, used for marketing by the Harold Grinspoon Foundation's social media. ", this.direct + "pjLibraryVideos.jpeg", "pj_videos", "fa-video-camera", false),
            new __WEBPACK_IMPORTED_MODULE_1__models_project__["a" /* Project */]("Wonder Theme", "An extremely colorful and dynamic tumblr theme for your blog, created with HTML and CSS.", this.direct + "wonder.png", "wonder", "fa-code", false),
            new __WEBPACK_IMPORTED_MODULE_1__models_project__["a" /* Project */]("Windy Weather", "An animated wind speed visualizer, created using the APIXU API, Illustrator, and p5", this.direct + "windyWeather.png", "windy_weather", "fa-code", false),
            new __WEBPACK_IMPORTED_MODULE_1__models_project__["a" /* Project */]("Starborne Theme", "A minimalistic but still colorful tumblr theme for bloggers, created with HTML and CSS.", this.direct + "starborne.png", "starborne", "fa-code", false),
            new __WEBPACK_IMPORTED_MODULE_1__models_project__["a" /* Project */]("Phases Theme", "My first foray into gradients and HTML, used to create this sunset-inspired tumblr theme.", this.direct + "phases.png", "phases", "fa-code", false),
            new __WEBPACK_IMPORTED_MODULE_1__models_project__["a" /* Project */]("PJ Graphics", "A series of promotional graphics, each designed for the social media accounts of the Harold Grinspoon Foundation's PJ Library program.", this.direct + "grinspoonGraphics.jpg", "pj_graphics", "fa-crop", false),
            new __WEBPACK_IMPORTED_MODULE_1__models_project__["a" /* Project */]("Tumblr Graphics", "Just a collection of entertainment-related graphics that I made for fun!", this.direct + "tumblrGraphics.gif", "tumblr_graphics", "fa-crop", false),
        ];
    }
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "../../../../../src/app/services/imessage.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppService = /** @class */ (function () {
    function AppService(http) {
        this.http = http;
        this.emailUrl = "./assets/php/email.php";
    }
    AppService.prototype.sendEmail = function (message) {
        return this.http.post(this.emailUrl, message)
            .map(function (response) {
            console.log('Sending email was successfull', response);
            return response;
        })
            .catch(function (error) {
            console.log('Sending email got error', error);
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(error);
        });
    };
    AppService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], AppService);
    return AppService;
}());



/***/ }),

/***/ "../../../../../src/app/services/pjvideo.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PjvideoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_video__ = __webpack_require__("../../../../../src/app/models/video.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PjvideoService = /** @class */ (function () {
    function PjvideoService() {
        this.direct = "./assets/images/pj-posters/";
        this.videos = [
            new __WEBPACK_IMPORTED_MODULE_1__models_video__["a" /* Video */]("Book Trailer for Bear Feels Sick by Karma Wilson and Jane Chapman:", "https://adobeprod-a.akamaihd.net/5YNNUuwdnid/rend/5YNNUuwdnid_576.mp4?hdnea=st%3D1523322967~exp%3D1523333767~acl%3D%2Fshared_assets%2Fimage%2F*%21%2Fz%2F5YNNUuwdnid%2Frend%2F*%21%2Fi%2F5YNNUuwdnid%2Frend%2F*%21%2F5YNNUuwdnid%2Frend%2F*%21%2F5YNNUuwdnid%2Fimage%2F*~hmac%3Dfdff5547e2278534af4865ffd5dac232397f8afadd3898849c0be22ee0232311", "BearFeelsSickPoster.png"),
            new __WEBPACK_IMPORTED_MODULE_1__models_video__["a" /* Video */]("Book Trailer for Flying High by Julian Edelman:", "https://adobeprod-a.akamaihd.net/BKDuCjfaGaj/rend/BKDuCjfaGaj_576.mp4?hdnea=st%3D1523221262%7Eexp%3D1523232062%7Eacl%3D%2Fshared_assets%2Fimage%2F*%21%2Fz%2FBKDuCjfaGaj%2Frend%2F*%21%2Fi%2FBKDuCjfaGaj%2Frend%2F*%21%2FBKDuCjfaGaj%2Frend%2F*%21%2FBKDuCjfaGaj%2Fimage%2F*%7Ehmac%3D60e261d442181f8efed7917ac5fc9d717c0786b99d0cb65a33dba89385362351", "flyingHighPoster.jpg"),
            new __WEBPACK_IMPORTED_MODULE_1__models_video__["a" /* Video */]("Book Trailer for the Knish War on Rivington Street by Joanne Oppenheim and Jon Davis:", "https://adobeprod-a.akamaihd.net/LJ7puUvqZXo/rend/LJ7puUvqZXo_576.mp4?hdnea=st%3D1523322967%7Eexp%3D1523333767%7Eacl%3D%2Fshared_assets%2Fimage%2F*%21%2Fz%2FLJ7puUvqZXo%2Frend%2F*%21%2Fi%2FLJ7puUvqZXo%2Frend%2F*%21%2FLJ7puUvqZXo%2Frend%2F*%21%2FLJ7puUvqZXo%2Fimage%2F*%7Ehmac%3D9bb592b2e4429665e51638e902647916d9be1228a6c93c654a206ffd59024755", "knishWarPoster.jpg"),
            new __WEBPACK_IMPORTED_MODULE_1__models_video__["a" /* Video */]("Educational video on how to celebrate Rosh Hashanah:", "https://adobeprod-a.akamaihd.net/-o5qvw_KRry/rend/-o5qvw_KRry_576.mp4?hdnea=st%3D1523221262%7Eexp%3D1523232062%7Eacl%3D%2Fshared_assets%2Fimage%2F*%21%2Fz%2F-o5qvw_KRry%2Frend%2F*%21%2Fi%2F-o5qvw_KRry%2Frend%2F*%21%2F-o5qvw_KRry%2Frend%2F*%21%2F-o5qvw_KRry%2Fimage%2F*%7Ehmac%3Dfa2f21f20a17f5bb0b7ef3006906078f35a30b68bc90272d2758458a6bba6663", "roshHashanahPoster.jpg"),
            new __WEBPACK_IMPORTED_MODULE_1__models_video__["a" /* Video */]("Book Trailer for Sign Language Shabbat! by Alisa Greenbacher, Jenifer Rosner, Shelley Rotner, and David Hyde Costello:", "https://adobeprod-a.akamaihd.net/BXDKbiFZGe7/rend/BXDKbiFZGe7_576.mp4?hdnea=st%3D1523221262%7Eexp%3D1523232062%7Eacl%3D%2Fshared_assets%2Fimage%2F*%21%2Fz%2FBXDKbiFZGe7%2Frend%2F*%21%2Fi%2FBXDKbiFZGe7%2Frend%2F*%21%2FBXDKbiFZGe7%2Frend%2F*%21%2FBXDKbiFZGe7%2Fimage%2F*%7Ehmac%3D7d8a2ab67ebb3313c26f08c15ae7fdc22d81803c872f956dfe5809581aef8b47", "SignLanguageShabbatPoster.jpg")
        ];
    }
    PjvideoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], PjvideoService);
    return PjvideoService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map