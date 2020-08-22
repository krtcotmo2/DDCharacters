(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");





const routes = [
    { path: 'charGen', loadChildren: () => Promise.all(/*! import() | chargen-chargen-module */[__webpack_require__.e("common"), __webpack_require__.e("chargen-chargen-module")]).then(__webpack_require__.bind(null, /*! ./chargen/chargen.module */ "./src/app/chargen/chargen.module.ts")).then(m => m.ChargenModule) },
    { path: 'charLoad', loadChildren: () => Promise.all(/*! import() | charload-charload-module */[__webpack_require__.e("common"), __webpack_require__.e("charload-charload-module")]).then(__webpack_require__.bind(null, /*! ./charload/charload.module */ "./src/app/charload/charload.module.ts")).then(m => m.CharloadModule) },
    { path: 'newUser', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_char_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/char-data.service */ "./src/app/services/char-data.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






const _c0 = function () { return { exact: true }; };
function AppComponent_a_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Load Character");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
} }
function AppComponent_a_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Character");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AppComponent {
    constructor(charDataSvc, userService) {
        this.charDataSvc = charDataSvc;
        this.userService = userService;
        this.title = 'character';
        this.theUser = {};
        this.isLoggedIn = false;
    }
    ngOnInit() {
        this.userService.getUser.subscribe(val => {
            this.theUser = val;
            this.isLoggedIn = this.theUser['isLoggedIn'];
            this.userName = this.theUser['userName'];
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_char_data_service__WEBPACK_IMPORTED_MODULE_1__["CharDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 10, vars: 5, consts: [["role", "main", 1, "content"], [1, "ui", "secondary", "pointing", "menu"], ["routerLink", "", "routerLinkActive", "active", 1, "item", 3, "routerLinkActiveOptions"], ["routerLink", "charLoad", "class", "item", "routerLinkActive", "active", 3, "routerLinkActiveOptions", 4, "ngIf"], ["routerLink", "charGen", "routerLinkActive", "active", "class", "item", 4, "ngIf"], [1, "item", 2, "position", "absolute", "right", "0px"], [1, "ui", "segment", "container"], ["routerLink", "charLoad", "routerLinkActive", "active", 1, "item", 3, "routerLinkActiveOptions"], ["routerLink", "charGen", "routerLinkActive", "active", 1, "item"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AppComponent_a_4_Template, 2, 2, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AppComponent_a_5_Template, 2, 0, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Welcome ", ctx.theUser["userName"], "");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: [".ui.secondary.pointing[_ngcontent-%COMP%]   .active.item[_ngcontent-%COMP%]{\r\n  color:#336699;\r\n  border-color:#336699\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2I7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVpLnNlY29uZGFyeS5wb2ludGluZyAuYWN0aXZlLml0ZW17XHJcbiAgY29sb3I6IzMzNjY5OTtcclxuICBib3JkZXItY29sb3I6IzMzNjY5OVxyXG59XHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _services_char_data_service__WEBPACK_IMPORTED_MODULE_1__["CharDataService"] }, { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _chargen_chargen_home_chargen_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chargen/chargen-home/chargen-home.component */ "./src/app/chargen/chargen-home/chargen-home.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/overlay.js");














class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__["MatSnackBar"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
            _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["OverlayModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
        _chargen_chargen_home_chargen_home_component__WEBPACK_IMPORTED_MODULE_6__["ChargenHomeComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["OverlayModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                    _chargen_chargen_home_chargen_home_component__WEBPACK_IMPORTED_MODULE_6__["ChargenHomeComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                    _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["OverlayModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                ],
                providers: [_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__["MatSnackBar"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/chargen/chargen-home/chargen-home.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/chargen/chargen-home/chargen-home.component.ts ***!
  \****************************************************************/
/*! exports provided: ChargenHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChargenHomeComponent", function() { return ChargenHomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_char_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/char-data.service */ "./src/app/services/char-data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const _c0 = function () { return { exact: true }; };
class ChargenHomeComponent {
    constructor(charDataSvc) {
        this.charDataSvc = charDataSvc;
        this.titleValue = () => {
            return this.charName;
        };
    }
    ngOnInit() {
        this.charDataSvc.getCharID.subscribe((val) => this.charID = val);
        this.charDataSvc.getCharName.subscribe((val) => this.charName = val);
    }
}
ChargenHomeComponent.ɵfac = function ChargenHomeComponent_Factory(t) { return new (t || ChargenHomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_char_data_service__WEBPACK_IMPORTED_MODULE_1__["CharDataService"])); };
ChargenHomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChargenHomeComponent, selectors: [["app-chargen-home"]], decls: 23, vars: 5, consts: [[1, "ui", "secondary", "pointing", "menu"], ["routerLink", "./", "routerLinkActive", "active", 1, "item", 3, "routerLinkActiveOptions"], ["routerLink", "stats", "routerLinkActive", "active", 1, "item", 3, "routerLinkActiveOptions"], ["routerLink", "tohits", "routerLinkActive", "active", 1, "item"], ["routerLink", "saves", "routerLinkActive", "active", 1, "item"], ["routerLink", "skills", "routerLinkActive", "active", 1, "item"], ["routerLink", "feats", "routerLinkActive", "active", 1, "item"], ["routerLink", "equip", "routerLinkActive", "active", 1, "item"], ["routerLink", "notes", "routerLinkActive", "active", 1, "item"], ["routerLink", "spells", "routerLinkActive", "active", 1, "item"], [1, "ui", "segment"]], template: function ChargenHomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Class and Race");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Stats");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "To Hits");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Saves");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Feats");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Equipment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Notes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Spells");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.titleValue());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJnZW4vY2hhcmdlbi1ob21lL2NoYXJnZW4taG9tZS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChargenHomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-chargen-home',
                templateUrl: './chargen-home.component.html',
                styleUrls: ['./chargen-home.component.css']
            }]
    }], function () { return [{ type: _services_char_data_service__WEBPACK_IMPORTED_MODULE_1__["CharDataService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");








const _c0 = ["confPasswordField"];
function HomeComponent_form_7_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 4, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function HomeComponent_form_7_Template_form_ngSubmit_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.onSubmit($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", null, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HomeComponent_form_7_Template_input_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.userName = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HomeComponent_form_7_Template_input_ngModelChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.password = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Forgot your password? Type your email address in the email address field and click the button below.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_form_7_Template_button_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.resendPassword(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Forgot Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.userName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.password);
} }
function HomeComponent_form_8_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 4, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function HomeComponent_form_8_Template_form_ngSubmit_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.onReSubmit($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", null, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Password Reset");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "You must reset your password before proceeding.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HomeComponent_form_8_Template_input_ngModelChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.newPassword = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 21, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HomeComponent_form_8_Template_input_ngModelChange_16_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.confPassword = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.newPassword);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.confPassword);
} }
function HomeComponent_form_9_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 4, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function HomeComponent_form_9_Template_form_ngSubmit_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.onCreate($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", null, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "New User");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HomeComponent_form_9_Template_input_ngModelChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.userName = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HomeComponent_form_9_Template_input_ngModelChange_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.emailAddress = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HomeComponent_form_9_Template_input_ngModelChange_18_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r24.newPassword = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 21, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HomeComponent_form_9_Template_input_ngModelChange_22_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r25.confPassword = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.userName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.emailAddress);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.newPassword);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.confPassword);
} }
class HomeComponent {
    constructor(userService, router, http, _snackBar) {
        this.userService = userService;
        this.router = router;
        this.http = http;
        this._snackBar = _snackBar;
        this.onSubmit = evt => {
            evt.preventDefault();
            const body = {
                userEmail: this.userName,
                password: this.password
            };
            this.userService.loginUser(body).subscribe((val) => {
                this.theUser = val;
                if (this.theUser.forcedReset) {
                    this.isLoggedIn = true;
                    this.isForced = true;
                    return;
                }
                else {
                    this.theUser.isLoggedIn = true;
                    this.userService.setUser(this.theUser);
                    this.router.navigate(['/charLoad']);
                }
            }, err => {
                this._snackBar.open('Invalid Login. Try Again', '', {
                    duration: 2000,
                    horizontalPosition: 'center',
                    verticalPosition: 'top',
                    panelClass: ['red-snackbar']
                });
            });
        };
        this.onReSubmit = evt => {
            evt.preventDefault();
            if (this.newPassword !== this.confPassword) {
                this.confPassword = '';
                this.confPasswordField.nativeElement.focus();
                this._snackBar.open('Passwords did not match, Try Again', '', {
                    duration: 2000,
                    horizontalPosition: 'center',
                    verticalPosition: 'top',
                    panelClass: ['red-snackbar']
                });
                return;
            }
            const body = {
                userName: this.emailAddress,
                password: this.newPassword,
                userID: this.theUser.userID
            };
            this.userService.resetPassword(body).subscribe((val) => {
                const aValue = val;
                if (aValue['status'] === 'done') {
                    this.theUser.isLoggedIn = true;
                    this.theUser.forcedReset = false;
                    this.userService.setUser(this.theUser);
                    this.isForced = false;
                    this.isLoggedIn = true;
                    this.router.navigate(['/charLoad']);
                }
            });
        };
        this.onCreate = (evt) => {
            if (this.newPassword !== this.confPassword) {
                this.confPassword = '';
                this.confPasswordField.nativeElement.focus();
                this._snackBar.open('Passwords did not match, Try Again', '', {
                    duration: 2000,
                    horizontalPosition: 'center',
                    verticalPosition: 'top',
                    panelClass: ['red-snackbar']
                });
                return;
            }
            const body = {
                userName: this.userName,
                password: this.newPassword,
                userEmail: this.emailAddress
            };
            this.userService.insertUser(body).subscribe(val => {
                this.theUser = val;
                this.theUser.userPassword = null;
                this.userService.setUser(this.theUser);
                this.router.navigate(['/charLoad']);
            });
        };
        this.resendPassword = () => {
            const tempEmail = this.userName;
            this.userName = '';
            console.log(tempEmail);
            const body = {
                userEmail: tempEmail
            };
            this.userService.newPassword(body).subscribe(val => {
                this._snackBar.open('Password reset. Check your email', '', {
                    duration: 2000,
                    horizontalPosition: 'center',
                    verticalPosition: 'top',
                    panelClass: ['red-snackbar']
                });
            }, err => {
                this._snackBar.open('Email not found in database', '', {
                    duration: 2000,
                    horizontalPosition: 'center',
                    verticalPosition: 'top',
                    panelClass: ['red-snackbar']
                });
            });
        };
    }
    ngOnInit() {
        this.isNewUser = document.location.pathname === '/newUser';
        this.isForced = false;
        this.userService.getUser.subscribe(val => this.theUser = val);
        this.isLoggedIn = this.theUser.userEmail !== undefined;
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], viewQuery: function HomeComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.confPasswordField = _t.first);
    } }, decls: 10, vars: 3, consts: [[1, "ui", "grid"], [1, "ten", "wide", "column"], [1, "six", "wide", "column"], ["class", "ui large form", 3, "ngSubmit", 4, "ngIf"], [1, "ui", "large", "form", 3, "ngSubmit"], ["modForm", "ngForm"], ["formRoot", ""], [1, "ui", "stacked", "segment"], [1, "field"], [1, "ui", "left", "icon", "input"], [1, "user", "icon"], ["type", "text", "name", "email", "placeholder", "E-mail address", 3, "ngModel", "ngModelChange"], [1, "lock", "icon"], ["type", "password", "name", "password", "placeholder", "Password", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "ui", "fluid", "large", "primary", "button"], [2, "margin", "12px 0"], ["type", "button", 1, "ui", "fluid", "large", "primary", "button", 3, "click"], [1, "ui", "error", "message"], ["restForm", "ngForm"], ["restFormRoot", ""], ["type", "password", "name", "newPassword", "placeholder", "New Password", 3, "ngModel", "ngModelChange"], ["type", "password", "name", "confPassword", "placeholder", "Verify Password", 3, "ngModel", "ngModelChange"], ["confPasswordField", ""], ["type", "text", "name", "userName", "placeholder", "User's Name", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "emailAddress", "placeholder", "Email Address", 3, "ngModel", "ngModelChange"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Pathfinder Character Management System");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "This application allows for easy storage and access to all aspects of a Pathfinder character. In its current state, all characters are visible to all users. Future states will the user to login using their email address and a password.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, HomeComponent_form_7_Template, 20, 2, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, HomeComponent_form_8_Template, 21, 2, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, HomeComponent_form_9_Template, 27, 4, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoggedIn && !ctx.isNewUser);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isForced);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isNewUser);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"]], styles: [".ui.stacked.segment[_ngcontent-%COMP%]:after{\r\n  position: static;\r\n  border: 0px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudWkuc3RhY2tlZC5zZWdtZW50OmFmdGVye1xyXG4gIHBvc2l0aW9uOiBzdGF0aWM7XHJcbiAgYm9yZGVyOiAwcHg7XHJcbn1cclxuXHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return [{ type: _services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] }]; }, { confPasswordField: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['confPasswordField']
        }] }); })();


/***/ }),

/***/ "./src/app/services/char-data.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/char-data.service.ts ***!
  \***********************************************/
/*! exports provided: CharDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharDataService", function() { return CharDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");





class CharDataService {
    constructor(http) {
        this.http = http;
        // DECLARATIONS
        this.curCharID = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](0);
        this.charID = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](0);
        this.charBasics = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({ results: {} });
        this.charName = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('');
        this.allFeats = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({ results: [] });
        this.allStats = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({ results: [] });
        this.allSaves = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({ results: [] });
        this.allSkills = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({ results: [] });
        this.allToHits = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({ results: [] });
        this.allEquipment = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({ results: [] });
        this.allAC = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({ results: [] });
        this.allNotes = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({ results: [] });
        this.allSpells = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({ results: [] });
        // GETTERS
        this.getCurCharID = this.curCharID.asObservable();
        this.getCharID = this.charID.asObservable();
        this.getCharBasics = this.charBasics.asObservable();
        this.getCharName = this.charName.asObservable();
        this.getAllFeats = this.allFeats.asObservable();
        this.getAllStats = this.allStats.asObservable();
        this.getAllSaves = this.allSaves.asObservable();
        this.getAllSkills = this.allSkills.asObservable();
        this.getAllNotes = this.allNotes.asObservable();
        this.getAllToHits = this.allToHits.asObservable();
        this.getAllEquip = this.allEquipment.asObservable();
        this.getAllACs = this.allAC.asObservable();
        this.getAllSpells = this.allSpells.asObservable();
        this.setCharBasics = (arg) => { this.charBasics.next(arg); };
        this.setAllFeats = (arg) => { this.allFeats.next(arg); };
        this.setStats = (arg) => { this.allStats.next(arg); };
        this.setSaves = (arg) => { this.allSaves.next(arg); };
        this.setAllSkills = (arg) => { this.allSkills.next(arg); };
        this.setAllNotes = (arg) => { this.allNotes.next(arg); };
        this.setAllToHits = (arg) => { this.allToHits.next(arg); };
        this.setAllEquipment = (arg) => { this.allEquipment.next(arg); };
        this.setAllACs = (arg) => { this.allAC.next(arg); };
        this.setAllSpells = (arg) => { this.allSpells.next(arg); };
        // global reset
        this.reset = () => {
            this.charBasics.next(null);
            this.charName.next('');
            this.charID.next(0);
            this.allFeats.next(null);
            this.allSkills.next(null);
            this.allStats.next(null);
            this.allSaves.next(null);
            this.allToHits.next(null);
            this.allNotes.next(null);
            this.allSpells.next(null);
        };
        // remote loaders
        // tslint:disable:max-line-length
        // CHARACTER
        this.loadCharBase = (id) => {
            //const val = this.http.get<CharBasics>('https://cors-anywhere.herokuapp.com/https://pathfinder-krc.herokuapp.com/api/characters/' + id, {
            const val = this.http.get('/api/characters/' + id, {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                    'Access-Control-Allow-Origin': '*'
                }),
            });
            return val;
        };
        // STATS
        this.loadStats = (arg) => {
            //const val = this.http.get<Stats>('https://cors-anywhere.herokuapp.com/https://pathfinder-krc.herokuapp.com/api/stats/ ' + arg, {
            const val = this.http.get('/api/stats/ ' + arg, {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                    'Access-Control-Allow-Origin': '*'
                }),
            });
            return val;
        };
        // FEATS
        this.loadFeats = (id) => {
            //const val =  this.http.get<CharFeat>('https://cors-anywhere.herokuapp.com/https://pathfinder-krc.herokuapp.com/api/characters/feats/' + id, {
            const val = this.http.get('/api/characters/feats/' + id, {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                    'Access-Control-Allow-Origin': '*'
                }),
            });
            return val;
        };
        this.loadOtherFeats = (arr) => {
            const body = {
                val: arr.join(",")
            };
            //const val =  this.http.post<CharSkills>('https://cors-anywhere.herokuapp.com/https://pathfinder-krc.herokuapp.com/api/feats/all', body, {
            const val = this.http.post('/api/feats/all', body, {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                    'Access-Control-Allow-Origin': '*'
                }),
            });
            return val;
        };
        this.saveNewFeat = (charID, feat) => {
            const body = {
                charID,
                feat
            };
            //const val =  this.http.post<CharFeat>('https://cors-anywhere.herokuapp.com/https://pathfinder-krc.herokuapp.com/api/feats/addFeat', body, {
            const val = this.http.post('/api/feats/addFeat', body, {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                    'Access-Control-Allow-Origin': '*'
                }),
            });
            return val;
        };
        this.deleteFeat = (id) => {
            //const val =  this.http.delete<CharFeat>('https://cors-anywhere.herokuapp.com/https://pathfinder-krc.herokuapp.com/api/feats/delete/' + id, {
            const val = this.http.delete('/api/feats/delete/' + id, {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                    'Access-Control-Allow-Origin': '*'
                }),
            });
            return val;
        };
        // SKILLS
        this.loadSkills = (id) => {
            //const val =  this.http.get<CharSkills>('https://cors-anywhere.herokuapp.com/https://pathfinder-krc.herokuapp.com/api/characters/skills/' + id, {
            const val = this.http.get('/api/characters/skills/' + id, {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                    'Access-Control-Allow-Origin': '*'
                }),
            });
            return val;
        };
        this.loadOtherSkills = (arr) => {
            const body = {
                val: arr.join(",")
            };
            //const val =  this.http.post<CharSkills>('https://cors-anywhere.herokuapp.com/https://pathfinder-krc.herokuapp.com/api/skills/all', body, {
            const val = this.http.post('/api/skills/all', body, {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                    'Access-Control-Allow-Origin': '*'
                }),
            });
            return val;
        };
        this.saveNewSkill = (charID, skill) => {
            const body = {
                charID,
                skill
            };
            //const val =  this.http.post<CharSkills>('https://cors-anywhere.herokuapp.com/https://pathfinder-krc.herokuapp.com/api/skills/addSKill', body, {
            const val = this.http.post('/api/skills/addSKill', body, {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                    'Access-Control-Allow-Origin': '*'
                }),
            });
            return val;
        };
        this.updateAttribute = (attType, obj) => {
            const body = {
                id: obj.id,
                modDesc: obj.modDesc,
                score: obj.score,
                charID: obj.charID,
                saveID: attType === 'save' ? obj.statID : null,
                skillID: attType === 'skill' ? obj.statID : null,
                statID: attType === 'stat' ? obj.statID : null,
                toHitID: attType === 'tohit' ? obj.statID : null,
                isBase: obj.isBase,
                isMod: obj.isMod,
                isClassSkill: obj.isClassSkill
            };
            let val;
            switch (attType) {
                case 'skill':
                    //val =  this.http.post<any>('https://cors-anywhere.herokuapp.com/https://pathfinder-krc.herokuapp.com/api/characters/updateSkill/', body, {
                    val = this.http.post('/api/characters/updateSkill/', body, {
                        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Access-Control-Allow-Origin': '*' }),
                    });
                    break;
                case 'stat':
                    //val =  this.http.post<any>('https://cors-anywhere.herokuapp.com/https://pathfinder-krc.herokuapp.com/api/characters/updateStat/', body, {
                    val = this.http.post('/api/characters/updateStat/', body, {
                        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Access-Control-Allow-Origin': '*' }),
                    });
                    break;
                case 'save':
                    //val =  this.http.post<any>('https://cors-anywhere.herokuapp.com/https://pathfinder-krc.herokuapp.com/api/characters/updateSave/', body, {
                    val = this.http.post('/api/characters/updateSave/', body, {
                        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Access-Control-Allow-Origin': '*' }),
                    });
                    break;
                case 'ac':
                    //val =  this.http.post<any>('https://cors-anywhere.herokuapp.com/https://pathfinder-krc.herokuapp.com/api/characters/ac/', body, {
                    val = this.http.post('/api/characters/ac/', body, {
                        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Access-Control-Allow-Origin': '*' }),
                    });
                    break;
                case 'tohit':
                    //val =  this.http.post<any>('https://cors-anywhere.herokuapp.com/https://pathfinder-krc.herokuapp.com/api/characters/updateToHit/', body, {
                    val = this.http.post('/api/characters/updateToHit/', body, {
                        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Access-Control-Allow-Origin': '*' }),
                    });
                    break;
                default:
                    break;
            }
            return val;
        };
        this.deleteAttribute = (attType, attId) => {
            const body = {
                id: attId,
            };
            let val;
            switch (attType) {
                case 'skill':
                    //val =  this.http.delete<any>('https://cors-anywhere.herokuapp.com/https://pathfinder-krc.herokuapp.com/api/characters/deleteSkill/'+attId);
                    val = this.http.delete('/api/characters/deleteSkill/' + attId);
                    break;
                case 'stat':
                    //val =  this.http.delete<any>('https://cors-anywhere.herokuapp.com/https://pathfinder-krc.herokuapp.com/api/characters/deleteStat/'+attId);
                    val = this.http.delete('/api/characters/deleteStat/' + attId);
                    break;
                    break;
                case 'save':
                    //val =  this.http.delete<any>('https://cors-anywhere.herokuapp.com/https://pathfinder-krc.herokuapp.com/api/characters/deleteSave/'+attId);
                    val = this.http.delete('/api/characters/deleteSave/' + attId);
                    break;
                case 'ac':
                    //val =  this.http.delete<any>('https://cors-anywhere.herokuapp.com/https://pathfinder-krc.herokuapp.com/api/characters/deleteAC/'+attId);
                    val = this.http.delete('/api/characters/deleteAC/' + attId);
                    break;
                case 'tohit':
                    //val =  this.http.delete<any>('https://cors-anywhere.herokuapp.com/https://pathfinder-krc.herokuapp.com/api/characters/deleteToHit/'+attId);
                    val = this.http.delete('/api/characters/deleteToHit/' + attId);
                    break;
                default:
                    break;
            }
            return val;
        };
        // SAVES
        this.loadSaves = (id) => {
            //const val =  this.http.get<Saves>('https://cors-anywhere.herokuapp.com/https://pathfinder-krc.herokuapp.com/api/characters/saves/' + id, {
            const val = this.http.get('/api/characters/saves/' + id, {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                    'Access-Control-Allow-Origin': '*'
                }),
            });
            return val;
        };
        // TO HITS
        this.loadToHits = (id) => {
            //const val =  this.http.get<CharToHits>('https://cors-anywhere.herokuapp.com/https://pathfinder-krc.herokuapp.com/api/characters/toHits/' + id, {
            const val = this.http.get('/api/characters/toHits/' + id, {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                    'Access-Control-Allow-Origin': '*'
                }),
            });
            return val;
        };
        this.newToHit = (cID, obj) => {
            const body = {
                id: obj.toHitID,
                toHitDesc: obj.toHitDesc,
                damage: obj.damage,
                critRange: obj.critRange,
                critDamage: obj.critDamage,
                charID: cID,
            };
            //const val = this.http.post<any>('https://cors-anywhere.herokuapp.com/https://pathfinder-krc.herokuapp.com/api/newToHit/', body, {
            const val = this.http.post('/api/newToHit/', body, {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Access-Control-Allow-Origin': '*' }),
            });
            return val;
        };
        this.reorderToHits = (body) => {
            const val = this.http.put('/api/newToHit/reorderToHits', body, {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                    'Access-Control-Allow-Origin': '*'
                }),
            });
            return val;
        };
        // EQUIPMENT
        this.loadEquipment = (id) => {
            //const val =  this.http.get<Equipment>('https://cors-anywhere.herokuapp.com/https://pathfinder-krc.herokuapp.com/api/characters/equip/' + id, {
            const val = this.http.get('/api/characters/equip/' + id, {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                    'Access-Control-Allow-Origin': '*'
                }),
            });
            return val;
        };
        this.addEquipment = (body) => {
            //const val =  this.http.post<any>('https://cors-anywhere.herokuapp.com/https://pathfinder-krc.herokuapp.com/api/characters/equip/add', body, {
            const val = this.http.post('/api/characters/equip/add', body, {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                    'Access-Control-Allow-Origin': '*'
                }),
            });
            return val;
        };
        this.deleteEquipment = (id) => {
            //const val =  this.http.delete<Equipment>('https://cors-anywhere.herokuapp.com/https://pathfinder-krc.herokuapp.com/api/characters/deleteequip/' + id, {
            const val = this.http.delete('/api/characters/deleteequip/' + id, {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                    'Access-Control-Allow-Origin': '*'
                }),
            });
            return val;
        };
        this.reorderEqiup = (body) => {
            const val = this.http.put('/api/characters/equip/reorderEquip', body, {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                    'Access-Control-Allow-Origin': '*'
                }),
            });
            return val;
        };
        // AC
        this.loadAC = (id) => {
            //const val =  this.http.get<Equipment>('https://cors-anywhere.herokuapp.com/https://pathfinder-krc.herokuapp.com/api/characters/ac/' + id, {
            const val = this.http.get('/api/characters/ac/' + id, {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                    'Access-Control-Allow-Origin': '*'
                }),
            });
            return val;
        };
        // HP
        this.updateHP = (charID, charHP) => {
            const body = {
                charID: charID,
                charHP: charHP
            };
            //const val =  this.http.get<Equipment>('https://cors-anywhere.herokuapp.com/https://pathfinder-krc.herokuapp.com/api/characters/ac/' + id, {
            const val = this.http.post('/api/characters/updateHP/', body, {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                    'Access-Control-Allow-Origin': '*'
                }),
            });
            return val;
        };
        // INITIATIVE
        this.updateInit = (charID, init) => {
            const body = {
                charID: charID,
                init: init
            };
            const val = this.http.post('/api/characters/updateInit/', body, {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                    'Access-Control-Allow-Origin': '*'
                }),
            });
            return val;
        };
        // NOTES
        this.loadNotes = (charID) => {
            const val = this.http.get('/api/notes/getCharNotes/' + charID.toString(), {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                    'Access-Control-Allow-Origin': '*'
                }),
            });
            return val;
        };
        this.loadNotesItems = (noteID) => {
            const val = this.http.get('/api/notes/getNoteItems/' + noteID, {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                    'Access-Control-Allow-Origin': '*'
                }),
            });
            return val;
        };
        this.addNoteHeader = (body) => {
            //const val =  this.http.post<any>('https://cors-anywhere.herokuapp.com/https://pathfinder-krc.herokuapp.com/api/characters/equip/add', body, {
            const val = this.http.post('/api/notes/insertNoteHeader', body, {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                    'Access-Control-Allow-Origin': '*'
                }),
            });
            return val;
        };
        this.addNoteItem = (body) => {
            //const val =  this.http.post<any>('https://cors-anywhere.herokuapp.com/https://pathfinder-krc.herokuapp.com/api/characters/equip/add', body, {
            const val = this.http.post('/api/notes/insertNoteItem', body, {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                    'Access-Control-Allow-Origin': '*'
                }),
            });
            return val;
        };
        this.updateNoteHeader = (body) => {
            const val = this.http.post('/api/notes/updateNote', body, {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                    'Access-Control-Allow-Origin': '*'
                }),
            });
            return val;
        };
        this.updateNoteItem = (body) => {
            const val = this.http.post('/api/notes/updateNoteItem', body, {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                    'Access-Control-Allow-Origin': '*'
                }),
            });
            return val;
        };
        this.deleteNoteHeader = (noteID) => {
            const val = this.http.post('/api/notes/deleteNote/' + noteID, {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                    'Access-Control-Allow-Origin': '*'
                }),
            });
            return val;
        };
        this.deleteNoteItem = (id) => {
            const val = this.http.post('/api/notes/deleteNoteItem/' + id, {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                    'Access-Control-Allow-Origin': '*'
                }),
            });
            return val;
        };
        this.reorderNoteItems = (body) => {
            const val = this.http.put('/api/notes/reorderNoteItem', body, {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                    'Access-Control-Allow-Origin': '*'
                }),
            });
            return val;
        };
        this.reorderNoteHeader = (body) => {
            const val = this.http.put('/api/notes/reorderNoteHeader', body, {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                    'Access-Control-Allow-Origin': '*'
                }),
            });
            return val;
        };
        // CLASSES
        this.loadClasses = (id) => {
        };
        //SPELLS
        this.loadSpells = (charID) => {
            const val = this.http.get('/api/spells/getAllSpells/' + charID.toString(), {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                    'Access-Control-Allow-Origin': '*'
                }),
            });
            return val;
        };
        this.insertSpell = (body) => {
            const val = this.http.post('/api/spells/addASpell', body, {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                    'Access-Control-Allow-Origin': '*'
                }),
            });
            return val;
        };
        this.toggleSpell = (body) => {
            const val = this.http.post('/api/spells/toggleSpell', body, {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                    'Access-Control-Allow-Origin': '*'
                }),
            });
            return val;
        };
        this.updateSpell = (body) => {
            const val = this.http.post('/api/spells/updateASpell', body, {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                    'Access-Control-Allow-Origin': '*'
                }),
            });
            return val;
        };
        this.deleteSpell = (id) => {
            const val = this.http.delete('/api/spells/deleteASpell/' + id, {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                    'Access-Control-Allow-Origin': '*'
                }),
            });
            return val;
        };
    }
    // SETTERS
    setCurCharID(arg) { this.curCharID.next(arg); }
    setCharID(arg) { this.charID.next(arg); }
    setCharName(arg) { this.charName.next(arg); }
}
CharDataService.ɵfac = function CharDataService_Factory(t) { return new (t || CharDataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
CharDataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CharDataService, factory: CharDataService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CharDataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");





class UserService {
    constructor(http) {
        this.http = http;
        this.user = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({});
        // GETTERS
        this.getUser = this.user.asObservable();
        this.loginUser = (body) => {
            const val = this.http.post('/api/login', body, {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                    'Access-Control-Allow-Origin': '*'
                }),
            });
            return val;
        };
        this.resetPassword = (body) => {
            const val = this.http.post('/api/login/resetPassword', body, {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                    'Access-Control-Allow-Origin': '*'
                }),
            });
            return val;
        };
        this.insertUser = (body) => {
            const val = this.http.post('/api/login/insertUser', body, {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                    'Access-Control-Allow-Origin': '*'
                }),
            });
            return val;
        };
        this.newPassword = (body) => {
            const val = this.http.post('/api/login/newPassword', body, {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                    'Access-Control-Allow-Origin': '*'
                }),
            });
            return val;
        };
    }
    // SETTERS
    setUser(arg) { this.user.next(arg); }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Projects\angular\combinedChar\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map