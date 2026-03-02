(self["webpackChunkangular"] = self["webpackChunkangular"] || []).push([["default-apps_angular_src_app_features_landing_landing_component_ts"],{

/***/ 466:
/*!********************************************************************!*\
  !*** ./apps/angular/src/app/features/landing/landing.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LandingComponent: () => (/* binding */ LandingComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 6571);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 9964);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/toolbar */ 706);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 7945);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_material_button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ 7425);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_material_card__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 7871);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_angular_material_icon__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _shared_layout_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/layout/header/header.component */ 4716);
/* harmony import */ var _shared_layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/layout/footer/footer.component */ 3262);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3731);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_8__);












class LandingComponent {
  static {
    this.ɵfac = function LandingComponent_Factory(t) {
      return new (t || LandingComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
      type: LandingComponent,
      selectors: [["lmsweb-landing"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵStandaloneFeature"]],
      decls: 53,
      vars: 0,
      consts: [[1, "container"], [1, "hero"], [1, "subtitle"], [1, "hero-actions"], ["mat-raised-button", "", "color", "primary", "routerLink", "/register"], ["mat-stroked-button", "", "color", "primary", "routerLink", "/login"], [1, "grid"], [1, "card"], [1, "stats"], [1, "stats-inner"], [1, "stat"], [1, "value"], [1, "label"]],
      template: function LandingComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "lmsweb-header");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "Streamline Your Course");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](5, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6, "Learning Management");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8, " An intuitive Learning Management System that helps educators deliver engaging courses while giving students a seamless learning experience and real-time progress tracking. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "div", 3)(10, "a", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11, "Get Started Free");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "a", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13, "Login");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "div", 6)(15, "mat-card", 7)(16, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](17, "Ticket Assignment");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](19, "Assign course tickets to students with custom workflows and priorities.");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "mat-card", 7)(21, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](22, "Progress Tracking");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](24, "Monitor ticket status, completion rates, and student performance in real-time.");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](25, "mat-card", 7)(26, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](27, "Team Collaboration");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](28, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](29, "Collaborate with instructors, assign reviewers, and communicate effectively.");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](30, "mat-card", 7)(31, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](32, "Workflow Automation");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](33, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](34, "Automate ticket routing, notifications, and course assignment processes.");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](35, "div", 8)(36, "div", 9)(37, "div", 10)(38, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](39, "50,000+");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](40, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](41, "Tickets Managed");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](42, "div", 10)(43, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](44, "10,000+");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](45, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](46, "Active Students");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](47, "div", 10)(48, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](49, "95%");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](50, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](51, "On-Time Completion");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](52, "lmsweb-footer");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__.MatToolbarModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatAnchor, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCard, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIconModule, _shared_layout_header_header_component__WEBPACK_IMPORTED_MODULE_6__.HeaderComponent, _shared_layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__.FooterComponent],
      styles: [".toolbar[_ngcontent-%COMP%] {\n  padding: 0 24px;\n  height: 56px;\n}\n\n.brand[_ngcontent-%COMP%] {\n  font-weight: 600;\n  letter-spacing: 0.2px;\n}\n\n.spacer[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n\n.container[_ngcontent-%COMP%] {\n  max-width: 1080px;\n  margin: 0 auto;\n  padding: 64px 16px 24px;\n}\n\n\n.hero[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 44px;\n  line-height: 1.15;\n  font-weight: 700;\n  margin: 0 0 16px;\n  color: #111827;\n}\n\n.subtitle[_ngcontent-%COMP%] {\n  max-width: 760px;\n  margin: 0 auto 28px;\n  line-height: 1.7;\n  font-size: 14px;\n  color: #6b7280;\n}\n\n.hero-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 14px;\n  margin: 10px 0 56px;\n}\n\n\n.grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(320px, 1fr));\n  gap: 18px;\n  margin-top: 12px;\n}\n\n\n.card[_ngcontent-%COMP%] {\n  padding: 18px 18px 16px;\n  border-radius: 10px;\n  border: 1px solid #eef2ff;\n  box-shadow: none; \n}\n\n.card[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 26px;\n  height: 26px;\n  width: 26px;\n  margin-bottom: 10px;\n  color: #3b82f6; \n}\n\n.card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 6px 0 6px;\n  font-size: 14px;\n  font-weight: 700;\n  color: #111827;\n}\n\n.card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 12px;\n  line-height: 1.6;\n  color: #6b7280;\n}\n\n\n.stats[_ngcontent-%COMP%] {\n  margin-top: 64px;\n  background: #eef3ff; \n  padding: 54px 16px;\n}\n\n.stats-inner[_ngcontent-%COMP%] {\n  max-width: 1080px;\n  margin: 0 auto;\n  display: flex;\n  justify-content: center;\n  gap: 64px;\n}\n\n.stat[_ngcontent-%COMP%] {\n  text-align: center;\n  min-width: 160px;\n}\n\n.value[_ngcontent-%COMP%] {\n  font-size: 44px;\n  font-weight: 800;\n  color: #1f2a6b; \n  letter-spacing: 0.3px;\n}\n\n.label[_ngcontent-%COMP%] {\n  margin-top: 6px;\n  font-size: 12px;\n  color: #6b7280;\n}\n\n\n\n\n@media (max-width: 840px) {\n  .grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .stats-inner[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 20px;\n    align-items: center;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvYW5ndWxhci9zcmMvYXBwL2ZlYXR1cmVzL2xhbmRpbmcvbGFuZGluZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLGVBQWU7RUFDZixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsT0FBTztBQUNUOzs7QUFHQTtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsdUJBQXVCO0FBQ3pCOzs7QUFHQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLFNBQVM7RUFDVCxtQkFBbUI7QUFDckI7OztBQUdBO0VBQ0UsYUFBYTtFQUNiLG9EQUFvRDtFQUNwRCxTQUFTO0VBQ1QsZ0JBQWdCO0FBQ2xCOzs7QUFHQTtFQUNFLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osV0FBVztFQUNYLG1CQUFtQjtFQUNuQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7OztBQUdBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsY0FBYztFQUNkLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsU0FBUztBQUNYOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixlQUFlO0VBQ2YsY0FBYztBQUNoQjs7Ozs7QUFLQTtFQUNFO0lBQ0UsMEJBQTBCO0VBQzVCO0VBQ0E7SUFDRSxzQkFBc0I7SUFDdEIsU0FBUztJQUNULG1CQUFtQjtFQUNyQjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi50b29sYmFyIHtcclxuICBwYWRkaW5nOiAwIDI0cHg7XHJcbiAgaGVpZ2h0OiA1NnB4O1xyXG59XHJcblxyXG4uYnJhbmQge1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xyXG59XHJcblxyXG4uc3BhY2VyIHtcclxuICBmbGV4OiAxO1xyXG59XHJcblxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgbWF4LXdpZHRoOiAxMDgwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgcGFkZGluZzogNjRweCAxNnB4IDI0cHg7XHJcbn1cclxuXHJcblxyXG4uaGVybyB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uaGVybyBoMSB7XHJcbiAgZm9udC1zaXplOiA0NHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjE1O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgbWFyZ2luOiAwIDAgMTZweDtcclxuICBjb2xvcjogIzExMTgyNztcclxufVxyXG5cclxuLnN1YnRpdGxlIHtcclxuICBtYXgtd2lkdGg6IDc2MHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvIDI4cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNztcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgY29sb3I6ICM2YjcyODA7XHJcbn1cclxuXHJcbi5oZXJvLWFjdGlvbnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZ2FwOiAxNHB4O1xyXG4gIG1hcmdpbjogMTBweCAwIDU2cHg7XHJcbn1cclxuXHJcblxyXG4uZ3JpZCB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBtaW5tYXgoMzIwcHgsIDFmcikpO1xyXG4gIGdhcDogMThweDtcclxuICBtYXJnaW4tdG9wOiAxMnB4O1xyXG59XHJcblxyXG5cclxuLmNhcmQge1xyXG4gIHBhZGRpbmc6IDE4cHggMThweCAxNnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2VlZjJmZjtcclxuICBib3gtc2hhZG93OiBub25lOyBcclxufVxyXG5cclxuLmNhcmQgbWF0LWljb24ge1xyXG4gIGZvbnQtc2l6ZTogMjZweDtcclxuICBoZWlnaHQ6IDI2cHg7XHJcbiAgd2lkdGg6IDI2cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBjb2xvcjogIzNiODJmNjsgXHJcbn1cclxuXHJcbi5jYXJkIGgzIHtcclxuICBtYXJnaW46IDZweCAwIDZweDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBjb2xvcjogIzExMTgyNztcclxufVxyXG5cclxuLmNhcmQgcCB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBsaW5lLWhlaWdodDogMS42O1xyXG4gIGNvbG9yOiAjNmI3MjgwO1xyXG59XHJcblxyXG5cclxuLnN0YXRzIHtcclxuICBtYXJnaW4tdG9wOiA2NHB4O1xyXG4gIGJhY2tncm91bmQ6ICNlZWYzZmY7IFxyXG4gIHBhZGRpbmc6IDU0cHggMTZweDtcclxufVxyXG5cclxuLnN0YXRzLWlubmVyIHtcclxuICBtYXgtd2lkdGg6IDEwODBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGdhcDogNjRweDtcclxufVxyXG5cclxuLnN0YXQge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtaW4td2lkdGg6IDE2MHB4O1xyXG59XHJcblxyXG4udmFsdWUge1xyXG4gIGZvbnQtc2l6ZTogNDRweDtcclxuICBmb250LXdlaWdodDogODAwO1xyXG4gIGNvbG9yOiAjMWYyYTZiOyBcclxuICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XHJcbn1cclxuXHJcbi5sYWJlbCB7XHJcbiAgbWFyZ2luLXRvcDogNnB4O1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBjb2xvcjogIzZiNzI4MDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDg0MHB4KSB7XHJcbiAgLmdyaWQge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgfVxyXG4gIC5zdGF0cy1pbm5lciB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiAyMHB4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ })

}])
//# sourceMappingURL=default-apps_angular_src_app_features_landing_landing_component_ts.js.map