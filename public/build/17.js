webpackJsonp([17],{

/***/ 436:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodStatusPageModule", function() { return FoodStatusPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__food_status__ = __webpack_require__(520);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FoodStatusPageModule = /** @class */ (function () {
    function FoodStatusPageModule() {
    }
    FoodStatusPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__food_status__["a" /* FoodStatusPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__food_status__["a" /* FoodStatusPage */]),
            ],
        })
    ], FoodStatusPageModule);
    return FoodStatusPageModule;
}());

//# sourceMappingURL=food-status.module.js.map

/***/ }),

/***/ 520:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FoodStatusPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(273);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
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
 * Generated class for the FoodStatusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FoodStatusPage = /** @class */ (function () {
    function FoodStatusPage(navCtrl, navParams, detailing) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.detailing = detailing;
        this.DetailList$ = this.detailing
            .getDetailList()
            .snapshotChanges()
            .map(function (Change) {
            return Change.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
    }
    FoodStatusPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FoodStatusPage');
    };
    FoodStatusPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-food-status',template:/*ion-inline-start:"G:\ChunWarayut\LungNuad\src\pages\food-status\food-status.html"*/'<!--\n\n  Generated template for the FoodStatusPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar color="boa">\n\n        <ion-title>foodStatus</ion-title>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n          </button>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n\n\n  <ion-card *ngFor="let detail of DetailList$ | async">\n\n    <ion-grid>\n\n      <ion-row>\n\n        <ion-col>\n\n\n\n        </ion-col>\n\n        <ion-col col-auto>\n\n          <ion-label > \n\n            รหัสสั่งซื้อ : {{detail.DETAIL_ID}}\n\n          </ion-label>\n\n        </ion-col>\n\n        <ion-col col-auto>\n\n          <ion-label > \n\n              {{detail.DETAIL_STATUS}} \n\n          </ion-label>\n\n        </ion-col>\n\n        <ion-col>\n\n\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"G:\ChunWarayut\LungNuad\src\pages\food-status\food-status.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* ServiceProvider */]])
    ], FoodStatusPage);
    return FoodStatusPage;
}());

//# sourceMappingURL=food-status.js.map

/***/ })

});
//# sourceMappingURL=17.js.map