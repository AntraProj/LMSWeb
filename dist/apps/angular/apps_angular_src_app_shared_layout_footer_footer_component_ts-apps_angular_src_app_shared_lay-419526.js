(self["webpackChunkangular"] = self["webpackChunkangular"] || []).push([["apps_angular_src_app_shared_layout_footer_footer_component_ts-apps_angular_src_app_shared_lay-419526"],{

/***/ 3262:
/*!***********************************************************************!*\
  !*** ./apps/angular/src/app/shared/layout/footer/footer.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FooterComponent: () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 6571);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3731);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);


class FooterComponent {
  static {
    this.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["lmsweb-footer"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 3,
      vars: 0,
      consts: [[1, "footer"], [1, "footer-inner"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "footer", 0)(1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u00A9 2026 Antra LMS. All rights reserved.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule],
      styles: [".footer[_ngcontent-%COMP%] {\n  background: #2f3ea8; \n  color: white;\n  padding: 18px 16px;\n  margin-top: 0;\n}\n\n.footer-inner[_ngcontent-%COMP%] {\n  max-width: 1080px;\n  margin: 0 auto;\n  text-align: center;\n  font-size: 13px;\n  opacity: 0.95;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvYW5ndWxhci9zcmMvYXBwL3NoYXJlZC9sYXlvdXQvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGFBQWE7QUFDZiIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXIge1xyXG4gIGJhY2tncm91bmQ6ICMyZjNlYTg7IFxyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAxOHB4IDE2cHg7XHJcbiAgbWFyZ2luLXRvcDogMDtcclxufVxyXG5cclxuLmZvb3Rlci1pbm5lciB7XHJcbiAgbWF4LXdpZHRoOiAxMDgwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBvcGFjaXR5OiAwLjk1O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 4716:
/*!***********************************************************************!*\
  !*** ./apps/angular/src/app/shared/layout/header/header.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeaderComponent: () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 6571);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 9964);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/toolbar */ 706);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 7945);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_material_button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3731);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_4__);








class HeaderComponent {
  static {
    this.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["lmsweb-header"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
      decls: 8,
      vars: 0,
      consts: [["color", "primary", 1, "toolbar"], ["routerLink", "/", 1, "brand"], [1, "spacer"], ["mat-button", "", "routerLink", "/login"], ["mat-raised-button", "", "routerLink", "/register", 1, "btn-light-blue"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-toolbar", 0)(1, "span", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Antra LMS");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "span", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "a", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Login");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "a", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Get Started");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__.MatToolbarModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__.MatToolbar, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatAnchor],
      styles: [".toolbar[_ngcontent-%COMP%] {\n  padding: 0 24px;\n  height: 56px;\n}\n.brand[_ngcontent-%COMP%] { font-weight: 600; letter-spacing: 0.2px; }\n.spacer[_ngcontent-%COMP%] { flex: 1; }\n\n.btn-light-blue[_ngcontent-%COMP%] {\n  background: #3b82f6 !important;\n  color: white !important;\n  \n  border-radius: 6px;\n  \n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvYW5ndWxhci9zcmMvYXBwL3NoYXJlZC9sYXlvdXQvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7QUFDZDtBQUNBLFNBQVMsZ0JBQWdCLEVBQUUscUJBQXFCLEVBQUU7QUFDbEQsVUFBVSxPQUFPLEVBQUU7O0FBRW5CO0VBQ0UsOEJBQThCO0VBQzlCLHVCQUF1Qjs7RUFFdkIsa0JBQWtCOztBQUVwQiIsInNvdXJjZXNDb250ZW50IjpbIi50b29sYmFyIHtcclxuICBwYWRkaW5nOiAwIDI0cHg7XHJcbiAgaGVpZ2h0OiA1NnB4O1xyXG59XHJcbi5icmFuZCB7IGZvbnQtd2VpZ2h0OiA2MDA7IGxldHRlci1zcGFjaW5nOiAwLjJweDsgfVxyXG4uc3BhY2VyIHsgZmxleDogMTsgfVxyXG5cclxuLmJ0bi1saWdodC1ibHVlIHtcclxuICBiYWNrZ3JvdW5kOiAjM2I4MmY2ICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgXHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIFxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ })

}])
//# sourceMappingURL=apps_angular_src_app_shared_layout_footer_footer_component_ts-apps_angular_src_app_shared_lay-419526.js.map