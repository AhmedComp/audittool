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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/audit.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/audit.component.html ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row col\" style=\"background-color:#ffffff\">\r\n  <div class=\"col-3\">\r\n    <a routerLink=\"/home\">\r\n      <img src=\"assets/img/logo.png\" class=\"pl-5\" style=\"height: 100px;width: auto;\" />\r\n    </a>\r\n  </div>\r\n  <div class=\"col-6 mt-2\">\r\n    <img src=\"assets/img/logo2.png\" style=\"position: relative;bottom: 15px;\">\r\n    <img src=\"assets/img/slogan.png\" class=\"mt-5\">\r\n  </div>\r\n  <div class=\"col-3 mt-4\">\r\n    <h5 class=\"text-center text-white\"><a href=\"#\" style=\"color:#bf580f\">العربيه</a></h5>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div style=\"background-color:#f5f5f5\">\r\n  <div class=\"d-flex flex-row justify-content-center mt-5\">\r\n    <h3 class=\"text-primary\">Please Answer The Follwoing Questions</h3>\r\n  </div>\r\n\r\n  <div *ngIf=\"error\" class=\"d-flex flex-row justify-content-center mt-1\">\r\n    <h5 class=\"text-danger\">Connection Error</h5>\r\n  </div>\r\n  <div *ngIf=\"underdeveloped\" class=\"d-flex flex-row justify-content-center mt-1\">\r\n    <h5 class=\"text-danger\">underdeveloped</h5>\r\n  </div>\r\n   \r\n\r\n  <div *ngIf=\"load\" class=\"d-flex flex-row justify-content-end mt-1\" style=\"margin-right: 25px;\">\r\n    <button class=\"btn btn-warning float-right mr-4\" (click)=\"saveAction()\">Action Plan</button>\r\n    <a class=\"btn btn-success float-right mr-4\" href=\"assets/data/report.xlsx\">Report</a>\r\n    <button class=\"btn btn-success float-right\" (click)=\"save()\">Save & Exit</button>\r\n  </div>\r\n\r\n  <div class=\"d-flex flex-row justify-content-center\">\r\n    <form *ngIf=\"load\" #basicInfoForm=\"ngForm\" class=\"d-flex flex-row col-12 justify-content-center mt-4\">\r\n      <div class=\" col-12 mb-4\" style=\"border: 1px solid #17a2b8;border-radius: 10px;\">\r\n        <p-accordion>\r\n          <p-accordionTab *ngFor=\"let sec of mySections\" header='{{ sec.name + \"   \"  + getTotal(sec.id) }}'>\r\n            <div class=\"row\">\r\n              <div *ngFor=\"let myQes of sec.questions\" class=\"col-4 mb-3\">\r\n                <label class=\"font-weight-bold\" style=\"color:#bf6a31\">\r\n                  {{ myQes.question }} <i class=\"fa fa-info-circle\" tooltipPosition=\"top\" pTooltip='{{ myQes.description }}'></i>\r\n                </label>\r\n                <select id=\"dropanswers\" #dropanswers=\"ngModel\" class=\"form-control\" required name='{{ myQes.id + \"qes\" }}' [(ngModel)]=\"myQes.currentAnswer\">\r\n                  <option [ngValue]=\"undefined\" selected>--Select--</option>\r\n                  <option *ngFor=\"let ans of myQes.answer\" [value]=\"ans\">\r\n                    {{ ans }}\r\n                  </option>\r\n                </select>\r\n                <div *ngIf=\"!myQes.currentAnswer && dropanswers.touched\" class=\"badge-danger\">\r\n                  This field is required\r\n                </div>\r\n                <input type=\"text\" max=\"250\" class=\"form-control mt-1\" name=\"txtclientComment\" placeholder=\"Type your comment\" [(ngModel)]=\"myQes.comment\" />\r\n              </div>\r\n            </div>\r\n          </p-accordionTab>\r\n        </p-accordion>\r\n      </div>\r\n    </form>\r\n  </div>\r\n\r\n\r\n</div>\r\n\r\n<div *ngIf=\"load\" style=\"bottom: 0;width: 100%;background-color:black;color:white\" class=\"text-center\">\r\n  <br />\r\n  Sponsored by the American Standardization Association of Information & Communications Technology\r\n  <br />\r\n  <br />\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/finish.component.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/finish.component.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"bg-info col-12 row\">\r\n  <div class=\"col-6\">\r\n    <img src=\"assets/img/logo.png\" class=\"pl-5\" style=\"height: 90px;width: auto;\" />\r\n  </div>\r\n  <div class=\"col-6 mt-4\">\r\n    <h3 class=\"font-italic text-center text-white\">Welcome to eZee Consultancy</h3>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"col-12 row\">\r\n  <div class=\"col-12\">\r\n    <h5 class=\"ml-5 mt-5 text-center\">Thank You ...</h5>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"d-flex flex-row justify-content-center mt-4 w-100\">\r\n  <form class=\"d-flex flex-row justify-content-center mt-4 w-100\">\r\n    <div class=\"row col-11\" style=\"border: 1px solid #17a2b8;border-radius: 10px;\">\r\n      <div class=\"row col-12 mt-4 mb-4\">\r\n        <div class=\"row flex-fill justify-content-center\">\r\n          <h2 class=\"text-success\">Thanks You for your registeration !</h2>          \r\n        </div>\r\n      </div>\r\n      <div class=\"row col-12 mb-2\">\r\n        <div class=\"col-12 flex-fill justify-content-center row\">\r\n          <button class=\"btn btn-success\"  (click)=\"back()\">Back Home</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n\r\n\r\n<router-outlet></router-outlet>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home.component.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home.component.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row col\" style=\"background-color:#ffffff\">\r\n  <div class=\"col-3\">\r\n    <a routerLink=\"/home\">\r\n      <img src=\"assets/img/logo.png\" class=\"pl-5\" style=\"height: 100px;width: auto;\" />\r\n    </a>\r\n  </div>\r\n  <div class=\"col-6 mt-2\">\r\n    <img src=\"assets/img/logo2.png\" style=\"position: relative;bottom: 15px;\">\r\n    <img src=\"assets/img/slogan.png\" class=\"mt-5\">\r\n  </div>\r\n  <div class=\"col-3 mt-4\">\r\n    <h5 class=\"text-center text-white\"><a href=\"#\" style=\"color:#bf580f\">العربيه</a></h5>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div style=\"background-color:#f5f5f5\">\r\n  <div class=\"d-flex flex-row justify-content-center\">\r\n    <div class=\"col-7\">\r\n      <img src=\"assets/img/welcome2.png\">\r\n      <h1 class=\"ml-5 mt-2 text-center\" style=\"font-size:60px;color:#bf560f\">\r\n        <img src=\"assets/img/ict.png\">\r\n      </h1>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"d-flex flex-row justify-content-center pt-5\">\r\n    <div class=\"border\" style=\"width:28%\">\r\n      <img src=\"assets/img/bg1.png\" style=\"width:15%;background-color: beige;\" class=\"border\">\r\n      <a routerLink=\"/login\" class=\"font-weight-bold\">\r\n        Login\r\n      </a>\r\n      if you have your user created already\r\n    </div>\r\n  </div>\r\n  <div class=\"d-flex flex-row justify-content-center pt-2\">\r\n    <div class=\"border\" style=\"width:28%\">\r\n      <img src=\"assets/img/bg2.png\" style=\"width:15%;background-color: beige;\" class=\"border\">\r\n      <a routerLink=\"/register\" class=\"font-weight-bold\">\r\n        Register\r\n      </a>\r\n      &  get Access Code\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n\r\n<div style=\"position: fixed;bottom: 0;width: 100%;background-color:black;color:white\" class=\"text-center\">\r\n  <br />\r\n  Sponsored by the American Standardization Association of Information & Communications Technology\r\n  <br />\r\n  <br />\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login.component.html ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row col\" style=\"background-color:#ffffff\">\r\n  <div class=\"col-3\">\r\n    <a routerLink=\"/home\">\r\n      <img src=\"assets/img/logo.png\" class=\"pl-5\" style=\"height: 100px;width: auto;\" />\r\n    </a>\r\n  </div>\r\n  <div class=\"col-6 mt-2\">\r\n    <img src=\"assets/img/logo2.png\" style=\"position: relative;bottom: 15px;\">\r\n    <img src=\"assets/img/slogan.png\" class=\"mt-5\">\r\n  </div>\r\n  <div class=\"col-3 mt-4\">\r\n    <h5 class=\"text-center text-white\"><a href=\"#\" style=\"color:#bf580f\">العربيه</a></h5>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div style=\"background-color:#f5f5f5\">\r\n  <div class=\"d-flex flex-row justify-content-center mt-5\">\r\n    <h3 class=\"text-primary\">ACCOUNT LOGIN</h3>\r\n  </div>\r\n  <div class=\"d-flex flex-row justify-content-center\">\r\n    <form #loginForm=\"ngForm\" class=\"col-5 mt-3\">\r\n      <div class=\"pb-5 pl-5 pr-5 pt-4\" style=\"border: 1px solid #17a2b8;border-radius: 10px;\">\r\n        <label class=\"font-weight-bold\" style=\"color:#bf6a31\">\r\n          User Name\r\n        </label>\r\n        <input type=\"text\" max=\"200\" required class=\"form-control\" name=\"txtuserName\" #txtuserName=\"ngModel\" [(ngModel)]=\"userName\" placeholder=\"your username\"/>\r\n        <div *ngIf=\"txtuserName.errors && txtuserName.touched\" class=\"badge-danger\">\r\n          This field is required\r\n        </div>\r\n\r\n\r\n        <label class=\"font-weight-bold pt-3\" style=\"color:#bf6a31\">\r\n          Password\r\n        </label>\r\n        <input type=\"password\" max=\"200\" required class=\"form-control\" name=\"txtpassword\" #txtpassword=\"ngModel\" [(ngModel)]=\"password\" placeholder=\"your password\"/>\r\n        <div *ngIf=\"txtpassword.errors && txtpassword.touched\" class=\"badge-danger\">\r\n          This field is required\r\n        </div>\r\n\r\n        <div *ngIf=\"showLoginFail\" class=\"text-danger\">{{ \"Invalid User name Or Password\"  }}</div>\r\n        <div class=\"d-flex flex-row justify-content-center mt-4\">\r\n          <button type=\"button\" class=\"btn btn-success w-50\" (click)=\"login()\" [disabled]=\"!loginForm.valid\">\r\n            {{\"Login\"}}\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n\r\n<div style=\"position: fixed;bottom: 0;width: 100%;background-color:black;color:white\" class=\"text-center\">\r\n  <br />\r\n  Sponsored by the American Standardization Association of Information & Communications Technology\r\n  <br />\r\n  <br />\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/register.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register.component.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row col\" style=\"background-color:#ffffff\">\r\n  <div class=\"col-3\">\r\n    <a routerLink=\"/home\">\r\n      <img src=\"assets/img/logo.png\" class=\"pl-5\" style=\"height: 100px;width: auto;\" />\r\n    </a>\r\n  </div>\r\n  <div class=\"col-6 mt-2\">\r\n    <img src=\"assets/img/logo2.png\" style=\"position: relative;bottom: 15px;\">\r\n    <img src=\"assets/img/slogan.png\" class=\"mt-5\">\r\n  </div>\r\n  <div class=\"col-3 mt-4\">\r\n    <h5 class=\"text-center text-white\"><a href=\"#\" style=\"color:#bf580f\">العربيه</a></h5>\r\n  </div>\r\n</div>\r\n\r\n<!--<div class=\"registration-flow\">\r\n  <ul *ngIf=\"mode == 1 || mode == 2 || mode == 3 || mode == 4\" class=\"registration-step\" style=\"padding-top:33px\">\r\n    <li [class.active]=\"mode == 1\" [class.done]=\"mode == 2 || mode == 3 || mode == 4\">{{ \"1\" }}</li>\r\n    <li [class.active]=\"mode == 2\" [class.done]=\"mode == 3 || mode == 4\">{{ \"2\" }}</li>\r\n    <li [class.active]=\"mode == 3\" [class.done]=\"mode == 4\">{{ \"3\" }}</li>\r\n    <li [class.active]=\"mode == 4\">{{ \"4\" }}</li>\r\n  </ul>\r\n</div>-->\r\n\r\n\r\n<div style=\"background-color:#f5f5f5\">\r\n  <div class=\"d-flex flex-row justify-content-center mt-5\">\r\n    <h3 class=\"text-primary\">Please Register & get Access Code</h3>\r\n  </div>\r\n  <div class=\"d-flex flex-row justify-content-center\">\r\n    <form *ngIf=\"mode == 1\" #basicInfoForm=\"ngForm\" class=\"d-flex flex-row justify-content-center mt-4\">\r\n      <div class=\"row col-10 mb-4\" style=\"border: 1px solid #17a2b8;border-radius: 10px;\">\r\n        <div class=\"row col-12 mt-4 mb-3\">\r\n          <div class=\"col-6\">\r\n            <label class=\"font-weight-bold\" style=\"color:#bf6a31\">\r\n              First Name\r\n            </label>\r\n            <input type=\"text\" max=\"200\" required class=\"form-control\" name=\"txtclientFirstName\" #txtclientFirstName=\"ngModel\" [(ngModel)]=\"clientFirstName\" />\r\n            <div *ngIf=\"txtclientFirstName.errors && txtclientFirstName.touched\" class=\"badge-danger\">\r\n              This field is required\r\n            </div>\r\n          </div>\r\n          <div class=\"col-6\">\r\n            <label class=\"font-weight-bold\" style=\"color:#bf6a31\">\r\n              Last Name\r\n            </label>\r\n            <input type=\"text\" max=\"200\" required class=\"form-control\" id=\"txtclientLastName\" name=\"txtclientLastName\" #txtclientLastName=\"ngModel\" [(ngModel)]=\"clientLastName\" />\r\n            <div *ngIf=\"txtclientLastName.errors && txtclientLastName.touched\" class=\"badge-danger\">\r\n              This field is required\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n\r\n        <div class=\"row col-12 mb-3\">\r\n          <div class=\"col-6\">\r\n            <label class=\"font-weight-bold\" style=\"color:#bf6a31\">\r\n              e-Mail\r\n            </label>\r\n            <div class=\"d-flex flex-row\">\r\n              <input type=\"text\" max=\"200\" required class=\"form-control\" id=\"txtclientEmail\" name=\"txtclientEmail\" #txtclientEmail=\"ngModel\" [(ngModel)]=\"clientEmail\"\r\n                     pattern=\"(?:[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*|'(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21\\x23-\\x5b\\x5d-\\x7f]|\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])*')@(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?|\\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-zA-Z0-9-]*[a-zA-Z0-9]:(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21-\\x5a\\x53-\\x7f]|\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])+)\\])\"\r\n                     style=\"width:80% !important\" />\r\n              <button class=\"btn btn-success ml-2\" [disabled]=\"txtclientEmail.errors\">Send</button>\r\n\r\n            </div>\r\n            <div *ngIf=\"txtclientEmail.errors && txtclientEmail.touched\" class=\"badge-danger\" style=\"width:80%\">\r\n              {{ txtclientEmail.errors?.required? \"This field is required\" : \"This email is not valid\" }}\r\n            </div>\r\n          </div>\r\n          <div class=\"col-6\">\r\n            <label class=\"font-weight-bold\" style=\"color:#bf6a31\">\r\n              verification code\r\n            </label>\r\n            <div class=\"d-flex flex-row\">\r\n              <input type=\"text\" max=\"200\" required class=\"form-control\" id=\"txtclientverification\" name=\"txtclientverification\" #txtclientverification=\"ngModel\" [(ngModel)]=\"clientverification\" style=\"width:80% !important\" />\r\n              <button class=\"btn btn-success ml-2\" [disabled]=\"!clientverification\">Verify</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row col-12 mb-3\">\r\n          <div class=\"col-6\">\r\n            <label class=\"font-weight-bold\" style=\"color:#bf6a31\">\r\n              User Name\r\n            </label>\r\n            <input type=\"text\" max=\"200\" required class=\"form-control\" name=\"txtclientUserName\" #txtclientUserName=\"ngModel\" [(ngModel)]=\"clientUserName\" />\r\n            <div *ngIf=\"txtclientUserName.errors && txtclientUserName.touched\" class=\"badge-danger\">\r\n              This field is required\r\n            </div>\r\n          </div>\r\n          <div class=\"col-6\">\r\n\r\n          </div>\r\n\r\n        </div>\r\n\r\n        <div class=\"row col-12 mb-3\">\r\n\r\n          <div class=\"col-6\">\r\n            <label class=\"font-weight-bold\" style=\"color:#bf6a31\">\r\n              Password\r\n            </label>\r\n            <input type=\"password\" max=\"200\" required class=\"form-control\" name=\"txtclientPassword\" #txtclientPassword=\"ngModel\" [(ngModel)]=\"clientPassword\" />\r\n            <div *ngIf=\"txtclientPassword.errors && txtclientPassword.touched\" class=\"badge-danger\">\r\n              This field is required\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-6\">\r\n            <label class=\"font-weight-bold\" style=\"color:#bf6a31\">\r\n              Re-Password\r\n            </label>\r\n            <input type=\"password\" max=\"200\" required class=\"form-control\" name=\"txtclientRePassword\" #txtclientRePassword=\"ngModel\" [(ngModel)]=\"clientRePassword\" />\r\n            <div *ngIf=\"txtclientRePassword.errors && txtclientRePassword.touched\" class=\"badge-danger\">\r\n              This field is required\r\n            </div>\r\n            <div *ngIf=\"clientPassword != clientRePassword && txtclientRePassword.touched\" class=\"badge-danger\">\r\n              This password doesn't match\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n\r\n        <div class=\"row col-12 mb-3\">\r\n          <div class=\"col-6\">\r\n            <label class=\"font-weight-bold\" style=\"color:#bf6a31\">\r\n              Organization Name\r\n            </label>\r\n            <input type=\"text\" max=\"200\" required class=\"form-control\" name=\"txtclientOrganizationName\" #txtclientOrganizationName=\"ngModel\" [(ngModel)]=\"clientOrganizationName\" />\r\n            <div *ngIf=\"txtclientOrganizationName.errors && txtclientOrganizationName.touched\" class=\"badge-danger\">\r\n              This field is required\r\n            </div>\r\n          </div>\r\n          <div class=\"col-6\">\r\n            <label class=\"font-weight-bold\" style=\"color:#bf6a31\">\r\n              Organization Type\r\n            </label>\r\n            <select class=\"form-control\" required name=\"OrganizationTypeId\" #OrganizationTypeId=\"ngModel\" [(ngModel)]=\"clientOrganizationTypeId\">\r\n              <option [ngValue]=\"undefined\" disabled selected>--Select--</option>\r\n              <option *ngFor=\"let orgtype of OrganizationTypes\" [value]=\"orgtype.id\">\r\n                {{ orgtype.name }}\r\n              </option>\r\n            </select>\r\n            <div *ngIf=\"!OrganizationTypeId.valid && OrganizationTypeId.touched\" class=\"badge-danger\">\r\n              This field is required\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row col-12 mb-3\">\r\n          <div class=\"col-6\">\r\n            <label class=\"font-weight-bold\" style=\"color:#bf6a31\">\r\n              Your Job Title\r\n            </label>\r\n            <input type=\"text\" max=\"200\" required class=\"form-control\" name=\"txtclientJobTitle\" #txtclientJobTitle=\"ngModel\" [(ngModel)]=\"clientJobTitle\" />\r\n            <div *ngIf=\"txtclientJobTitle.errors && txtclientJobTitle.touched\" class=\"badge-danger\">\r\n              This field is required\r\n            </div>\r\n          </div>\r\n          <div class=\"col-6\">\r\n\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row col-12 mb-2\">\r\n          <div class=\"col-12\">\r\n            <button class=\"btn btn-success float-right\" [disabled]=\"!basicInfoForm.valid\" (click)=\"Register()\">Register</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n\r\n\r\n\r\n\r\n\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n\r\n  \r\n\r\n\r\n\r\n<div style=\"bottom: 0;width: 100%;background-color:black;color:white\" class=\"text-center\">\r\n  <br />\r\n  Sponsored by the American Standardization Association of Information & Communications Technology\r\n  <br />\r\n  <br />\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _finish_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./finish.component */ "./src/app/finish.component.ts");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home.component */ "./src/app/home.component.ts");
/* harmony import */ var _register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register.component */ "./src/app/register.component.ts");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.component */ "./src/app/login.component.ts");
/* harmony import */ var _audit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./audit.component */ "./src/app/audit.component.ts");








const routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: _home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
    },
    {
        path: 'login',
        component: _login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
    },
    {
        path: 'register',
        component: _register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"],
    },
    {
        path: 'audit',
        component: _audit_component__WEBPACK_IMPORTED_MODULE_7__["AuditComponent"],
    },
    {
        path: 'finish',
        component: _finish_component__WEBPACK_IMPORTED_MODULE_3__["FinishComponent"],
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"], useHash: true, scrollPositionRestoration: 'enabled' })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _finish_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./finish.component */ "./src/app/finish.component.ts");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home.component */ "./src/app/home.component.ts");
/* harmony import */ var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/radiobutton */ "./node_modules/primeng/radiobutton.js");
/* harmony import */ var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primeng_radiobutton__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _register_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./register.component */ "./src/app/register.component.ts");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./login.component */ "./src/app/login.component.ts");
/* harmony import */ var _audit_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./audit.component */ "./src/app/audit.component.ts");
/* harmony import */ var primeng_accordion__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/accordion */ "./node_modules/primeng/accordion.js");
/* harmony import */ var primeng_accordion__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(primeng_accordion__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/tooltip */ "./node_modules/primeng/tooltip.js");
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(primeng_tooltip__WEBPACK_IMPORTED_MODULE_16__);

















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _finish_component__WEBPACK_IMPORTED_MODULE_6__["FinishComponent"], _home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"], _register_component__WEBPACK_IMPORTED_MODULE_11__["RegisterComponent"], _login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"], _audit_component__WEBPACK_IMPORTED_MODULE_13__["AuditComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], primeng_radiobutton__WEBPACK_IMPORTED_MODULE_8__["RadioButtonModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["BrowserAnimationsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"], primeng_accordion__WEBPACK_IMPORTED_MODULE_14__["AccordionModule"], primeng_tooltip__WEBPACK_IMPORTED_MODULE_16__["TooltipModule"]
        ],
        providers: [_app_service__WEBPACK_IMPORTED_MODULE_9__["AppService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/app.service.ts":
/*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let AppService = class AppService {
    constructor(http) {
        this.http = http;
    }
    getQuestion() {
        let URL = "assets/data/question.json";
        return this.http.get(URL);
    }
    getorganizationType() {
        let URL = "assets/data/organizationType.json";
        return this.http.get(URL);
    }
    getSections() {
        let URL = "assets/data/section.json";
        return this.http.get(URL);
    }
    getauditQuestions() {
        let URL = "assets/data/auditQuestion.json";
        return this.http.get(URL);
    }
};
AppService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AppService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AppService);



/***/ }),

/***/ "./src/app/audit.component.ts":
/*!************************************!*\
  !*** ./src/app/audit.component.ts ***!
  \************************************/
/*! exports provided: AuditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuditComponent", function() { return AuditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");





let AuditComponent = class AuditComponent {
    constructor(router, service) {
        this.router = router;
        this.service = service;
        this.sections = [];
        this.mySections = [];
        this.questions = [];
        this.myQuestions = [];
        this.load = false;
        this.error = false;
        this.underdeveloped = false;
        this.service.getSections().subscribe((res) => {
            this.sections = res;
            this.service.getQuestion().subscribe((res) => {
                this.questions = res;
                this.service.getauditQuestions().subscribe((res) => {
                    this.myQuestions = res.filter(function (item) { return item.organizationType == _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].organizationType; });
                    let secid = this.myQuestions.map((function (item) { return item.sectionid; }));
                    let quesid = this.myQuestions.map((function (item) { return item.questionid; }));
                    this.mySections = this.sections.filter((function (item) { return secid.findIndex(x => { return x == item.id; }) >= 0; }));
                    this.mySections = this.mySections.map(function (item) { item.questions = []; return item; });
                    let myques = this.questions.filter((function (item) { return quesid.findIndex(x => { return x == item.id; }) >= 0; }));
                    for (var i = 0; i < this.mySections.length; i++) {
                        let qes = myques.filter(function (item) { return item.section == this.mySections[i].id; }, this);
                        for (var j = 0; j < qes.length; j++) {
                            this.mySections[i].questions.push(qes[j]);
                        }
                    }
                    this.load = true;
                });
            });
        });
    }
    ngOnInit() {
    }
    getTotal(secid) {
        let str = "";
        let total = 0;
        let totalanswers = 0;
        let arr = this.mySections.filter(function (item) { return item.id == secid; });
        for (var i = 0; i < arr[0].questions.length; i++) {
            if (arr[0].questions[i].currentAnswer != 'N/A') {
                total = total + arr[0].questions[i].maxPoint;
                totalanswers = totalanswers + (arr[0].questions[i].currentAnswer ? +arr[0].questions[i].currentAnswer : 0);
            }
        }
        return totalanswers.toString() + "/" + total.toString();
    }
    audit() {
    }
    save() {
        this.error = true;
        this.underdeveloped = false;
    }
    reports() {
    }
    saveAction() {
        this.error = false;
        this.underdeveloped = true;
    }
};
AuditComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"] }
];
AuditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-audit',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./audit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/audit.component.html")).default,
    })
], AuditComponent);



/***/ }),

/***/ "./src/app/finish.component.ts":
/*!*************************************!*\
  !*** ./src/app/finish.component.ts ***!
  \*************************************/
/*! exports provided: FinishComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinishComponent", function() { return FinishComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let FinishComponent = class FinishComponent {
    constructor(router) {
        this.router = router;
    }
    back() {
        this.router.navigateByUrl('home');
    }
};
FinishComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
FinishComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-finish',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./finish.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/finish.component.html")).default,
    })
], FinishComponent);



/***/ }),

/***/ "./src/app/home.component.ts":
/*!***********************************!*\
  !*** ./src/app/home.component.ts ***!
  \***********************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let HomeComponent = class HomeComponent {
    constructor(router, service) {
        this.router = router;
        this.service = service;
        this.title = 'feedback';
    }
};
HomeComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home.component.html")).default,
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/login.component.ts":
/*!************************************!*\
  !*** ./src/app/login.component.ts ***!
  \************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let LoginComponent = class LoginComponent {
    constructor(router) {
        this.router = router;
        this.showLoginFail = false;
    }
    login() {
        this.showLoginFail = false;
        if (this.userName == "ehab" && this.password == "000")
            this.router.navigateByUrl('audit');
        else
            this.showLoginFail = true;
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login.component.html")).default,
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/register.component.ts":
/*!***************************************!*\
  !*** ./src/app/register.component.ts ***!
  \***************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let RegisterComponent = class RegisterComponent {
    constructor(router, service) {
        this.router = router;
        this.service = service;
        this.title = 'feedback';
        this.mode = 1;
        this.OrganizationTypes = [];
        this.service.getorganizationType().subscribe((res) => {
            this.OrganizationTypes = res;
        });
    }
    ngOnInit() {
    }
    Register() {
        this.router.navigateByUrl('login');
    }
};
RegisterComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"] }
];
RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/register.component.html")).default,
    })
], RegisterComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
    organizationType: 1
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Ahmed Esmat\Free Lance\feedback\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map