(self["webpackChunkangular"] = self["webpackChunkangular"] || []).push([["apps_angular_src_app_remote-entry_entry_routes_ts"],{

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
  }, {
    path: 'landing',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-webpack_sharing_consume_default_angular_material_button_angular_material_button-webpa-f27d9f"), __webpack_require__.e("default-apps_angular_src_app_features_landing_landing_component_ts"), __webpack_require__.e("apps_angular_src_app_shared_layout_footer_footer_component_ts-apps_angular_src_app_shared_lay-419526")]).then(__webpack_require__.bind(__webpack_require__, /*! ../features/landing/landing.component */ 466)).then(m => m.LandingComponent)
  }, {
    path: 'register',
    loadComponent: () => Promise.all(/*! import() */[__webpack_require__.e("default-webpack_sharing_consume_default_angular_forms_angular_forms"), __webpack_require__.e("default-webpack_sharing_consume_default_angular_material_button_angular_material_button-webpa-f27d9f"), __webpack_require__.e("default-webpack_sharing_consume_default_angular_material_form-field_angular_material_form-field"), __webpack_require__.e("default-apps_angular_src_app_features_register_register_component_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../features/register/register.component */ 1016)).then(m => m.RegisterComponent)
  }]
}];

/***/ })

}])
//# sourceMappingURL=apps_angular_src_app_remote-entry_entry_routes_ts.js.map