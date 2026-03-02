(self["webpackChunkangular"] = self["webpackChunkangular"] || []).push([["apps_angular_src_bootstrap_ts"],{

/***/ 3095:
/*!********************************************!*\
  !*** ./apps/angular/src/app/app.config.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   appConfig: () => (/* binding */ appConfig)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 9964);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.routes */ 6060);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ 6156);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__);



const appConfig = {
  providers: [(0,_angular_router__WEBPACK_IMPORTED_MODULE_0__.provideRouter)(_app_routes__WEBPACK_IMPORTED_MODULE_1__.appRoutes), (0,_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__.provideAnimations)()]
};

/***/ }),

/***/ 6060:
/*!********************************************!*\
  !*** ./apps/angular/src/app/app.routes.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   appRoutes: () => (/* binding */ appRoutes)
/* harmony export */ });
/* harmony import */ var _features_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./features/sign-in/sign-in.component */ 2275);
/* harmony import */ var _features_landing_landing_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./features/landing/landing.component */ 466);
/* harmony import */ var _features_emailVerification_emailVerification_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./features/emailVerification/emailVerification.component */ 1131);
/* harmony import */ var _features_register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./features/register/register.component */ 1016);




const appRoutes = [{
  path: '',
  component: _features_landing_landing_component__WEBPACK_IMPORTED_MODULE_1__.LandingComponent
}, {
  path: 'login',
  component: _features_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_0__.SignInComponent
}, {
  path: 'verify',
  component: _features_emailVerification_emailVerification_component__WEBPACK_IMPORTED_MODULE_2__.EmailVerificationComponent
}, {
  path: 'register',
  component: _features_register_register_component__WEBPACK_IMPORTED_MODULE_3__.RegisterComponent
}];

/***/ }),

/***/ 1131:
/*!****************************************************************************************!*\
  !*** ./apps/angular/src/app/features/emailVerification/emailVerification.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmailVerificationComponent: () => (/* binding */ EmailVerificationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3731);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6571);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 6751);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_forms__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ 7425);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_material_card__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 7945);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_material_button__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 7871);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_angular_material_icon__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _shared_layout_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/layout/header/header.component */ 4716);
/* harmony import */ var _shared_layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/layout/footer/footer.component */ 3262);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 9964);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_8__);
















function EmailVerificationComponent_input_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 16);
  }
}
const _c0 = () => ["/login"];
class EmailVerificationComponent {
  constructor() {
    this.countdown = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(37);
    this.fb = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder);
    this.otpForm = this.fb.group({
      digits: this.fb.array(Array(6).fill('').map(() => this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.pattern('[0-9]')])))
    });
  }
  get digits() {
    return this.otpForm.get('digits');
  }
  static {
    this.ɵfac = function EmailVerificationComponent_Factory(t) {
      return new (t || EmailVerificationComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EmailVerificationComponent,
      selectors: [["lmsweb-email-verification"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 45,
      vars: 6,
      consts: [[1, "emailVerify"], [1, "emailVerify-logo__h1"], [1, "email-verify__card"], [1, "icon-wrapper"], [1, "email-verify__subtitle"], [3, "formGroup"], [1, "email-Otp__container"], ["type", "text", "maxlength", "1", 4, "ngFor", "ngForOf"], ["color", "primary", "type", "submit", 1, "verify-btn", 3, "disabled"], [1, "resend"], [1, "email-info__box"], ["mat-outlined-button", "", "mat-stroked-button", "", "color", "primary", 1, "email-back__btn", 3, "routerLink"], [1, "email-divider"], [1, "email-support__section"], [1, "email-help__text"], ["href", "#", 1, "email-support__link"], ["type", "text", "maxlength", "1"]],
      template: function EmailVerificationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "lmsweb-header");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0)(2, "h1", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Antra LMS");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card", 2)(5, "div", 3)(6, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "mail");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Verify Your Email");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " We've sent a 6-digit verification code to ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "your@email.com");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Please enter the code below to verify your account. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "form", 5)(18, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, EmailVerificationComponent_input_19_Template, 1, 0, "input", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Verify Email ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Resend code in ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 10)(27, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "info");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div")(30, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Didn't receive the code?");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Check your spam folder or wait for the timer to resend");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 11)(35, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "arrow_back");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Back to Sign In\n");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 13)(40, "p", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Need help?");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Contact Support");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "lmsweb-footer");
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.otpForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.digits.controls);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.otpForm.invalid);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.countdown(), "s");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCard, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButton, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLink, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon, _shared_layout_header_header_component__WEBPACK_IMPORTED_MODULE_6__.HeaderComponent, _shared_layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__.FooterComponent],
      styles: [".emailVerify[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background: #f4f6fb;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-top: 20px;\n}\n\n.emailVerify-logo__h1[_ngcontent-%COMP%] {\n   color: #2F3E9E;\n    font-size: 16px;\n    font-weight: 600;\n    margin: 30px;\n}\n\n.email-verify__card[_ngcontent-%COMP%]{\n  width: 480px;\n  padding: 40px;\n  border-radius: 16px;\n  text-align: center;\n  border: 1px solid #e5e7eb; \n  background-color: white; \n  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);\n  margin-bottom:40px ;\n}\n\n.icon-wrapper[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  background: #e8ecff;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 20px;\n}\n\n\n\n.icon-wrapper[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 26px;\n  color: #3f51b5;\n \n}\n\nh2[_ngcontent-%COMP%] {\n  font-size: 28px;\n  margin-bottom: 12px;\n}\n\n.email-verify__subtitle[_ngcontent-%COMP%] {\n  color: #666;\n  margin-bottom: 30px;\n}\n\n.email-Otp__container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 12px;\n  margin-bottom: 25px;\n}\n\n\n\n.email-Otp__container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 55px;\n  height: 55px;\n  text-align: center;\n  font-size: 20px;\n  border-radius: 10px;\n  border: 1px solid #ddd;\n  outline: none;\n  transition: 0.2s;\n}\n\n\n\n.email-Otp__container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border-color: #3f51b5;\n  box-shadow: 0 0 0 2px rgba(63, 81, 181, 0.2);\n}\n.email-info__box[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{\n  display: flex;\n  flex-direction: column;\n  font-size: 16px;\n  gap:10px\n}\n\n.verify-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 48px;\n  border-radius: 10px;\n  margin-bottom: 15px;\n  background-color: rgb(235, 235, 235);\n  border: none;\n  font-weight: bold;\n}\n\n.resend[_ngcontent-%COMP%] {\n  color: #555;\n  margin-bottom: 25px;\n}\n\n.email-info__box[_ngcontent-%COMP%]{\n  display: flex;\n  gap: 12px;\n  background: #eef2ff;\n  padding: 15px;\n  border-radius: 10px;\n  text-align: left;\n}\n\n\n\n.email-info__box[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #3f51b5;\n}\n\n\n\n.email-info__box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 13px;\n  color: #555;\n}\n\n.email-back__btn[_ngcontent-%COMP%]{\n  width: 100%;\n  height: 48px;\n  border-radius: 12px;\n  color: #3f51b5;\n  margin-top: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  border-color: #3f51b5 !important;\n  color:  #3f51b5 !important;\n  \n}\n\n\n\n.email-divider[_ngcontent-%COMP%] {\n  height: 1px;\n  background: #e0e0e0;\n  margin: 30px 0 20px 0;\n}\n\n\n\n.email-support__section[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.email-help__text[_ngcontent-%COMP%] {\n  color: #9e9e9e;\n  margin-bottom: 8px;\n}\n\n.email-support__link[_ngcontent-%COMP%] {\n  color: #3f51b5;\n  text-decoration: none;\n  font-weight: 500;\n  cursor: pointer;\n}\n\n.support-link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvYW5ndWxhci9zcmMvYXBwL2ZlYXR1cmVzL2VtYWlsVmVyaWZpY2F0aW9uL2VtYWlsVmVyaWZpY2F0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUNuQjs7QUFFQTtHQUNHLGNBQWM7SUFDYixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFlBQVk7QUFDaEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLHVCQUF1QjtFQUN2QiwyQ0FBMkM7RUFDM0MsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQSxtQ0FBbUM7QUFDbkM7RUFDRSxlQUFlO0VBQ2YsY0FBYzs7QUFFaEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztFQUNYLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsU0FBUztFQUNULG1CQUFtQjtBQUNyQjs7QUFFQSwyQkFBMkI7QUFDM0I7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsZ0JBQWdCO0FBQ2xCOztBQUVBLHNCQUFzQjtBQUN0QjtFQUNFLHFCQUFxQjtFQUNyQiw0Q0FBNEM7QUFDOUM7QUFDQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsZUFBZTtFQUNmO0FBQ0Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsb0NBQW9DO0VBQ3BDLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7RUFDVCxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBRUEsOEJBQThCO0FBQzlCO0VBQ0UsY0FBYztBQUNoQjs7QUFFQSx1QkFBdUI7QUFDdkI7RUFDRSxTQUFTO0VBQ1QsZUFBZTtFQUNmLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsUUFBUTtFQUNSLGdDQUFnQztFQUNoQywwQkFBMEI7O0FBRTVCOztBQUVBLGlCQUFpQjtBQUNqQjtFQUNFLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIscUJBQXFCO0FBQ3ZCOztBQUVBLG9CQUFvQjtBQUNwQjtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCIiwic291cmNlc0NvbnRlbnQiOlsiLmVtYWlsVmVyaWZ5IHtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICBiYWNrZ3JvdW5kOiAjZjRmNmZiO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xyXG59XHJcblxyXG4uZW1haWxWZXJpZnktbG9nb19faDEge1xyXG4gICBjb2xvcjogIzJGM0U5RTtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBtYXJnaW46IDMwcHg7XHJcbn1cclxuXHJcbi5lbWFpbC12ZXJpZnlfX2NhcmR7XHJcbiAgd2lkdGg6IDQ4MHB4O1xyXG4gIHBhZGRpbmc6IDQwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2U1ZTdlYjsgXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7IFxyXG4gIGJveC1zaGFkb3c6IDAgMTBweCAyNXB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XHJcbiAgbWFyZ2luLWJvdHRvbTo0MHB4IDtcclxufVxyXG5cclxuLmljb24td3JhcHBlciB7XHJcbiAgd2lkdGg6IDgwcHg7XHJcbiAgaGVpZ2h0OiA4MHB4O1xyXG4gIGJhY2tncm91bmQ6ICNlOGVjZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXJnaW46IDAgYXV0byAyMHB4O1xyXG59XHJcblxyXG4vKiBDb252ZXJ0ZWQgZnJvbSBuZXN0ZWQgbWF0LWljb24gKi9cclxuLmljb24td3JhcHBlciBtYXQtaWNvbiB7XHJcbiAgZm9udC1zaXplOiAyNnB4O1xyXG4gIGNvbG9yOiAjM2Y1MWI1O1xyXG4gXHJcbn1cclxuXHJcbmgyIHtcclxuICBmb250LXNpemU6IDI4cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxufVxyXG5cclxuLmVtYWlsLXZlcmlmeV9fc3VidGl0bGUge1xyXG4gIGNvbG9yOiAjNjY2O1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbi5lbWFpbC1PdHBfX2NvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBnYXA6IDEycHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxufVxyXG5cclxuLyogQ29udmVydGVkIG5lc3RlZCBpbnB1dCAqL1xyXG4uZW1haWwtT3RwX19jb250YWluZXIgaW5wdXQge1xyXG4gIHdpZHRoOiA1NXB4O1xyXG4gIGhlaWdodDogNTVweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIHRyYW5zaXRpb246IDAuMnM7XHJcbn1cclxuXHJcbi8qIENvbnZlcnRlZCAmOmZvY3VzICovXHJcbi5lbWFpbC1PdHBfX2NvbnRhaW5lciBpbnB1dDpmb2N1cyB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjM2Y1MWI1O1xyXG4gIGJveC1zaGFkb3c6IDAgMCAwIDJweCByZ2JhKDYzLCA4MSwgMTgxLCAwLjIpO1xyXG59XHJcbi5lbWFpbC1pbmZvX19ib3ggZGl2e1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZ2FwOjEwcHhcclxufVxyXG5cclxuLnZlcmlmeS1idG4ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNDhweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNSwgMjM1LCAyMzUpO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLnJlc2VuZCB7XHJcbiAgY29sb3I6ICM1NTU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxufVxyXG5cclxuLmVtYWlsLWluZm9fX2JveHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdhcDogMTJweDtcclxuICBiYWNrZ3JvdW5kOiAjZWVmMmZmO1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4vKiBDb252ZXJ0ZWQgbmVzdGVkIG1hdC1pY29uICovXHJcbi5lbWFpbC1pbmZvX19ib3ggbWF0LWljb24ge1xyXG4gIGNvbG9yOiAjM2Y1MWI1O1xyXG59XHJcblxyXG4vKiBDb252ZXJ0ZWQgbmVzdGVkIHAgKi9cclxuLmVtYWlsLWluZm9fX2JveCBwIHtcclxuICBtYXJnaW46IDA7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGNvbG9yOiAjNTU1O1xyXG59XHJcblxyXG4uZW1haWwtYmFja19fYnRue1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNDhweDtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIGNvbG9yOiAjM2Y1MWI1O1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGdhcDogOHB4O1xyXG4gIGJvcmRlci1jb2xvcjogIzNmNTFiNSAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiAgIzNmNTFiNSAhaW1wb3J0YW50O1xyXG4gIFxyXG59XHJcblxyXG4vKiBEaXZpZGVyIGxpbmUgKi9cclxuLmVtYWlsLWRpdmlkZXIge1xyXG4gIGhlaWdodDogMXB4O1xyXG4gIGJhY2tncm91bmQ6ICNlMGUwZTA7XHJcbiAgbWFyZ2luOiAzMHB4IDAgMjBweCAwO1xyXG59XHJcblxyXG4vKiBTdXBwb3J0IHNlY3Rpb24gKi9cclxuLmVtYWlsLXN1cHBvcnRfX3NlY3Rpb24ge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmVtYWlsLWhlbHBfX3RleHQge1xyXG4gIGNvbG9yOiAjOWU5ZTllO1xyXG4gIG1hcmdpbi1ib3R0b206IDhweDtcclxufVxyXG5cclxuLmVtYWlsLXN1cHBvcnRfX2xpbmsge1xyXG4gIGNvbG9yOiAjM2Y1MWI1O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnN1cHBvcnQtbGluazpob3ZlciB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 2275:
/*!********************************************************************!*\
  !*** ./apps/angular/src/app/features/sign-in/sign-in.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SignInComponent: () => (/* binding */ SignInComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 6571);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/form-field */ 1940);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ 7871);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_material_icon__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/input */ 5168);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_material_input__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 7945);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_material_button__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 2210);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_angular_common_http__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _shared_layout_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/layout/header/header.component */ 4716);
/* harmony import */ var _shared_layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/layout/footer/footer.component */ 3262);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3731);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_8__);













class SignInComponent {
  constructor() {
    this.hide = true;
  }
  static {
    this.ɵfac = function SignInComponent_Factory(t) {
      return new (t || SignInComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
      type: SignInComponent,
      selectors: [["lmsweb-sign-in"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵStandaloneFeature"]],
      decls: 43,
      vars: 2,
      consts: [[1, "page"], [1, "header"], ["href", "#", 1, "antra-lms-link"], [1, "sign-in-container"], ["appearance", "outline"], ["matPrefix", ""], ["matInput", "", "placeholder", "you@company.com"], ["matInput", "", "placeholder", "Enter your password", 3, "type"], ["mat-icon-button", "", "matSuffix", "", "type", "button", 3, "click"], [1, "forgot-password"], ["href", "#"], [1, "sign-in-button"], ["mat-raised-button", ""], [1, "divider"], [1, "google-btn"], ["src", "https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg", "alt", "Google logo"], [1, "signup-text"]],
      template: function SignInComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "lmsweb-header");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "a", 2)(4, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, "Antra LMS");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, "Welcome Back");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9, "Sign in to manage your course tickets");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "div", 3)(11, "mat-form-field", 4)(12, "mat-icon", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13, "email");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15, "Email");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](16, "input", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "mat-form-field", 4)(18, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](19, "Password");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "mat-icon", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](21, "lock");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](22, "input", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "button", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function SignInComponent_Template_button_click_23_listener() {
            return ctx.hide = !ctx.hide;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](25);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "div", 9)(27, "a", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](28, "Forgot Password?");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](29, "div", 11)(30, "button", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](31, "Sign In");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](32, "div", 13)(33, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](34, "Or continue with");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](35, "button", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](36, "img", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](37, " Sign in with Google ");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](38, "p", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](39, " Don't have an account? ");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](40, "a", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](41, "Sign up");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](42, "lmsweb-footer");
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](22);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("type", ctx.hide ? "password" : "text");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx.hide ? "visibility_off" : "visibility", " ");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__.MatFormFieldModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__.MatPrefix, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__.MatSuffix, _angular_material_input__WEBPACK_IMPORTED_MODULE_3__.MatInputModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_3__.MatInput, _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatIconButton, _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClientModule, _shared_layout_header_header_component__WEBPACK_IMPORTED_MODULE_6__.HeaderComponent, _shared_layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__.FooterComponent],
      styles: ["[_nghost-%COMP%] {\n    --color-main-text: #1F2937;\n    --color-secondary-text: #4B5563;\n    --color-labels-hints: #9CA3AF;\n    --color-borders: #E5E7EB;\n    --color-page-backgrounds: #F9FAFB; \n    --color-deep-blue: #2F3E9E; \n\n    --color-royal-blue: #4F67FF; \n\n    --color-soft-blue: #8FA0FF; \n\n    --color-pale-blue: #EEF1FF; \n\n\n\n\n    display:block;\n    min-height: 100vh;\n    font-family: 'Inter', Arial, Helvetica, sans-serif;\n    background-color: var(--color-page-backgrounds);\n}\n\n.page[_ngcontent-%COMP%] {\n    min-height: 100vh;\n    display:flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding: 1rem;\n}\n\n.header[_ngcontent-%COMP%] {\n    margin-top: 1rem;\n    text-align: center;\n    display: flex;\n    flex-direction: column;\n}\n\n.antra-lms-link[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n\n.header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    color: #2F3E9E;\n    font-size: 16px;\n    font-weight: 600;\n    margin-bottom: 10px;\n}\n\n.header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    margin-bottom: 6px;\n    color: #1F2937;\n    font-weight: 600;\n}\n\n.header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin-top: 4px;\n    margin-bottom: 25px;\n    color: var(--color-secondary-text);\n    font-size: 14px;\n    font-weight: 400;\n}\n\n.sign-in-container[_ngcontent-%COMP%] {\n    width: 400px;\n    max-width: 90%;\n    padding: 2rem;\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n    border: 1px solid var(--color-borders, #E5E7EB);\n    border-radius: 8px;\n    background-color: white;\n    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n    margin: 2rem auto;\n}\n\nmat-form-field[_ngcontent-%COMP%] {\n  display: block; \n  width: 100%;\n}\n\nmat-icon[_ngcontent-%COMP%] {\n    color: var(--color-secondary-text)\n}\n\n.forgot-password[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: flex-end;\n    margin-top: 0px;\n    margin-bottom: 15px;\n}\n\n.forgot-password[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 13px;\n    color: var(--color-royal-blue);\n    text-decoration: none;\n}\n\n.forgot-password[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    text-decoration: underline;\n}\n\n.sign-in-button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\n    background-color: var(--color-royal-blue);\n    width: 100%;\n    height: 45px;\n    border-radius: 10px;\n    color: white;\n    font-size: 14px;\n    font-weight: 400;\n}\n\n.divider[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    text-align: center;\n    color: var(--color-labels-hints);\n    font-size: 14px;\n    margin: 24px 0;\n}\n\n.divider[_ngcontent-%COMP%]::before, .divider[_ngcontent-%COMP%]::after {\n  content: '';\n  flex: 1;\n  border-bottom: 1px solid var(--color-borders);\n}\n\n.divider[_ngcontent-%COMP%]::before {\n  margin-right: 12px;\n}\n\n.divider[_ngcontent-%COMP%]::after {\n  margin-left: 12px;\n}\n\n.google-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 48px;\n  border: 1px solid var(--color-soft-blue);\n  border-radius: 10px;\n  background: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  font-weight: 500;\n  font-size: 14px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  color: var(--color-royal-blue)\n}\n\n.google-btn[_ngcontent-%COMP%]:hover {\n  background: #f9fafb;\n  border-color: #9ca3af;\n}\n\n.google-btn[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n}\n\n.signup-text[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  text-align: center;\n  font-size: 14px;\n  color: var(--color-secondary-text);\n}\n\n.signup-text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--color-royal-blue);\n  font-weight: 500;\n  text-decoration: none;\n}\n\n.signup-text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvYW5ndWxhci9zcmMvYXBwL2ZlYXR1cmVzL3NpZ24taW4vc2lnbi1pbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksMEJBQTBCO0lBQzFCLCtCQUErQjtJQUMvQiw2QkFBNkI7SUFDN0Isd0JBQXdCO0lBQ3hCLGlDQUFpQztJQUNqQywwQkFBMEIsRUFBRSxtQkFBbUI7SUFDL0MsMkJBQTJCLEVBQUUsd0JBQXdCO0lBQ3JELDBCQUEwQixFQUFFLGVBQWU7SUFDM0MsMEJBQTBCLEVBQUUscUJBQXFCOzs7O0lBSWpELGFBQWE7SUFDYixpQkFBaUI7SUFDakIsa0RBQWtEO0lBQ2xELCtDQUErQztBQUNuRDs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixrQ0FBa0M7SUFDbEMsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixjQUFjO0lBQ2QsYUFBYTtJQUNiLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztJQUNULCtDQUErQztJQUMvQyxrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLHdDQUF3QztJQUN4QyxpQkFBaUI7QUFDckI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsV0FBVztBQUNiOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLGFBQWE7SUFDYix5QkFBeUI7SUFDekIsZUFBZTtJQUNmLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZiw4QkFBOEI7SUFDOUIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0kseUNBQXlDO0lBQ3pDLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsZ0NBQWdDO0lBQ2hDLGVBQWU7SUFDZixjQUFjO0FBQ2xCOztBQUVBOztFQUVFLFdBQVc7RUFDWCxPQUFPO0VBQ1AsNkNBQTZDO0FBQy9DOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWix3Q0FBd0M7RUFDeEMsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixTQUFTO0VBQ1QsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5QixnQkFBZ0I7RUFDaEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgLS1jb2xvci1tYWluLXRleHQ6ICMxRjI5Mzc7XHJcbiAgICAtLWNvbG9yLXNlY29uZGFyeS10ZXh0OiAjNEI1NTYzO1xyXG4gICAgLS1jb2xvci1sYWJlbHMtaGludHM6ICM5Q0EzQUY7XHJcbiAgICAtLWNvbG9yLWJvcmRlcnM6ICNFNUU3RUI7XHJcbiAgICAtLWNvbG9yLXBhZ2UtYmFja2dyb3VuZHM6ICNGOUZBRkI7IFxyXG4gICAgLS1jb2xvci1kZWVwLWJsdWU6ICMyRjNFOUU7IC8qaGVhZGVycywgdG9wIG5hdiovXHJcbiAgICAtLWNvbG9yLXJveWFsLWJsdWU6ICM0RjY3RkY7IC8qcHJpbWFyeSBidXR0b25zLCBsaW5rKi9cclxuICAgIC0tY29sb3Itc29mdC1ibHVlOiAjOEZBMEZGOyAvKmhvdmVyIHN0YXRlcyovXHJcbiAgICAtLWNvbG9yLXBhbGUtYmx1ZTogI0VFRjFGRjsgLypiYWNrZ3JvdW5kIGFjY2VudHMqL1xyXG5cclxuXHJcblxyXG4gICAgZGlzcGxheTpibG9jaztcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgZm9udC1mYW1pbHk6ICdJbnRlcicsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wYWdlLWJhY2tncm91bmRzKTtcclxufVxyXG5cclxuLnBhZ2Uge1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxufVxyXG5cclxuLmhlYWRlciB7XHJcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5hbnRyYS1sbXMtbGluayB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4uaGVhZGVyIGgyIHtcclxuICAgIGNvbG9yOiAjMkYzRTlFO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5oZWFkZXIgaDEge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNnB4O1xyXG4gICAgY29sb3I6ICMxRjI5Mzc7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4uaGVhZGVyIHAge1xyXG4gICAgbWFyZ2luLXRvcDogNHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRhcnktdGV4dCk7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcblxyXG4uc2lnbi1pbi1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgbWF4LXdpZHRoOiA5MCU7XHJcbiAgICBwYWRkaW5nOiAycmVtO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IDFyZW07XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jb2xvci1ib3JkZXJzLCAjRTVFN0VCKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgIG1hcmdpbjogMnJlbSBhdXRvO1xyXG59XHJcblxyXG5tYXQtZm9ybS1maWVsZCB7XHJcbiAgZGlzcGxheTogYmxvY2s7IFxyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5tYXQtaWNvbiB7XHJcbiAgICBjb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5LXRleHQpXHJcbn1cclxuXHJcbi5mb3Jnb3QtcGFzc3dvcmQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcblxyXG4uZm9yZ290LXBhc3N3b3JkIGEge1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXJveWFsLWJsdWUpO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4uZm9yZ290LXBhc3N3b3JkIGE6aG92ZXIge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuXHJcbi5zaWduLWluLWJ1dHRvbiBidXR0b257XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1yb3lhbC1ibHVlKTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuXHJcbi5kaXZpZGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWxhYmVscy1oaW50cyk7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBtYXJnaW46IDI0cHggMDtcclxufVxyXG5cclxuLmRpdmlkZXI6OmJlZm9yZSxcclxuLmRpdmlkZXI6OmFmdGVyIHtcclxuICBjb250ZW50OiAnJztcclxuICBmbGV4OiAxO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1jb2xvci1ib3JkZXJzKTtcclxufVxyXG5cclxuLmRpdmlkZXI6OmJlZm9yZSB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xyXG59XHJcblxyXG4uZGl2aWRlcjo6YWZ0ZXIge1xyXG4gIG1hcmdpbi1sZWZ0OiAxMnB4O1xyXG59XHJcblxyXG4uZ29vZ2xlLWJ0biB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA0OHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNvbG9yLXNvZnQtYmx1ZSk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZ2FwOiAxMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xyXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1yb3lhbC1ibHVlKVxyXG59XHJcblxyXG4uZ29vZ2xlLWJ0bjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogI2Y5ZmFmYjtcclxuICBib3JkZXItY29sb3I6ICM5Y2EzYWY7XHJcbn1cclxuXHJcbi5nb29nbGUtYnRuIGltZyB7XHJcbiAgd2lkdGg6IDE4cHg7XHJcbiAgaGVpZ2h0OiAxOHB4O1xyXG59XHJcblxyXG4uc2lnbnVwLXRleHQge1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBjb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5LXRleHQpO1xyXG59XHJcblxyXG4uc2lnbnVwLXRleHQgYSB7XHJcbiAgY29sb3I6IHZhcigtLWNvbG9yLXJveWFsLWJsdWUpO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4uc2lnbnVwLXRleHQgYTpob3ZlciB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 9468:
/*!***************************************!*\
  !*** ./apps/angular/src/bootstrap.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ 652);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_app_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app.config */ 3095);
/* harmony import */ var _app_remote_entry_entry_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/remote-entry/entry.component */ 6536);



(0,_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__.bootstrapApplication)(_app_remote_entry_entry_component__WEBPACK_IMPORTED_MODULE_2__.RemoteEntryComponent, _app_app_config__WEBPACK_IMPORTED_MODULE_1__.appConfig).catch(err => console.error(err));

/***/ })

}])
//# sourceMappingURL=apps_angular_src_bootstrap_ts.js.map