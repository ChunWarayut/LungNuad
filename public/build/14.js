webpackJsonp([14],{

/***/ 439:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginAdminPageModule", function() { return LoginAdminPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_admin__ = __webpack_require__(523);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginAdminPageModule = /** @class */ (function () {
    function LoginAdminPageModule() {
    }
    LoginAdminPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login_admin__["a" /* LoginAdminPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login_admin__["a" /* LoginAdminPage */]),
            ],
        })
    ], LoginAdminPageModule);
    return LoginAdminPageModule;
}());

//# sourceMappingURL=login-admin.module.js.map

/***/ }),

/***/ 523:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginAdminPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(74);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the LoginAdminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 *
 * new Date().toISOString()
 *
 */
var LoginAdminPage = /** @class */ (function () {
    function LoginAdminPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LoginAdminPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginAdminPage');
    };
    LoginAdminPage.prototype.login = function () {
        //Api connections
        this.navCtrl.push('HomeAdminPage');
    };
    LoginAdminPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login-admin',template:/*ion-inline-start:"G:\ChunWarayut\LungNuad\src\pages\login-admin\login-admin.html"*/'<!--\n\n  Generated template for the LoginAdminPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n\n\n  <ion-navbar color="boa">\n\n        <ion-title>ผู้ดูแลระบบ</ion-title>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n          </button>\n\n  </ion-navbar>\n\n\n\n\n\n    \n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n\n\n\n\n    <ion-grid>\n\n        <ion-row>\n\n    \n\n            <ion-col>\n\n    \n\n            </ion-col>\n\n    \n\n          <ion-col col-auto>\n\n\n\n        <ion-list>\n\n\n\n          <ion-item>\n\n            <ion-label fixed>ชื่อผู้ใช้</ion-label>\n\n            <ion-input type="text" value=""></ion-input>\n\n          </ion-item>\n\n        \n\n          <ion-item>\n\n            <ion-label fixed>รหัสผ่าน</ion-label>\n\n            <ion-input type="password"></ion-input>\n\n          </ion-item>\n\n        \n\n          <button ion-button block color="energy" (click)="login()">เข้าสู่ระบบ</button>\n\n        \n\n        </ion-list>\n\n \n\n  <!--\n\n\n\n\n\n     <ion-list>\n\n\n\n    <ion-item>\n\n      <ion-label fixed>Username</ion-label>\n\n      <ion-input type="text" value=""></ion-input>\n\n    </ion-item>\n\n  \n\n    <ion-item>\n\n      <ion-label fixed>Password</ion-label>\n\n      <ion-input type="password"></ion-input>\n\n    </ion-item>\n\n  \n\n    <button ion-button block color="primary" (click)="login()">Login</button>\n\n  \n\n  </ion-list>\n\n  \n\n  -->\n\n \n\n\n\n\n\n\n\n</ion-col>\n\n     \n\n<ion-col>\n\n  \n\n</ion-col>\n\n\n\n</ion-row>\n\n</ion-grid>\n\n\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"G:\ChunWarayut\LungNuad\src\pages\login-admin\login-admin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], LoginAdminPage);
    return LoginAdminPage;
}());

//# sourceMappingURL=login-admin.js.map

/***/ })

});
//# sourceMappingURL=14.js.map