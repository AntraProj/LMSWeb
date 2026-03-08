(self["webpackChunkangular"] = self["webpackChunkangular"] || []).push([["common"],{

/***/ 6536:
/*!**************************************************************!*\
  !*** ./apps/angular/src/app/remote-entry/entry.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RemoteEntryComponent: () => (/* binding */ RemoteEntryComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 6571);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 9964);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3731);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_2__);




class RemoteEntryComponent {
  static {
    this.ɵfac = function RemoteEntryComponent_Factory(t) {
      return new (t || RemoteEntryComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: RemoteEntryComponent,
      selectors: [["lmsweb-angular-entry"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      decls: 1,
      vars: 0,
      template: function RemoteEntryComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "router-outlet");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
      encapsulation: 2
    });
  }
}

/***/ }),

/***/ 7299:
/*!***********************************************************!*\
  !*** ./apps/angular/src/app/remote-entry/entry.routes.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   remoteRoutes: () => (/* binding */ remoteRoutes)
/* harmony export */ });
/* harmony import */ var _entry_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entry.component */ 6536);

const remoteRoutes = [{
  path: '',
  component: _entry_component__WEBPACK_IMPORTED_MODULE_0__.RemoteEntryComponent,
  children: [{
    path: '',
    loadComponent: () => __webpack_require__.e(/*! import() */ "apps_angular_src_app_home_home_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../home/home.component */ 88)).then(m => m.HomeComponent)
  }]
}];

/***/ })

}])
//# sourceMappingURL=common.js.map