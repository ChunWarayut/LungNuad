webpackJsonp([19],{

/***/ 435:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodListPageModule", function() { return FoodListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__food_list__ = __webpack_require__(519);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FoodListPageModule = /** @class */ (function () {
    function FoodListPageModule() {
    }
    FoodListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__food_list__["a" /* FoodListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__food_list__["a" /* FoodListPage */]),
            ],
        })
    ], FoodListPageModule);
    return FoodListPageModule;
}());

//# sourceMappingURL=food-list.module.js.map

/***/ }),

/***/ 519:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FoodListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_service_service__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(74);
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
 * Generated class for the FoodListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FoodListPage = /** @class */ (function () {
    function FoodListPage(navCtrl, navParams, fooding) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fooding = fooding;
        this.FoodList$ = this.fooding
            .getFoodList()
            .snapshotChanges()
            .map(function (Change) {
            return Change.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
    }
    FoodListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FoodListPage');
    };
    FoodListPage.prototype.doRefresh = function (refresher) {
        console.log('Begin async operation', refresher);
        this.FoodList$ = this.fooding
            .getFoodList()
            .snapshotChanges()
            .map(function (Change) {
            return Change.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    };
    FoodListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-food-list',template:/*ion-inline-start:"G:\ChunWarayut\LungNuad\src\pages\food-list\food-list.html"*/'<!--\n\n  Generated template for the FoodListPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar color="boa">\n\n      <ion-title>รายการอาหาร</ion-title>\n\n      <button ion-button menuToggle>\n\n          <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n\n\n        \n\n     <ion-buttons end>\n\n        <button navPush="CartPage" ion-button>\n\n            <ion-icon ios="ios-cart" md="md-cart"></ion-icon>\n\n        </button>\n\n      </ion-buttons>\n\n\n\n\n\n\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content >\n\n\n\n\n\n    <ion-grid>\n\n        <ion-row>\n\n    \n\n            <ion-col>\n\n    \n\n            </ion-col>\n\n    \n\n          <ion-col col-auto>\n\n\n\n            \n\n\n\n\n\n    <!-- Refresh -->\n\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n\n      <ion-refresher-content\n\n        pullingIcon="arrow-dropdown"\n\n        pullingText="Pull to refresh"\n\n        refreshingSpinner="circles">\n\n      </ion-refresher-content>\n\n       <!-- refreshingText="Refreshing...">\n\n      </ion-refresher-content>-->\n\n    </ion-refresher>\n\n    <!--  -->\n\n    <ion-grid>\n\n     <ion-row>\n\n         <ion-col col-6   *ngFor="let food of FoodList$ | async" detail-push navPush="FoodDetailPage" [navParams]="{food: food}">\n\n    <ion-card color="Beige"> \n\n      <img  src="https://firebasestorage.googleapis.com/v0/b/lungnuad-a547e.appspot.com/o/images%2F{{food.FOOD_IMG}}.jpg?alt=media&token=b934ec8f-234a-47cf-9d6a-4b5376fdb8d8">\n\n      <p align="center">\n\n          {{food.FOOD_NAME}}      \n\n      </p>\n\n      <p align="center">\n\n        ราคา : {{food.FOOD_PRICE}}\n\n      </p>\n\n      <ion-label hidden>           \n\n          ประเภทอาหาร : {{food.FOOD_TYPE_NAME}}          \n\n      </ion-label>\n\n    </ion-card>    \n\n  </ion-col>\n\n</ion-row>\n\n</ion-grid>\n\n<!--\n\n  <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n\n    <ion-infinite-scroll-content\n\n      loadingSpinner="bubbles"\n\n      loadingText="Loading more data...">\n\n    </ion-infinite-scroll-content>\n\n  </ion-infinite-scroll>\n\n-->\n\n\n\n\n\n\n\n</ion-col>\n\n     \n\n<ion-col>\n\n  \n\n</ion-col>\n\n\n\n</ion-row>\n\n</ion-grid>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"G:\ChunWarayut\LungNuad\src\pages\food-list\food-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0__providers_service_service__["a" /* ServiceProvider */]])
    ], FoodListPage);
    return FoodListPage;
}());

//# sourceMappingURL=food-list.js.map

/***/ })

});
//# sourceMappingURL=19.js.map