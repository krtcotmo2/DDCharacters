function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive": function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts": function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");

    var routes = [{
      path: 'charGen',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | chargen-chargen-module */
        [__webpack_require__.e("default~chargen-chargen-module~party-party-module"), __webpack_require__.e("chargen-chargen-module")]).then(__webpack_require__.bind(null,
        /*! ./chargen/chargen.module */
        "./src/app/chargen/chargen.module.ts")).then(function (m) {
          return m.ChargenModule;
        });
      }
    }, {
      path: 'charLoad',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | charload-charload-module */
        [__webpack_require__.e("default~charload-charload-module~party-party-module"), __webpack_require__.e("charload-charload-module")]).then(__webpack_require__.bind(null,
        /*! ./charload/charload.module */
        "./src/app/charload/charload.module.ts")).then(function (m) {
          return m.CharloadModule;
        });
      }
    }, {
      path: 'newChar',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | newChar-new-char-module */
        "newChar-new-char-module").then(__webpack_require__.bind(null,
        /*! ./newChar/new-char.module */
        "./src/app/newChar/new-char.module.ts")).then(function (m) {
          return m.NewCharModule;
        });
      }
    }, {
      path: 'party',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | party-party-module */
        [__webpack_require__.e("default~chargen-chargen-module~party-party-module"), __webpack_require__.e("default~charload-charload-module~party-party-module"), __webpack_require__.e("party-party-module")]).then(__webpack_require__.bind(null,
        /*! ./party/party.module */
        "./src/app/party/party.module.ts")).then(function (m) {
          return m.PartyModule;
        });
      }
    }, {
      path: '',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts": function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_char_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./services/char-data.service */
    "./src/app/services/char-data.service.ts");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    var _c0 = function _c0() {
      return {
        exact: true
      };
    };

    function AppComponent_a_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Load Character");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
      }
    }

    function AppComponent_a_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Character");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_a_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "New Character");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_a_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Party");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(charDataSvc, userService) {
        _classCallCheck(this, AppComponent);

        this.charDataSvc = charDataSvc;
        this.userService = userService;
        this.title = 'character Manager';
        this.theUser = {};
        this.isLoggedIn = false;
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.userService.getUser.subscribe(function (val) {
            _this.theUser = val;
            _this.isLoggedIn = _this.theUser['isLoggedIn'];
            _this.userName = _this.theUser['userName'];
          });
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_char_data_service__WEBPACK_IMPORTED_MODULE_1__["CharDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 12,
      vars: 7,
      consts: [["role", "main", 1, "content"], [1, "ui", "secondary", "pointing", "menu"], ["routerLink", "", "routerLinkActive", "active", 1, "item", 3, "routerLinkActiveOptions"], ["routerLink", "charLoad", "class", "item", "routerLinkActive", "active", 3, "routerLinkActiveOptions", 4, "ngIf"], ["routerLink", "charGen", "routerLinkActive", "active", "class", "item", 4, "ngIf"], ["routerLink", "newChar", "routerLinkActive", "active", "class", "item", 4, "ngIf"], ["routerLink", "party/search", "routerLinkActive", "active", "class", "item", 4, "ngIf"], [1, "item", 2, "position", "absolute", "right", "0px"], [1, "ui", "segment", "container"], ["routerLink", "charLoad", "routerLinkActive", "active", 1, "item", 3, "routerLinkActiveOptions"], ["routerLink", "charGen", "routerLinkActive", "active", 1, "item"], ["routerLink", "newChar", "routerLinkActive", "active", 1, "item"], ["routerLink", "party/search", "routerLinkActive", "active", 1, "item"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AppComponent_a_4_Template, 2, 2, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AppComponent_a_5_Template, 2, 0, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AppComponent_a_6_Template, 2, 0, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AppComponent_a_7_Template, 2, 0, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoggedIn);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoggedIn);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoggedIn);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoggedIn);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Welcome ", ctx.theUser["userName"], "");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]],
      styles: [".ui.secondary.pointing[_ngcontent-%COMP%]   .active.item[_ngcontent-%COMP%]{\r\n  color:#336699;\r\n  border-color:#336699\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2I7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVpLnNlY29uZGFyeS5wb2ludGluZyAuYWN0aXZlLml0ZW17XHJcbiAgY29sb3I6IzMzNjY5OTtcclxuICBib3JkZXItY29sb3I6IzMzNjY5OVxyXG59XHJcblxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], function () {
        return [{
          type: _services_char_data_service__WEBPACK_IMPORTED_MODULE_1__["CharDataService"]
        }, {
          type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts": function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _newChar_new_char_new_char_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./newChar/new-char/new-char.component */
    "./src/app/newChar/new-char/new-char.component.ts");
    /* harmony import */


    var _chargen_chargen_home_chargen_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./chargen/chargen-home/chargen-home.component */
    "./src/app/chargen/chargen-home/chargen-home.component.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/fesm2015/snack-bar.js");
    /* harmony import */


    var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/cdk/overlay */
    "./node_modules/@angular/cdk/fesm2015/overlay.js");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__["MatSnackBar"]],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_12__["OverlayModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_13__["FontAwesomeModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], _newChar_new_char_new_char_component__WEBPACK_IMPORTED_MODULE_6__["NewCharComponent"], _chargen_chargen_home_chargen_home_component__WEBPACK_IMPORTED_MODULE_7__["ChargenHomeComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_12__["OverlayModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_13__["FontAwesomeModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], _newChar_new_char_new_char_component__WEBPACK_IMPORTED_MODULE_6__["NewCharComponent"], _chargen_chargen_home_chargen_home_component__WEBPACK_IMPORTED_MODULE_7__["ChargenHomeComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_12__["OverlayModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_13__["FontAwesomeModule"]],
          providers: [_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__["MatSnackBar"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/chargen/chargen-home/chargen-home.component.ts": function srcAppChargenChargenHomeChargenHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChargenHomeComponent", function () {
      return ChargenHomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_char_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/char-data.service */
    "./src/app/services/char-data.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var _c0 = function _c0() {
      return {
        exact: true
      };
    };

    var ChargenHomeComponent =
    /*#__PURE__*/
    function () {
      function ChargenHomeComponent(charDataSvc) {
        var _this2 = this;

        _classCallCheck(this, ChargenHomeComponent);

        this.charDataSvc = charDataSvc;

        this.titleValue = function () {
          return _this2.charName;
        };
      }

      _createClass(ChargenHomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.charDataSvc.getCharID.subscribe(function (val) {
            return _this3.charID = val;
          });
          this.charDataSvc.getCharName.subscribe(function (val) {
            return _this3.charName = val;
          });
        }
      }]);

      return ChargenHomeComponent;
    }();

    ChargenHomeComponent.ɵfac = function ChargenHomeComponent_Factory(t) {
      return new (t || ChargenHomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_char_data_service__WEBPACK_IMPORTED_MODULE_1__["CharDataService"]));
    };

    ChargenHomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ChargenHomeComponent,
      selectors: [["app-chargen-home"]],
      decls: 23,
      vars: 5,
      consts: [[1, "ui", "secondary", "pointing", "menu"], ["routerLink", "./", "routerLinkActive", "active", 1, "item", 3, "routerLinkActiveOptions"], ["routerLink", "stats", "routerLinkActive", "active", 1, "item", 3, "routerLinkActiveOptions"], ["routerLink", "tohits", "routerLinkActive", "active", 1, "item"], ["routerLink", "saves", "routerLinkActive", "active", 1, "item"], ["routerLink", "skills", "routerLinkActive", "active", 1, "item"], ["routerLink", "feats", "routerLinkActive", "active", 1, "item"], ["routerLink", "equip", "routerLinkActive", "active", 1, "item"], ["routerLink", "notes", "routerLinkActive", "active", 1, "item"], ["routerLink", "spells", "routerLinkActive", "active", 1, "item"], [1, "ui", "segment"]],
      template: function ChargenHomeComponent_Template(rf, ctx) {
        if (rf & 1) {
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
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.titleValue());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJnZW4vY2hhcmdlbi1ob21lL2NoYXJnZW4taG9tZS5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChargenHomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-chargen-home',
          templateUrl: './chargen-home.component.html',
          styleUrls: ['./chargen-home.component.css']
        }]
      }], function () {
        return [{
          type: _services_char_data_service__WEBPACK_IMPORTED_MODULE_1__["CharDataService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/home.component.ts": function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/fesm2015/snack-bar.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var _c0 = ["confPasswordField"];

    function HomeComponent_form_11_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 4, 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function HomeComponent_form_11_Template_form_ngSubmit_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5.onSubmit($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", null, 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HomeComponent_form_11_Template_input_ngModelChange_8_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r7.userName = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HomeComponent_form_11_Template_input_ngModelChange_12_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r8.password = $event;
        });

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

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_form_11_Template_button_click_17_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r9.resendPassword();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Forgot Password");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.userName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.password);
      }
    }

    function HomeComponent_form_12_Template(rf, ctx) {
      if (rf & 1) {
        var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 4, 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function HomeComponent_form_12_Template_form_ngSubmit_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r13.onReSubmit($event);
        });

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

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HomeComponent_form_12_Template_input_ngModelChange_12_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r15.newPassword = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 21, 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HomeComponent_form_12_Template_input_ngModelChange_16_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r16.confPassword = $event;
        });

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
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.newPassword);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.confPassword);
      }
    }

    function HomeComponent_form_13_Template(rf, ctx) {
      if (rf & 1) {
        var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 4, 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function HomeComponent_form_13_Template_form_ngSubmit_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r20.onCreate($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", null, 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "New User");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HomeComponent_form_13_Template_input_ngModelChange_10_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r22.userName = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HomeComponent_form_13_Template_input_ngModelChange_14_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r23.emailAddress = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HomeComponent_form_13_Template_input_ngModelChange_18_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

          var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r24.newPassword = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 21, 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HomeComponent_form_13_Template_input_ngModelChange_22_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

          var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r25.confPassword = $event;
        });

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
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.userName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.emailAddress);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.newPassword);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.confPassword);
      }
    }

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent(userService, router, http, _snackBar) {
        var _this4 = this;

        _classCallCheck(this, HomeComponent);

        this.userService = userService;
        this.router = router;
        this.http = http;
        this._snackBar = _snackBar;

        this.onSubmit = function (evt) {
          evt.preventDefault();
          var body = {
            userEmail: _this4.userName,
            password: _this4.password
          };

          if (_this4.userName === 'guest' && _this4.password === 'Gu3st') {
            console.log('guest');
            var guest = {
              forcedReset: false,
              userEmail: "guest@guest.com",
              userID: 0,
              userName: "Guest",
              userPassword: null,
              isLoggedIn: true
            };

            _this4.userService.setUser(guest);

            _this4.router.navigate(['/charLoad']);

            return;
          }

          _this4.userService.loginUser(body).subscribe(function (val) {
            _this4.theUser = val;

            if (_this4.theUser.forcedReset) {
              _this4.isLoggedIn = true;
              _this4.isForced = true;
              return;
            } else {
              _this4.theUser.isLoggedIn = true;

              _this4.userService.setUser(_this4.theUser);

              _this4.router.navigate(['/charLoad']);
            }
          }, function (err) {
            _this4._snackBar.open('Invalid Login. Try Again', '', {
              duration: 2000,
              horizontalPosition: 'center',
              verticalPosition: 'top',
              panelClass: ['red-snackbar']
            });
          });
        };

        this.onReSubmit = function (evt) {
          evt.preventDefault();

          if (_this4.newPassword !== _this4.confPassword) {
            _this4.confPassword = '';

            _this4.confPasswordField.nativeElement.focus();

            _this4._snackBar.open('Passwords did not match, Try Again', '', {
              duration: 2000,
              horizontalPosition: 'center',
              verticalPosition: 'top',
              panelClass: ['red-snackbar']
            });

            return;
          }

          var body = {
            userName: _this4.emailAddress,
            password: _this4.newPassword,
            userID: _this4.theUser.userID
          };

          _this4.userService.resetPassword(body).subscribe(function (val) {
            var aValue = val;

            if (aValue['status'] === 'done') {
              _this4.theUser.isLoggedIn = true;
              _this4.theUser.forcedReset = false;

              _this4.userService.setUser(_this4.theUser);

              _this4.isForced = false;
              _this4.isLoggedIn = true;

              _this4.router.navigate(['/charLoad']);
            }
          });
        };

        this.onCreate = function (evt) {
          if (_this4.newPassword !== _this4.confPassword) {
            _this4.confPassword = '';

            _this4.confPasswordField.nativeElement.focus();

            _this4._snackBar.open('Passwords did not match, Try Again', '', {
              duration: 2000,
              horizontalPosition: 'center',
              verticalPosition: 'top',
              panelClass: ['red-snackbar']
            });

            return;
          }

          var body = {
            userName: _this4.userName,
            password: _this4.newPassword,
            userEmail: _this4.emailAddress
          };

          _this4.userService.insertUser(body).subscribe(function (val) {
            _this4.theUser = val;
            _this4.theUser.userPassword = null;

            _this4.userService.setUser(_this4.theUser);

            _this4.router.navigate(['/charLoad']);
          });
        };

        this.resendPassword = function () {
          var tempEmail = _this4.userName;
          _this4.userName = '';
          console.log(tempEmail);
          var body = {
            userEmail: tempEmail
          };

          _this4.userService.newPassword(body).subscribe(function (val) {
            _this4._snackBar.open('Password reset. Check your email', '', {
              duration: 2000,
              horizontalPosition: 'center',
              verticalPosition: 'top',
              panelClass: ['red-snackbar']
            });
          }, function (err) {
            _this4._snackBar.open('Email not found in database', '', {
              duration: 2000,
              horizontalPosition: 'center',
              verticalPosition: 'top',
              panelClass: ['red-snackbar']
            });
          });
        };
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          this.isNewUser = document.location.pathname === '/newUser';
          this.isForced = false;
          this.userService.getUser.subscribe(function (val) {
            return _this5.theUser = val;
          });
          this.isLoggedIn = this.theUser.userEmail !== undefined;
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]));
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      viewQuery: function HomeComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.confPasswordField = _t.first);
        }
      },
      decls: 14,
      vars: 3,
      consts: [[1, "ui", "grid"], [1, "ten", "wide", "column"], [1, "six", "wide", "column"], ["class", "ui large form", 3, "ngSubmit", 4, "ngIf"], [1, "ui", "large", "form", 3, "ngSubmit"], ["modForm", "ngForm"], ["formRoot", ""], [1, "ui", "stacked", "segment"], [1, "field"], [1, "ui", "left", "icon", "input"], [1, "user", "icon"], ["type", "text", "name", "email", "placeholder", "E-mail address", 3, "ngModel", "ngModelChange"], [1, "lock", "icon"], ["type", "password", "name", "password", "placeholder", "Password", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "ui", "fluid", "large", "primary", "button"], [2, "margin", "12px 0"], ["type", "button", 1, "ui", "fluid", "large", "primary", "button", 3, "click"], [1, "ui", "error", "message"], ["restForm", "ngForm"], ["restFormRoot", ""], ["type", "password", "name", "newPassword", "placeholder", "New Password", 3, "ngModel", "ngModelChange"], ["type", "password", "name", "confPassword", "placeholder", "Verify Password", 3, "ngModel", "ngModelChange"], ["confPasswordField", ""], ["type", "text", "name", "userName", "placeholder", "User's Name", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "emailAddress", "placeholder", "Email Address", 3, "ngModel", "ngModelChange"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Pathfinder Character Management System");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "This application allows for easy storage and access to all aspects of a Pathfinder character. All characters are visible to all users but you can only edit characters that you control.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Once you log in the top navigation bar will have an option to load a character or view details for a loaded character. Character details include Stats, To hits, Armor Class, Saves, Skills, Feats, Notes, Equipment, and Memorized Spells.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "DO NOT click on the refesh browser window as it will drop your token and you will need to log in again. To reload the page simple click on the tab you are currently viewing. The back and forward arrows of the browser work. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, HomeComponent_form_11_Template, 20, 2, "form", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, HomeComponent_form_12_Template, 21, 2, "form", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, HomeComponent_form_13_Template, 27, 4, "form", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoggedIn && !ctx.isNewUser);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isForced);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isNewUser);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"]],
      styles: [".ui.stacked.segment[_ngcontent-%COMP%]:after{\r\n  position: static;\r\n  border: 0px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudWkuc3RhY2tlZC5zZWdtZW50OmFmdGVye1xyXG4gIHBvc2l0aW9uOiBzdGF0aWM7XHJcbiAgYm9yZGVyOiAwcHg7XHJcbn1cclxuXHJcblxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.css']
        }]
      }], function () {
        return [{
          type: _services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]
        }];
      }, {
        confPasswordField: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['confPasswordField']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/newChar/new-char/new-char.component.ts": function srcAppNewCharNewCharNewCharComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewCharComponent", function () {
      return NewCharComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_char_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/char-data.service */
    "./src/app/services/char-data.service.ts");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    function NewCharComponent_option_66_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var al_r301 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", al_r301.alignID);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](al_r301.alignName);
      }
    }

    var NewCharComponent =
    /*#__PURE__*/
    function () {
      function NewCharComponent(charDataSvc, userDataService, router, http) {
        var _this6 = this;

        _classCallCheck(this, NewCharComponent);

        this.charDataSvc = charDataSvc;
        this.userDataService = userDataService;
        this.router = router;
        this.http = http;

        this.onCancel = function (evt) {
          console.log('evt');

          _this6.router.navigate(['/charLoad']);
        };

        this.onSubmit = function (evt) {
          evt.preventDefault();
          var body = {
            userID: _this6.loggedIn['userID'],
            charName: _this6.charName,
            charHP: _this6.charHP,
            raceID: _this6.charRace,
            alignID: _this6.charAlignment,
            classID: _this6.charClass,
            classLvl: _this6.charLevel
          };

          _this6.charDataSvc.addCharacter(body).subscribe(function (vals) {
            _this6.router.navigate(['/charLoad']);
          });
        };
      }

      _createClass(NewCharComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this7 = this;

          this.userDataService.getUser.subscribe(function (val) {
            return _this7.loggedIn = val;
          });
          this.charDataSvc.getAllAlignment.subscribe(function (val) {
            return _this7.theAlignments = val.results;
          });

          if (!this.theAlignments || this.theAlignments.length === 0) {
            this.charDataSvc.loadAlignments().subscribe(function (val) {
              _this7.theAlignments = val.results;

              _this7.charDataSvc.setAllAlignments(val);
            });
          }
        }
      }]);

      return NewCharComponent;
    }();

    NewCharComponent.ɵfac = function NewCharComponent_Factory(t) {
      return new (t || NewCharComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_char_data_service__WEBPACK_IMPORTED_MODULE_1__["CharDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]));
    };

    NewCharComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NewCharComponent,
      selectors: [["app-new-char"]],
      decls: 76,
      vars: 7,
      consts: [[1, "ui", "large", "form", 3, "ngSubmit"], ["modForm", "ngForm"], [1, "ui", "grid", "gridRow"], [1, "column", "sixteen", "wide", "ui", "input"], ["for", "charName"], ["type", "text", "name", "charName", 3, "ngModel", "ngModelChange"], [1, "column", "ui", "input", 2, "width", "calc(100% / 3)"], ["for", "charRace"], ["name", "charRace", 3, "ngModel", "ngModelChange"], ["value", "1"], ["value", "2"], ["value", "3"], ["value", "4"], ["value", "5"], ["value", "6"], ["value", "7"], ["for", "charClass"], ["name", "charClass", 3, "ngModel", "ngModelChange"], ["value", "0"], ["value", "8"], ["value", "9"], ["value", "10"], ["value", "11"], ["for", "charLevel"], ["type", "number", "name", "charLevel", 1, "spellInput", 3, "ngModel", "ngModelChange"], [1, "ui", "grid", "gridRow", 2, "width", "100%", "margin-bottom", "14px"], [1, "column", "wide", "ui", "input", 2, "width", "calc(100% / 6)"], ["for", "charAlignment"], ["name", "charAlignment", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "charHP"], ["type", "number", "name", "charHP", 1, "spellInput", 3, "ngModel", "ngModelChange"], [1, "container", 2, "text-align", "center", "margin-top", "24px"], ["type", "submit", 1, "ui", "primary", "button"], ["type", "button", 1, "ui", "yellow", "button", 2, "margin-left", "24px", 3, "click"], [3, "value"]],
      template: function NewCharComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "New Character");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function NewCharComponent_Template_form_ngSubmit_2_listener($event) {
            return ctx.onSubmit($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewCharComponent_Template_input_ngModelChange_9_listener($event) {
            return ctx.charName = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Race");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "select", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewCharComponent_Template_select_ngModelChange_13_listener($event) {
            return ctx.charRace = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "option", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Dwarf");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "option", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Elf");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "option", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Gnome");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "option", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Halfling");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "option", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Half-elf");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "option", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Half-orc");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "option", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Human");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Class");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "select", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewCharComponent_Template_select_ngModelChange_31_listener($event) {
            return ctx.charClass = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "option", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Select One");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "option", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Barbarian");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "option", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Bard");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "option", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Cleric");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "option", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Druid");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "option", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Fighter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "option", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Monk");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "option", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Paladin");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "option", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Ranger");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "option", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Rogue");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "option", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Sorcerer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "option", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Wizard");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "label", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Level");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "input", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewCharComponent_Template_input_ngModelChange_59_listener($event) {
            return ctx.charLevel = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "label", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Alignment");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "select", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewCharComponent_Template_select_ngModelChange_64_listener($event) {
            return ctx.charAlignment = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "option", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](66, NewCharComponent_option_66_Template, 2, 2, "option", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "label", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Hit Points");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "input", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewCharComponent_Template_input_ngModelChange_70_listener($event) {
            return ctx.charHP = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "button", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "button", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewCharComponent_Template_button_click_74_listener($event) {
            return ctx.onCancel($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.charName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.charRace);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.charClass);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.charLevel);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.charAlignment);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.theAlignments);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.charHP);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NumberValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25ld0NoYXIvbmV3LWNoYXIvbmV3LWNoYXIuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewCharComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-new-char',
          templateUrl: './new-char.component.html',
          styleUrls: ['./new-char.component.css']
        }]
      }], function () {
        return [{
          type: _services_char_data_service__WEBPACK_IMPORTED_MODULE_1__["CharDataService"]
        }, {
          type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/char-data.service.ts": function srcAppServicesCharDataServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CharDataService", function () {
      return CharDataService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var CharDataService =
    /*#__PURE__*/
    function () {
      function CharDataService(http) {
        var _this8 = this;

        _classCallCheck(this, CharDataService);

        this.http = http; // DECLARATIONS

        this.curCharID = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](0);
        this.charID = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](0);
        this.charBasics = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({
          results: {}
        });
        this.charName = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('');
        this.allFeats = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({
          results: []
        });
        this.allStats = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({
          results: []
        });
        this.allSaves = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({
          results: []
        });
        this.allSkills = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({
          results: []
        });
        this.allToHits = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({
          results: []
        });
        this.allEquipment = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({
          results: []
        });
        this.allAC = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({
          results: []
        });
        this.allNotes = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({
          results: []
        });
        this.allSpells = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({
          results: []
        });
        this.allAlignments = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({
          results: []
        }); // GETTERS

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
        this.getAllAlignment = this.allAlignments.asObservable();

        this.setCharBasics = function (arg) {
          _this8.charBasics.next(arg);
        };

        this.setAllFeats = function (arg) {
          _this8.allFeats.next(arg);
        };

        this.setStats = function (arg) {
          _this8.allStats.next(arg);
        };

        this.setSaves = function (arg) {
          _this8.allSaves.next(arg);
        };

        this.setAllSkills = function (arg) {
          _this8.allSkills.next(arg);
        };

        this.setAllNotes = function (arg) {
          _this8.allNotes.next(arg);
        };

        this.setAllToHits = function (arg) {
          _this8.allToHits.next(arg);
        };

        this.setAllEquipment = function (arg) {
          _this8.allEquipment.next(arg);
        };

        this.setAllACs = function (arg) {
          _this8.allAC.next(arg);
        };

        this.setAllSpells = function (arg) {
          _this8.allSpells.next(arg);
        };

        this.setAllAlignments = function (arg) {
          _this8.allAlignments.next(arg);
        }; // global reset


        this.reset = function () {
          _this8.charBasics.next(null);

          _this8.charName.next('');

          _this8.charID.next(0);

          _this8.allFeats.next(null);

          _this8.allSkills.next(null);

          _this8.allStats.next(null);

          _this8.allSaves.next(null);

          _this8.allToHits.next(null);

          _this8.allNotes.next(null);

          _this8.allSpells.next(null);
        }; // remote loaders
        // tslint:disable:max-line-length
        // CHARACTER


        this.loadCharBase = function (id) {
          var val = _this8.http.get('/api/characters/' + id, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Access-Control-Allow-Origin': '*'
            })
          });

          return val;
        };

        this.addCharacter = function (obj) {
          var val = _this8.http.post('/api/characters/new', Object.assign({}, obj), {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Access-Control-Allow-Origin': '*'
            })
          });

          return val;
        };

        this.insertClassLevels = function (obj) {
          var val = _this8.http.post('/api/characters/updateClass', Object.assign({}, obj), {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Access-Control-Allow-Origin': '*'
            })
          });

          return val;
        }; // STATS


        this.loadStats = function (arg) {
          var val = _this8.http.get('/api/stats/ ' + arg, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Access-Control-Allow-Origin': '*'
            })
          });

          return val;
        }; // FEATS


        this.loadFeats = function (id) {
          var val = _this8.http.get('/api/characters/feats/' + id, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Access-Control-Allow-Origin': '*'
            })
          });

          return val;
        };

        this.loadOtherFeats = function (arr) {
          var body = {
            val: arr.join(",")
          };

          var val = _this8.http.post('/api/feats/all', body, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Access-Control-Allow-Origin': '*'
            })
          });

          return val;
        };

        this.saveNewFeat = function (charID, feat) {
          var body = {
            charID: charID,
            feat: feat
          };

          var val = _this8.http.post('/api/feats/addFeat', body, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Access-Control-Allow-Origin': '*'
            })
          });

          return val;
        };

        this.deleteFeat = function (id) {
          var val = _this8.http["delete"]('/api/feats/delete/' + id, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Access-Control-Allow-Origin': '*'
            })
          });

          return val;
        }; // SKILLS


        this.loadSkills = function (id) {
          var val = _this8.http.get('/api/characters/skills/' + id, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Access-Control-Allow-Origin': '*'
            })
          });

          return val;
        };

        this.loadOtherSkills = function (arr) {
          var body = {
            val: arr.join(",")
          };

          var val = _this8.http.post('/api/skills/all', body, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Access-Control-Allow-Origin': '*'
            })
          });

          return val;
        };

        this.saveNewSkill = function (charID, skill) {
          var body = {
            charID: charID,
            skill: skill
          };

          var val = _this8.http.post('/api/skills/addSKill', body, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Access-Control-Allow-Origin': '*'
            })
          });

          return val;
        };

        this.updateAttribute = function (attType, obj) {
          var body = {
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
          var val;

          switch (attType) {
            case 'skill':
              val = _this8.http.post('/api/characters/updateSkill/', body, {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                  'Access-Control-Allow-Origin': '*'
                })
              });
              break;

            case 'stat':
              val = _this8.http.post('/api/characters/updateStat/', body, {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                  'Access-Control-Allow-Origin': '*'
                })
              });
              break;

            case 'save':
              val = _this8.http.post('/api/characters/updateSave/', body, {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                  'Access-Control-Allow-Origin': '*'
                })
              });
              break;

            case 'ac':
              val = _this8.http.post('/api/characters/ac/', body, {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                  'Access-Control-Allow-Origin': '*'
                })
              });
              break;

            case 'tohit':
              val = _this8.http.post('/api/characters/updateToHit/', body, {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                  'Access-Control-Allow-Origin': '*'
                })
              });
              break;

            default:
              break;
          }

          return val;
        };

        this.deleteAttribute = function (attType, attId) {
          var body = {
            id: attId
          };
          var val;

          switch (attType) {
            case 'skill':
              //val =  this.http.delete<any>('https://cors-anywhere.herokuapp.com/https://pathfinder-krc.herokuapp.com/api/characters/deleteSkill/'+attId);
              val = _this8.http["delete"]('/api/characters/deleteSkill/' + attId);
              break;

            case 'stat':
              //val =  this.http.delete<any>('https://cors-anywhere.herokuapp.com/https://pathfinder-krc.herokuapp.com/api/characters/deleteStat/'+attId);
              val = _this8.http["delete"]('/api/characters/deleteStat/' + attId);
              break;
              break;

            case 'save':
              //val =  this.http.delete<any>('https://cors-anywhere.herokuapp.com/https://pathfinder-krc.herokuapp.com/api/characters/deleteSave/'+attId);
              val = _this8.http["delete"]('/api/characters/deleteSave/' + attId);
              break;

            case 'ac':
              //val =  this.http.delete<any>('https://cors-anywhere.herokuapp.com/https://pathfinder-krc.herokuapp.com/api/characters/deleteAC/'+attId);
              val = _this8.http["delete"]('/api/characters/deleteAC/' + attId);
              break;

            case 'tohit':
              //val =  this.http.delete<any>('https://cors-anywhere.herokuapp.com/https://pathfinder-krc.herokuapp.com/api/characters/deleteToHit/'+attId);
              val = _this8.http["delete"]('/api/characters/deleteToHit/' + attId);
              break;

            default:
              break;
          }

          return val;
        }; // SAVES


        this.loadSaves = function (id) {
          //const val =  this.http.get<Saves>('https://cors-anywhere.herokuapp.com/https://pathfinder-krc.herokuapp.com/api/characters/saves/' + id, {
          var val = _this8.http.get('/api/characters/saves/' + id, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Access-Control-Allow-Origin': '*'
            })
          });

          return val;
        }; // TO HITS


        this.loadToHits = function (id) {
          //const val =  this.http.get<CharToHits>('https://cors-anywhere.herokuapp.com/https://pathfinder-krc.herokuapp.com/api/characters/toHits/' + id, {
          var val = _this8.http.get('/api/characters/toHits/' + id, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Access-Control-Allow-Origin': '*'
            })
          });

          return val;
        };

        this.newToHit = function (cID, obj) {
          var body = {
            id: obj.toHitID,
            toHitDesc: obj.toHitDesc,
            damage: obj.damage,
            critRange: obj.critRange,
            critDamage: obj.critDamage,
            charID: cID
          }; //const val = this.http.post<any>('https://cors-anywhere.herokuapp.com/https://pathfinder-krc.herokuapp.com/api/newToHit/', body, {

          var val = _this8.http.post('/api/newToHit/', body, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Access-Control-Allow-Origin': '*'
            })
          });

          return val;
        };

        this.reorderToHits = function (body) {
          var val = _this8.http.put('/api/newToHit/reorderToHits', body, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Access-Control-Allow-Origin': '*'
            })
          });

          return val;
        }; // EQUIPMENT


        this.loadEquipment = function (id) {
          //const val =  this.http.get<Equipment>('https://cors-anywhere.herokuapp.com/https://pathfinder-krc.herokuapp.com/api/characters/equip/' + id, {
          var val = _this8.http.get('/api/characters/equip/' + id, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Access-Control-Allow-Origin': '*'
            })
          });

          return val;
        };

        this.addEquipment = function (body) {
          //const val =  this.http.post<any>('https://cors-anywhere.herokuapp.com/https://pathfinder-krc.herokuapp.com/api/characters/equip/add', body, {
          var val = _this8.http.post('/api/characters/equip/add', body, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Access-Control-Allow-Origin': '*'
            })
          });

          return val;
        };

        this.deleteEquipment = function (id) {
          //const val =  this.http.delete<Equipment>('https://cors-anywhere.herokuapp.com/https://pathfinder-krc.herokuapp.com/api/characters/deleteequip/' + id, {
          var val = _this8.http["delete"]('/api/characters/deleteequip/' + id, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Access-Control-Allow-Origin': '*'
            })
          });

          return val;
        };

        this.reorderEqiup = function (body) {
          var val = _this8.http.put('/api/characters/equip/reorderEquip', body, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Access-Control-Allow-Origin': '*'
            })
          });

          return val;
        }; // AC


        this.loadAC = function (id) {
          //const val =  this.http.get<Equipment>('https://cors-anywhere.herokuapp.com/https://pathfinder-krc.herokuapp.com/api/characters/ac/' + id, {
          var val = _this8.http.get('/api/characters/ac/' + id, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Access-Control-Allow-Origin': '*'
            })
          });

          return val;
        }; // HP


        this.updateHP = function (charID, charHP) {
          var body = {
            charID: charID,
            charHP: charHP
          };

          var val = _this8.http.post('/api/characters/updateHP/', body, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Access-Control-Allow-Origin': '*'
            })
          });

          return val;
        }; // XP


        this.updateXP = function (charID, charXP) {
          var body = {
            charID: charID,
            charXP: charXP
          };

          var val = _this8.http.post('/api/characters/updateXP/', body, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Access-Control-Allow-Origin': '*'
            })
          });

          return val;
        }; // INITIATIVE


        this.updateInit = function (charID, init) {
          var body = {
            charID: charID,
            init: init
          };

          var val = _this8.http.post('/api/characters/updateInit/', body, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Access-Control-Allow-Origin': '*'
            })
          });

          return val;
        }; // NOTES


        this.loadNotes = function (charID) {
          var val = _this8.http.get('/api/notes/getCharNotes/' + charID.toString(), {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Access-Control-Allow-Origin': '*'
            })
          });

          return val;
        };

        this.loadNotesItems = function (noteID) {
          var val = _this8.http.get('/api/notes/getNoteItems/' + noteID, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Access-Control-Allow-Origin': '*'
            })
          });

          return val;
        };

        this.addNoteHeader = function (body) {
          //const val =  this.http.post<any>('https://cors-anywhere.herokuapp.com/https://pathfinder-krc.herokuapp.com/api/characters/equip/add', body, {
          var val = _this8.http.post('/api/notes/insertNoteHeader', body, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Access-Control-Allow-Origin': '*'
            })
          });

          return val;
        };

        this.addNoteItem = function (body) {
          //const val =  this.http.post<any>('https://cors-anywhere.herokuapp.com/https://pathfinder-krc.herokuapp.com/api/characters/equip/add', body, {
          var val = _this8.http.post('/api/notes/insertNoteItem', body, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Access-Control-Allow-Origin': '*'
            })
          });

          return val;
        };

        this.updateNoteHeader = function (body) {
          var val = _this8.http.post('/api/notes/updateNote', body, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Access-Control-Allow-Origin': '*'
            })
          });

          return val;
        };

        this.updateNoteItem = function (body) {
          var val = _this8.http.post('/api/notes/updateNoteItem', body, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Access-Control-Allow-Origin': '*'
            })
          });

          return val;
        };

        this.deleteNoteHeader = function (noteID) {
          var val = _this8.http.post('/api/notes/deleteNote/' + noteID, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Access-Control-Allow-Origin': '*'
            })
          });

          return val;
        };

        this.deleteNoteItem = function (id) {
          var val = _this8.http.post('/api/notes/deleteNoteItem/' + id, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Access-Control-Allow-Origin': '*'
            })
          });

          return val;
        };

        this.reorderNoteItems = function (body) {
          var val = _this8.http.put('/api/notes/reorderNoteItem', body, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Access-Control-Allow-Origin': '*'
            })
          });

          return val;
        };

        this.reorderNoteHeader = function (body) {
          var val = _this8.http.put('/api/notes/reorderNoteHeader', body, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Access-Control-Allow-Origin': '*'
            })
          });

          return val;
        }; // CLASSES


        this.loadClasses = function (id) {}; // SPELLS


        this.loadSpells = function (charID) {
          var val = _this8.http.get('/api/spells/getAllSpells/' + charID.toString(), {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Access-Control-Allow-Origin': '*'
            })
          });

          return val;
        };

        this.insertSpell = function (body) {
          var val = _this8.http.post('/api/spells/addASpell', body, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Access-Control-Allow-Origin': '*'
            })
          });

          return val;
        };

        this.toggleSpell = function (body) {
          var val = _this8.http.post('/api/spells/toggleSpell', body, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Access-Control-Allow-Origin': '*'
            })
          });

          return val;
        };

        this.updateSpell = function (body) {
          var val = _this8.http.post('/api/spells/updateASpell', body, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Access-Control-Allow-Origin': '*'
            })
          });

          return val;
        };

        this.deleteSpell = function (id) {
          var val = _this8.http["delete"]('/api/spells/deleteASpell/' + id, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Access-Control-Allow-Origin': '*'
            })
          });

          return val;
        }; // ALIGNMENTS


        this.loadAlignments = function () {
          var val = _this8.http.get('/api/alignments/', {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Access-Control-Allow-Origin': '*'
            })
          });

          return val;
        };
      } // SETTERS


      _createClass(CharDataService, [{
        key: "setCurCharID",
        value: function setCurCharID(arg) {
          this.curCharID.next(arg);
        }
      }, {
        key: "setCharID",
        value: function setCharID(arg) {
          this.charID.next(arg);
        }
      }, {
        key: "setCharName",
        value: function setCharName(arg) {
          this.charName.next(arg);
        }
      }]);

      return CharDataService;
    }();

    CharDataService.ɵfac = function CharDataService_Factory(t) {
      return new (t || CharDataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    CharDataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CharDataService,
      factory: CharDataService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CharDataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/user.service.ts": function srcAppServicesUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return UserService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var UserService =
    /*#__PURE__*/
    function () {
      function UserService(http) {
        var _this9 = this;

        _classCallCheck(this, UserService);

        this.http = http;
        this.user = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({}); // GETTERS

        this.getUser = this.user.asObservable();

        this.loginUser = function (body) {
          var val = _this9.http.post('/api/login', body, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Access-Control-Allow-Origin': '*'
            })
          });

          return val;
        };

        this.resetPassword = function (body) {
          var val = _this9.http.post('/api/login/resetPassword', body, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Access-Control-Allow-Origin': '*'
            })
          });

          return val;
        };

        this.insertUser = function (body) {
          var val = _this9.http.post('/api/login/insertUser', body, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Access-Control-Allow-Origin': '*'
            })
          });

          return val;
        };

        this.newPassword = function (body) {
          var val = _this9.http.post('/api/login/newPassword', body, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Access-Control-Allow-Origin': '*'
            })
          });

          return val;
        };
      } // SETTERS


      _createClass(UserService, [{
        key: "setUser",
        value: function setUser(arg) {
          this.user.next(arg);
        }
      }]);

      return UserService;
    }();

    UserService.ɵfac = function UserService_Factory(t) {
      return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: UserService,
      factory: UserService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts": function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
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

    /***/
  },

  /***/
  "./src/main.ts": function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0: function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Projects\angular\combinedChar\client\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map