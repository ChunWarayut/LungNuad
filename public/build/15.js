webpackJsonp([15],{

/***/ 438:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(522);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]),
            ],
        })
    ], HomePageModule);
    return HomePageModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 522:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
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
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    HomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomePage');
    };
    HomePage.prototype.login = function () {
        this.navCtrl.push('LoginBuyerPage');
    };
    /**
    loginAdmin(){
     this.navCtrl.push('LoginAdminPage');
    }
      **/
    HomePage.prototype.loginAdmin = function () {
        this.navCtrl.push('LoginAdminPage');
    };
    HomePage.prototype.signup = function () {
        this.navCtrl.push('SigninBuyerPage');
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"G:\ChunWarayut\LungNuad\src\pages\home\home.html"*/'<ion-header>\n\n\n\n  <ion-navbar color="boa">\n\n    <ion-title>ราดแกงลุงหนวด</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding align="center">\n\n  <ion-grid>\n\n    <ion-row>\n\n\n\n        <ion-col>\n\n\n\n        </ion-col>\n\n\n\n      <ion-col col-auto>\n\n        <!--\n\n <ion-card color="bg">\n\n            <br/>\n\n  <p> </p>\n\n  <h1 align="center"> ราดแกงลุงหนวด </h1>\n\n  <br/>\n\n  </ion-card>\n\n        -->\n\n       \n\n  <ion-card color="bg">\n\n<p align="center">\n\n  <img src="assets/imgs/001.jpg" />\n\n</p>\n\n</ion-card>\n\n  <ion-grid>\n\n      <ion-row>\n\n        <ion-col>\n\n          <h1></h1>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  \n\n    <ion-grid >\n\n      <ion-row>\n\n        <ion-col center text-center>\n\n          <button ion-button full color="energy" (click)="signup()">สมัครสมาชิก</button>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col center text-center>\n\n          <button ion-button full color="primary" (click)="login()">เข้าสู่ระบบ</button>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n          <ion-col center text-center>\n\n              <br/>\n\n\n\n            <button ion-button full color="danger" (click)="loginAdmin()">เฉพาะผู้ดูแล</button>\n\n          </ion-col>\n\n        </ion-row>\n\n    </ion-grid>\n\n\n\n      </ion-col> \n\n     \n\n      <ion-col>\n\n        \n\n      </ion-col>\n\n\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"G:\ChunWarayut\LungNuad\src\pages\home\home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=15.js.map