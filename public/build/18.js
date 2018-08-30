webpackJsonp([18],{

/***/ 453:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodOrderPageModule", function() { return FoodOrderPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__food_order__ = __webpack_require__(537);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FoodOrderPageModule = /** @class */ (function () {
    function FoodOrderPageModule() {
    }
    FoodOrderPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__food_order__["a" /* FoodOrderPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__food_order__["a" /* FoodOrderPage */]),
            ],
        })
    ], FoodOrderPageModule);
    return FoodOrderPageModule;
}());

//# sourceMappingURL=food-order.module.js.map

/***/ }),

/***/ 537:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FoodOrderPage; });
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
 * Generated class for the FoodOrderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FoodOrderPage = /** @class */ (function () {
    function FoodOrderPage(navCtrl, navParams, detailing) {
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
    FoodOrderPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FoodOrderPage');
    };
    FoodOrderPage.prototype.GoBack = function () {
        this.navCtrl.setRoot('FoodListPage');
    };
    FoodOrderPage.prototype.GoBackStatus = function () {
        this.navCtrl.setRoot('FoodStatusPage');
    };
    FoodOrderPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-food-order',template:/*ion-inline-start:"G:\ChunWarayut\LungNuad\src\pages\food-order\food-order.html"*/'<!--\n\n  Generated template for the FoodOrderPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar color="boa">\n\n        <ion-title>foodOrder</ion-title>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n          </button>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n   \n\n    <button ion-button block (click)="GoBack()">สั่งอาหารเพิ่ม</button>\n\n    <button ion-button block color="energy" (click)="GoBackStatus()">ตรวจสอบสถานะ</button>\n\n\n\n  <ion-grid>\n\n      <ion-row>\n\n        <ion-col *ngFor="let detail of DetailList$ | async">\n\n\n\n        <ion-list> \n\n          \n\n          <ion-item>\n\n    \n\n          <ion-label fixed> \n\n            รหัสสั่งซื้อ :\n\n          </ion-label>\n\n\n\n          <ion-label > \n\n            {{detail.DETAIL_ID}}\n\n          </ion-label>\n\n\n\n          </ion-item>\n\n\n\n\n\n          <ion-item>\n\n\n\n          <ion-label fixed>           \n\n            ชื่อลูกค้า :         \n\n          </ion-label>\n\n\n\n          <ion-label>           \n\n            {{detail.BUYER_NAME}}          \n\n          </ion-label>\n\n\n\n          </ion-item>\n\n\n\n          <ion-item>\n\n\n\n          <ion-label fixed> \n\n            ราคา : \n\n          </ion-label>\n\n  \n\n          <ion-label> \n\n             {{detail.DETAIL_TOTAL}}\n\n            </ion-label>\n\n    \n\n          </ion-item>\n\n\n\n            <ion-item>\n\n\n\n\n\n          <ion-label fixed> \n\n            วันที่ : \n\n          </ion-label>\n\n\n\n          <ion-label text-wrap> \n\n              {{detail.DETAIL_DATE}}\n\n            </ion-label>\n\n  \n\n          </ion-item>\n\n\n\n            <ion-item>\n\n\n\n\n\n          <ion-label fixed>           \n\n            ที่อยู่ :          \n\n          </ion-label>\n\n\n\n          <ion-label text-wrap>           \n\n            {{detail.DETAIL_ADDRESS}}          \n\n            </ion-label>\n\n\n\n          </ion-item>\n\n\n\n            <ion-item>\n\n\n\n\n\n          <ion-label fixed>           \n\n            สถานะ :        \n\n          </ion-label>\n\n\n\n          <ion-label>           \n\n             {{detail.DETAIL_STATUS}}          \n\n            </ion-label>\n\n  \n\n          </ion-item>\n\n\n\n\n\n        </ion-list>\n\n\n\n      </ion-col>\n\n     \n\n\n\n    </ion-row>\n\n  </ion-grid>\n\n  \n\n</ion-content>\n\n'/*ion-inline-end:"G:\ChunWarayut\LungNuad\src\pages\food-order\food-order.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* ServiceProvider */]])
    ], FoodOrderPage);
    return FoodOrderPage;
}());

//# sourceMappingURL=food-order.js.map

/***/ })

});
//# sourceMappingURL=18.js.map