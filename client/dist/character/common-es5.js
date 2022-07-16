function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
  /***/
  "./src/app/services/expendable.service.ts":
  /*!************************************************!*\
    !*** ./src/app/services/expendable.service.ts ***!
    \************************************************/

  /*! exports provided: ExpendableType, ExpendableService */

  /***/
  function srcAppServicesExpendableServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExpendableType", function () {
      return ExpendableType;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExpendableService", function () {
      return ExpendableService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var ngx_socket_io__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-socket-io */
    "./node_modules/ngx-socket-io/__ivy_ngcc__/fesm2015/ngx-socket-io.js");

    var ExpendableType;

    (function (ExpendableType) {
      ExpendableType["Class"] = "Class";
      ExpendableType["Charge"] = "Charge";
      ExpendableType["Potion"] = "Potion";
      ExpendableType["Scroll"] = "Scroll";
    })(ExpendableType || (ExpendableType = {}));

    var ExpendableService =
    /*#__PURE__*/
    function () {
      function ExpendableService(http, socket) {
        var _this = this;

        _classCallCheck(this, ExpendableService);

        this.http = http;
        this.socket = socket; // DECLARATIONS

        this.allExpendables = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({
          results: []
        }); // GETTERS

        this.getExpendables = this.allExpendables.asObservable();

        this.loadExpendables = function (charID) {
          var val = _this.http.get('/api/expendables/get/' + charID.toString(), {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Access-Control-Allow-Origin': '*'
            })
          });

          return val;
        };

        this.insertExpendables = function (body) {
          var val = _this.http.post('/api/expendables/add', body, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Access-Control-Allow-Origin': '*'
            })
          });

          return val;
        };

        this.deleteExpendables = function (expId) {
          var val = _this.http["delete"]('/api/expendables/delete/' + expId.toString(), {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Access-Control-Allow-Origin': '*'
            })
          });

          return val;
        };

        this.updateExpendables = function (body) {
          var val = _this.http.post('/api/expendables/update', body, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Access-Control-Allow-Origin': '*'
            })
          });

          _this.socket.emit('UPDATEEXPENDABLE', body);

          return val;
        };
      } // SETTERS


      _createClass(ExpendableService, [{
        key: "setExpendables",
        value: function setExpendables(arg) {
          this.allExpendables.next(arg);
        }
      }]);

      return ExpendableService;
    }();

    ExpendableService.ɵfac = function ExpendableService_Factory(t) {
      return new (t || ExpendableService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_socket_io__WEBPACK_IMPORTED_MODULE_3__["Socket"]));
    };

    ExpendableService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ExpendableService,
      factory: ExpendableService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExpendableService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_3__["Socket"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/socket.service.ts":
  /*!********************************************!*\
    !*** ./src/app/services/socket.service.ts ***!
    \********************************************/

  /*! exports provided: SocketService */

  /***/
  function srcAppServicesSocketServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SocketService", function () {
      return SocketService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ngx_socket_io__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ngx-socket-io */
    "./node_modules/ngx-socket-io/__ivy_ngcc__/fesm2015/ngx-socket-io.js");

    var SocketService =
    /*#__PURE__*/
    function () {
      function SocketService(socket) {
        _classCallCheck(this, SocketService);

        this.socket = socket;
      }

      _createClass(SocketService, [{
        key: "getInitialData",
        value: function getInitialData() {
          return this.createObserver('initial');
        }
      }, {
        key: "updateHP",
        value: function updateHP() {
          return this.createObserver('hpUupdate');
        }
      }, {
        key: "updateSpell",
        value: function updateSpell() {
          return this.createObserver('spellUpdate');
        }
      }, {
        key: "addSpell",
        value: function addSpell() {
          return this.createObserver('addSpell');
        }
      }, {
        key: "deleteSpell",
        value: function deleteSpell() {
          return this.createObserver('deleteSpell');
        }
      }, {
        key: "changeSpell",
        value: function changeSpell() {
          return this.createObserver('changeSpell');
        }
      }, {
        key: "addExpendable",
        value: function addExpendable() {
          return this.createObserver('addExpendable');
        }
      }, {
        key: "deleteExpendable",
        value: function deleteExpendable() {
          return this.createObserver('deleteExpendable');
        }
      }, {
        key: "updateExpendable",
        value: function updateExpendable() {
          return this.createObserver('updateExpendable');
        }
      }, {
        key: "createObserver",
        value: function createObserver(evt) {
          return this.socket.fromEvent(evt);
        }
      }]);

      return SocketService;
    }();

    SocketService.ɵfac = function SocketService_Factory(t) {
      return new (t || SocketService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_socket_io__WEBPACK_IMPORTED_MODULE_1__["Socket"]));
    };

    SocketService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: SocketService,
      factory: SocketService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SocketService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_1__["Socket"]
        }];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=common-es5.js.map