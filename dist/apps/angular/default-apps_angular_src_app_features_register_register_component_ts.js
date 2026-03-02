(self["webpackChunkangular"] = self["webpackChunkangular"] || []).push([["default-apps_angular_src_app_features_register_register_component_ts"],{

/***/ 1016:
/*!**********************************************************************!*\
  !*** ./apps/angular/src/app/features/register/register.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RegisterComponent: () => (/* binding */ RegisterComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 6571);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 6751);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_forms__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9964);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ 1940);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ 5168);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_material_input__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 7871);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_angular_material_icon__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 7945);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_angular_material_button__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/checkbox */ 4418);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/divider */ 9895);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_angular_material_divider__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ 7425);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_angular_material_card__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _validators_password_match_validator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./validators/password-match.validator */ 5354);
/* harmony import */ var _shared_layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/layout/footer/footer.component */ 3262);
/* harmony import */ var _shared_layout_header_header_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../shared/layout/header/header.component */ 4716);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 3731);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_13__);
























function RegisterComponent_mat_error_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, " Email is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function RegisterComponent_mat_error_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, " Enter a valid email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function RegisterComponent_mat_error_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, " Fullname is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function RegisterComponent_mat_error_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, " Username is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function RegisterComponent_mat_error_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, " Password is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function RegisterComponent_div_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 23)(1, "div", 24)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3, "Password Strength");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](6, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](7, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](8, "ul", 27)(9, "li")(10, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](12, " At least 8 characters ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](13, "li")(14, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](16, " One uppercase letter ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](17, "li")(18, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](20, " One lowercase letter ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](21, "li")(22, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](24, " One number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"]("", ctx_r5.passwordStrength, "/4");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵstyleProp"]("width", ctx_r5.strengthPercent, "%")("background", ctx_r5.strengthColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵclassProp"]("valid", ctx_r5.hasMinLength);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", ctx_r5.hasMinLength ? "check_circle" : "radio_button_unchecked", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵclassProp"]("valid", ctx_r5.hasUpperCase);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", ctx_r5.hasUpperCase ? "check_circle" : "radio_button_unchecked", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵclassProp"]("valid", ctx_r5.hasLowerCase);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", ctx_r5.hasLowerCase ? "check_circle" : "radio_button_unchecked", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵclassProp"]("valid", ctx_r5.hasNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", ctx_r5.hasNumber ? "check_circle" : "radio_button_unchecked", " ");
  }
}
function RegisterComponent_mat_error_53_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, " Confirm password is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function RegisterComponent_mat_error_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, " Passwords do not match ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
class RegisterComponent {
  constructor(fb) {
    this.fb = fb;
    this.hidePassword = true;
    this.hideConfirmPassword = true;
    this.form = this.fb.group({
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.email]],
      fullName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
      username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
      password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/)]],
      confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
      terms: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.requiredTrue]
    }, {
      validators: (0,_validators_password_match_validator__WEBPACK_IMPORTED_MODULE_10__.passwordMatchValidator)('password', 'confirmPassword')
    });
  }
  get email() {
    return this.form.get('email');
  }
  get fullName() {
    return this.form.get('fullName');
  }
  get username() {
    return this.form.get('username');
  }
  get password() {
    return this.form.get('password');
  }
  /* ===== Password Rules ===== */
  get hasMinLength() {
    return !!this.password?.value && this.password.value.length >= 8;
  }
  get hasUpperCase() {
    return !!this.password?.value && /[A-Z]/.test(this.password.value);
  }
  get hasLowerCase() {
    return !!this.password?.value && /[a-z]/.test(this.password.value);
  }
  get hasNumber() {
    return !!this.password?.value && /[0-9]/.test(this.password.value);
  }
  /* ===== Strength Score ===== */
  get passwordStrength() {
    let score = 0;
    if (this.hasMinLength) score++;
    if (this.hasUpperCase) score++;
    if (this.hasLowerCase) score++;
    if (this.hasNumber) score++;
    return score;
  }
  get strengthPercent() {
    return this.passwordStrength / 4 * 100;
  }
  get strengthColor() {
    switch (this.passwordStrength) {
      case 1:
        return '#ef4444';
      // red
      case 2:
        return '#f59e0b';
      // orange
      case 3:
        return '#3b82f6';
      // blue
      case 4:
        return '#22c55e';
      // green
      default:
        return '#e5e7eb';
      // gray
    }
  }
  get confirmPassword() {
    return this.form.get('confirmPassword');
  }
  get terms() {
    return this.form.get('terms');
  }
  static {
    this.ɵfac = function RegisterComponent_Factory(t) {
      return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormBuilder));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({
      type: RegisterComponent,
      selectors: [["lmsweb-register"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵStandaloneFeature"]],
      decls: 77,
      vars: 14,
      consts: [[1, "register-page"], [1, "register-header"], [1, "brand"], [1, "register-card"], [3, "formGroup"], ["appearance", "outline", 1, "full-width"], ["matPrefix", ""], ["matInput", "", "type", "email", "formControlName", "email", "placeholder", "you@gmail.com"], [4, "ngIf"], ["matInput", "", "formControlName", "fullName", "placeholder", "Enter full name"], ["matInput", "", "formControlName", "username", "placeholder", "Enter username"], ["matInput", "", "formControlName", "password", "placeholder", "Create a strong password", 3, "type"], ["mat-icon-button", "", "matSuffix", "", "type", "button", 3, "click"], ["class", "password-strength", 4, "ngIf"], ["matInput", "", "formControlName", "confirmPassword", "placeholder", "Re-enter your password", 3, "type"], ["formControlName", "terms", 1, "terms"], ["href", "#"], ["mat-raised-button", "", "color", "primary", 1, "full-width", "submit-btn", 3, "disabled"], [1, "or-divider"], ["mat-stroked-button", "", "type", "button", 1, "full-width", "google-btn"], ["src", "https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg", "alt", "Google"], [1, "signin"], ["routerLink", "/angular/login"], [1, "password-strength"], [1, "strength-header"], [1, "strength-bar"], [1, "strength-fill"], [1, "rules"]],
      template: function RegisterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "lmsweb-header");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "div", 0)(2, "header", 1)(3, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4, "Antra LMS");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6, "Create Your Account");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](8, "Start managing courses today");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](9, "mat-card", 3)(10, "form", 4)(11, "mat-form-field", 5)(12, "mat-icon", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](13, "mail");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](14, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](15, "Email Address");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](16, "input", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](17, RegisterComponent_mat_error_17_Template, 2, 0, "mat-error", 8)(18, RegisterComponent_mat_error_18_Template, 2, 0, "mat-error", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](19, "mat-form-field", 5)(20, "mat-icon", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](21, "person");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](22, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](23, "Full Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](24, "input", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](25, RegisterComponent_mat_error_25_Template, 2, 0, "mat-error", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](26, "mat-form-field", 5)(27, "mat-icon", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](28, "account_circle");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](29, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](30, "Username");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](31, "input", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](32, RegisterComponent_mat_error_32_Template, 2, 0, "mat-error", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](33, "mat-form-field", 5)(34, "mat-icon", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](35, "lock");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](36, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](37, "Password");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](38, "input", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](39, "button", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function RegisterComponent_Template_button_click_39_listener() {
            return ctx.hidePassword = !ctx.hidePassword;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](40, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](41);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](42, RegisterComponent_mat_error_42_Template, 2, 0, "mat-error", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](43, RegisterComponent_div_43_Template, 25, 17, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](44, "mat-form-field", 5)(45, "mat-icon", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](46, "lock");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](47, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](48, "Confirm Password");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](49, "input", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](50, "button", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function RegisterComponent_Template_button_click_50_listener() {
            return ctx.hideConfirmPassword = !ctx.hideConfirmPassword;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](51, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](52);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](53, RegisterComponent_mat_error_53_Template, 2, 0, "mat-error", 8)(54, RegisterComponent_mat_error_54_Template, 2, 0, "mat-error", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](55, "mat-checkbox", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](56, " I agree to the ");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](57, "a", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](58, "Terms of Service");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](59, " and ");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](60, "a", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](61, "Privacy Policy");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](62, "button", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](63, " Create Account ");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](64, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](65, "mat-divider");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](66, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](67, "or");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](68, "mat-divider");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](69, "button", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](70, "img", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](71, " Sign up with Google ");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](72, "p", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](73, " Already have an account? ");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](74, "a", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](75, "Sign in");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](76, "lmsweb-footer");
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("formGroup", ctx.form);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.email == null ? null : ctx.email.hasError("required"));
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.email == null ? null : ctx.email.hasError("email"));
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.fullName == null ? null : ctx.fullName.hasError("required"));
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.username == null ? null : ctx.username.hasError("required"));
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("type", ctx.hidePassword ? "password" : "text");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", ctx.hidePassword ? "visibility_off" : "visibility", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.password == null ? null : ctx.password.hasError("required"));
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.password == null ? null : ctx.password.value);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("type", ctx.hideConfirmPassword ? "password" : "text");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx.hideConfirmPassword ? "visibility_off" : "visibility");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.confirmPassword == null ? null : ctx.confirmPassword.hasError("required"));
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.confirmPassword == null ? null : ctx.confirmPassword.hasError("passwordMismatch"));
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("disabled", ctx.form.invalid);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_0__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_0__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatFormFieldModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatPrefix, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatSuffix, _angular_material_input__WEBPACK_IMPORTED_MODULE_4__.MatInputModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_4__.MatInput, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatIconButton, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__.MatCheckboxModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__.MatCheckbox, _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__.MatDividerModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__.MatDivider, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCardModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCard, _shared_layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__.FooterComponent, _shared_layout_header_header_component__WEBPACK_IMPORTED_MODULE_12__.HeaderComponent],
      styles: [".register-page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background: #f9fafb;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 48px 16px;\n  font-family: Inter, Roboto, Arial, sans-serif;\n}\n\n.register-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 32px;\n}\n.register-header[_ngcontent-%COMP%]   .brand[_ngcontent-%COMP%] {\n  color: #2f3e9e;\n  font-weight: 600;\n  margin-bottom: 8px;\n}\n.register-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-weight: 600;\n  margin: 0;\n  color: #1f2937;\n}\n.register-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  color: #4b5563;\n  font-size: 14px;\n}\n\n.register-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 420px;\n  padding: 32px;\n  border-radius: 12px;\n}\n\n.register-card[_ngcontent-%COMP%] {\n  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);\n}\n\n.full-width[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 20px;\n}\n\nmat-form-field[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n\n.terms[_ngcontent-%COMP%] {\n  display: block;\n  margin: 16px 0 24px;\n  font-size: 13px;\n}\n.terms[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #4f67ff;\n  text-decoration: none;\n}\n\n.submit-btn[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n\nmat-divider[_ngcontent-%COMP%] {\n  margin: 24px 0;\n}\n\n.google-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n}\n.google-btn[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n}\n\n.signin[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 24px;\n  font-size: 13px;\n}\n.signin[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #4f67ff;\n  font-weight: 500;\n  text-decoration: none;\n}\n\n.or-divider[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin: 20px 0;\n  color: #9ca3af;\n  font-size: 13px;\n}\n.or-divider[_ngcontent-%COMP%]   mat-divider[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n\n\ninput[_ngcontent-%COMP%]::-ms-reveal, input[_ngcontent-%COMP%]::-ms-clear {\n  display: none;\n}\n\n\n\ninput[type=password][_ngcontent-%COMP%]::-webkit-credentials-auto-fill-button, input[type=password][_ngcontent-%COMP%]::-webkit-textfield-decoration-container {\n  display: none !important;\n}\n\n.password-strength[_ngcontent-%COMP%] {\n  margin-top: -8px;\n  margin-bottom: 16px;\n  font-size: 13px;\n}\n\n.strength-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 6px;\n  color: #6b7280;\n}\n\n.strength-bar[_ngcontent-%COMP%] {\n  height: 6px;\n  background: #e5e7eb;\n  border-radius: 4px;\n  overflow: hidden;\n  margin-bottom: 12px;\n}\n\n.strength-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  transition: width 0.3s ease;\n}\n\n.rules[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n\n.rules[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 6px;\n  color: #9ca3af;\n}\n\n.rules[_ngcontent-%COMP%]   li.valid[_ngcontent-%COMP%] {\n  color: #22c55e;\n}\n\n.rules[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL2FwcHMvYW5ndWxhci9zcmMvYXBwL2ZlYXR1cmVzL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSw2Q0FBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQUNGO0FBQ0U7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUNKO0FBRUU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtBQUFKO0FBR0U7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFESjs7QUFLQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUZGOztBQUtBO0VBQ0UsMkNBQUE7QUFGRjs7QUFNQTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtBQUhGOztBQU1BO0VBQ0UsZUFBQTtBQUhGOztBQU1BO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQUhGO0FBS0U7RUFDRSxjQUFBO0VBQ0EscUJBQUE7QUFISjs7QUFPQTtFQUNFLG1CQUFBO0FBSkY7O0FBT0E7RUFDRSxjQUFBO0FBSkY7O0FBT0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFNBQUE7QUFKRjtBQU1FO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFKSjs7QUFRQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBTEY7QUFPRTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FBTEo7O0FBU0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBTkY7QUFRRTtFQUNFLE9BQUE7QUFOSjs7QUFVQSwyQ0FBQTtBQUNBOztFQUVFLGFBQUE7QUFQRjs7QUFVQSwwQ0FBQTtBQUNBOztFQUVFLHdCQUFBO0FBUEY7O0FBVUE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQVBGOztBQVVBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBUEY7O0FBVUE7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFQRjs7QUFVQTtFQUNFLFlBQUE7RUFDQSwyQkFBQTtBQVBGOztBQVVBO0VBQ0UsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQVBGOztBQVVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQVBGOztBQVVBO0VBQ0UsY0FBQTtBQVBGOztBQVVBO0VBQ0UsZUFBQTtBQVBGIiwic291cmNlc0NvbnRlbnQiOlsiLnJlZ2lzdGVyLXBhZ2Uge1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIGJhY2tncm91bmQ6ICNmOWZhZmI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogNDhweCAxNnB4O1xyXG4gIGZvbnQtZmFtaWx5OiBJbnRlciwgUm9ib3RvLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLnJlZ2lzdGVyLWhlYWRlciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDMycHg7XHJcblxyXG4gIC5icmFuZCB7XHJcbiAgICBjb2xvcjogIzJmM2U5ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgfVxyXG5cclxuICBoMSB7XHJcbiAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgY29sb3I6ICMxZjI5Mzc7XHJcbiAgfVxyXG5cclxuICBwIHtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgIGNvbG9yOiAjNGI1NTYzO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gIH1cclxufVxyXG5cclxuLnJlZ2lzdGVyLWNhcmQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC13aWR0aDogNDIwcHg7XHJcbiAgcGFkZGluZzogMzJweDtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG59XHJcblxyXG4ucmVnaXN0ZXItY2FyZCB7XHJcbiAgYm94LXNoYWRvdzogMCAxMHB4IDI1cHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcclxufVxyXG5cclxuXHJcbi5mdWxsLXdpZHRoIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG5tYXQtZm9ybS1maWVsZCB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4udGVybXMge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbjogMTZweCAwIDI0cHg7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG5cclxuICBhIHtcclxuICAgIGNvbG9yOiAjNGY2N2ZmO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuLnN1Ym1pdC1idG4ge1xyXG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XHJcbn1cclxuXHJcbm1hdC1kaXZpZGVyIHtcclxuICBtYXJnaW46IDI0cHggMDtcclxufVxyXG5cclxuLmdvb2dsZS1idG4ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBnYXA6IDEycHg7XHJcblxyXG4gIGltZyB7XHJcbiAgICB3aWR0aDogMThweDtcclxuICAgIGhlaWdodDogMThweDtcclxuICB9XHJcbn1cclxuXHJcbi5zaWduaW4ge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAyNHB4O1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuXHJcbiAgYSB7XHJcbiAgICBjb2xvcjogIzRmNjdmZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG4ub3ItZGl2aWRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMTJweDtcclxuICBtYXJnaW46IDIwcHggMDtcclxuICBjb2xvcjogIzljYTNhZjtcclxuICBmb250LXNpemU6IDEzcHg7XHJcblxyXG4gIG1hdC1kaXZpZGVyIHtcclxuICAgIGZsZXg6IDE7XHJcbiAgfVxyXG59XHJcblxyXG4vKiBIaWRlIEVkZ2UgZGVmYXVsdCBwYXNzd29yZCByZXZlYWwgaWNvbiAqL1xyXG5pbnB1dDo6LW1zLXJldmVhbCxcclxuaW5wdXQ6Oi1tcy1jbGVhciB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLyogSGlkZSBDaHJvbWUgLyBFZGdlIG1vZGVybiByZXZlYWwgaWNvbiAqL1xyXG5pbnB1dFt0eXBlPSdwYXNzd29yZCddOjotd2Via2l0LWNyZWRlbnRpYWxzLWF1dG8tZmlsbC1idXR0b24sXHJcbmlucHV0W3R5cGU9J3Bhc3N3b3JkJ106Oi13ZWJraXQtdGV4dGZpZWxkLWRlY29yYXRpb24tY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5wYXNzd29yZC1zdHJlbmd0aCB7XHJcbiAgbWFyZ2luLXRvcDogLThweDtcclxuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxufVxyXG5cclxuLnN0cmVuZ3RoLWhlYWRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgbWFyZ2luLWJvdHRvbTogNnB4O1xyXG4gIGNvbG9yOiAjNmI3MjgwO1xyXG59XHJcblxyXG4uc3RyZW5ndGgtYmFyIHtcclxuICBoZWlnaHQ6IDZweDtcclxuICBiYWNrZ3JvdW5kOiAjZTVlN2ViO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbn1cclxuXHJcbi5zdHJlbmd0aC1maWxsIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgdHJhbnNpdGlvbjogd2lkdGggMC4zcyBlYXNlO1xyXG59XHJcblxyXG4ucnVsZXMge1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5ydWxlcyBsaSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogOHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDZweDtcclxuICBjb2xvcjogIzljYTNhZjtcclxufVxyXG5cclxuLnJ1bGVzIGxpLnZhbGlkIHtcclxuICBjb2xvcjogIzIyYzU1ZTtcclxufVxyXG5cclxuLnJ1bGVzIG1hdC1pY29uIHtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 5354:
/*!***************************************************************************************!*\
  !*** ./apps/angular/src/app/features/register/validators/password-match.validator.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   passwordMatchValidator: () => (/* binding */ passwordMatchValidator)
/* harmony export */ });
function passwordMatchValidator(passwordKey, confirmPasswordKey) {
  return formGroup => {
    const password = formGroup.get(passwordKey);
    const confirmPassword = formGroup.get(confirmPasswordKey);
    if (!password || !confirmPassword) {
      return null;
    }
    if (password.value !== confirmPassword.value) {
      confirmPassword.setErrors({
        passwordMismatch: true
      });
      return {
        passwordMismatch: true
      };
    }
    confirmPassword.setErrors(null);
    return null;
  };
}

/***/ }),

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
//# sourceMappingURL=default-apps_angular_src_app_features_register_register_component_ts.js.map