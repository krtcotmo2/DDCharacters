(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/services/expendable.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/expendable.service.ts ***!
  \************************************************/
/*! exports provided: ExpendableType, ExpendableService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpendableType", function() { return ExpendableType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpendableService", function() { return ExpendableService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/__ivy_ngcc__/fesm2015/ngx-socket-io.js");






var ExpendableType;
(function (ExpendableType) {
    ExpendableType["Class"] = "Class";
    ExpendableType["Charge"] = "Charge";
    ExpendableType["Potion"] = "Potion";
    ExpendableType["Scroll"] = "Scroll";
})(ExpendableType || (ExpendableType = {}));
class ExpendableService {
    constructor(http, socket) {
        this.http = http;
        this.socket = socket;
        // DECLARATIONS
        this.allExpendables = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({ results: [] });
        // GETTERS
        this.getExpendables = this.allExpendables.asObservable();
        this.loadExpendables = (charID) => {
            const val = this.http.get('/api/expendables/get/' + charID.toString(), {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                    'Access-Control-Allow-Origin': '*'
                }),
            });
            return val;
        };
        this.insertExpendables = (body) => {
            const val = this.http.post('/api/expendables/add', body, {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                    'Access-Control-Allow-Origin': '*'
                }),
            });
            return val;
        };
        this.deleteExpendables = (expId) => {
            const val = this.http.delete('/api/expendables/delete/' + expId.toString(), {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                    'Access-Control-Allow-Origin': '*'
                }),
            });
            return val;
        };
        this.updateExpendables = (body) => {
            const val = this.http.post('/api/expendables/update', body, {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                    'Access-Control-Allow-Origin': '*'
                }),
            });
            this.socket.emit('UPDATEEXPENDABLE', body);
            return val;
        };
    }
    // SETTERS
    setExpendables(arg) { this.allExpendables.next(arg); }
}
ExpendableService.ɵfac = function ExpendableService_Factory(t) { return new (t || ExpendableService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_socket_io__WEBPACK_IMPORTED_MODULE_3__["Socket"])); };
ExpendableService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ExpendableService, factory: ExpendableService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExpendableService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_3__["Socket"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/socket.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/socket.service.ts ***!
  \********************************************/
/*! exports provided: SocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketService", function() { return SocketService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/__ivy_ngcc__/fesm2015/ngx-socket-io.js");



class SocketService {
    constructor(socket) {
        this.socket = socket;
    }
    getInitialData() {
        return this.createObserver('initial');
    }
    updateHP() {
        return this.createObserver('hpUupdate');
    }
    updateSpell() {
        return this.createObserver('spellUpdate');
    }
    addSpell() {
        return this.createObserver('addSpell');
    }
    deleteSpell() {
        return this.createObserver('deleteSpell');
    }
    changeSpell() {
        return this.createObserver('changeSpell');
    }
    addExpendable() {
        return this.createObserver('addExpendable');
    }
    deleteExpendable() {
        return this.createObserver('deleteExpendable');
    }
    updateExpendable() {
        return this.createObserver('updateExpendable');
    }
    createObserver(evt) {
        return this.socket.fromEvent(evt);
    }
}
SocketService.ɵfac = function SocketService_Factory(t) { return new (t || SocketService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_socket_io__WEBPACK_IMPORTED_MODULE_1__["Socket"])); };
SocketService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SocketService, factory: SocketService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SocketService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_1__["Socket"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map