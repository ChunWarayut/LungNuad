webpackJsonp([4],{

/***/ 451:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingPageModule", function() { return SettingPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__setting__ = __webpack_require__(535);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SettingPageModule = /** @class */ (function () {
    function SettingPageModule() {
    }
    SettingPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__setting__["a" /* SettingPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__setting__["a" /* SettingPage */]),
            ],
        })
    ], SettingPageModule);
    return SettingPageModule;
}());

//# sourceMappingURL=setting.module.js.map

/***/ }),

/***/ 535:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingPage; });
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
 * Generated class for the SettingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SettingPage = /** @class */ (function () {
    function SettingPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SettingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SettingPage');
    };
    SettingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-setting',template:/*ion-inline-start:"G:\ChunWarayut\LungNuad\src\pages\setting\setting.html"*/'<!--\n\n  Generated template for the SettingPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar color="boa">\n\n        <ion-title>setting</ion-title>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n          </button>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n    <ion-grid>\n\n        <ion-row>\n\n    \n\n            <ion-col>\n\n    \n\n            </ion-col>\n\n    \n\n          <ion-col >\n\n\n\n\n\n    <ion-list>\n\n        <ion-item>\n\n          <ion-label fixed> \n\n            รหัสลูกค้า :         \n\n          </ion-label>\n\n          <ion-label> \n\n            B_1524178890       \n\n          </ion-label>\n\n        </ion-item>   \n\n        <ion-item>\n\n          <ion-label fixed> \n\n            ชื่อลูกค้า :         \n\n          </ion-label>\n\n          <ion-label> \n\n            สมชาย ใจดี          \n\n          </ion-label>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label fixed>           \n\n            ที่อยู่ : \n\n          </ion-label>\n\n          <ion-label>           \n\n            25/1 ต.เมืองพล อ.พล จ.ขอนแก่น 40120\n\n          </ion-label>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label fixed>           \n\n            เบอร์โทรศัพท์ :\n\n          </ion-label>  \n\n          <ion-label >           \n\n            0912345678     \n\n          </ion-label>  \n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label fixed> \n\n            Email :\n\n          </ion-label>\n\n          <ion-label > \n\n            somchay121224@sanook.com\n\n          </ion-label>\n\n        </ion-item>\n\n  \n\n        <button ion-button full navPush="SettingEditPage">\n\n            แก้ไข\n\n        </button>\n\n\n\n      </ion-list>\n\n \n\n    </ion-col>\n\n     \n\n    <ion-col>\n\n      \n\n    </ion-col>\n\n  \n\n  </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"G:\ChunWarayut\LungNuad\src\pages\setting\setting.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], SettingPage);
    return SettingPage;
}());

//# sourceMappingURL=setting.js.map

/***/ })

});
//# sourceMappingURL=4.js.map