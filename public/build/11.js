webpackJsonp([11],{

/***/ 444:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuListPageModule", function() { return MenuListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu_list__ = __webpack_require__(528);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MenuListPageModule = /** @class */ (function () {
    function MenuListPageModule() {
    }
    MenuListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__menu_list__["a" /* MenuListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__menu_list__["a" /* MenuListPage */]),
            ],
        })
    ], MenuListPageModule);
    return MenuListPageModule;
}());

//# sourceMappingURL=menu-list.module.js.map

/***/ }),

/***/ 528:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuListPage; });
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
 * Generated class for the MenuListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MenuListPage = /** @class */ (function () {
    function MenuListPage(navCtrl, navParams, Fooding) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.Fooding = Fooding;
        this.FoodList$ = this.Fooding
            .getFoodList()
            .snapshotChanges()
            .map(function (Change) {
            return Change.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
    }
    MenuListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MenuListPage');
    };
    MenuListPage.prototype.doRefresh = function (refresher) {
        console.log('Begin async operation', refresher);
        this.FoodList$ = this.Fooding
            .getFoodList()
            .snapshotChanges()
            .map(function (Change) {
            return Change.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.complete();
        }, 9000);
    };
    MenuListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-menu-list',template:/*ion-inline-start:"G:\ChunWarayut\LungNuad\src\pages\menu-list\menu-list.html"*/'<!--\n\n  Generated template for the MenuListPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n<ion-header>\n\n\n\n  <ion-navbar color="boa">\n\n    <ion-title>menuList</ion-title>\n\n    <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n\n\n    <ion-buttons end>\n\n      <button navPush="MenuListAddPage" ion-button>\n\n        <ion-icon ios="ios-add-circle-outline" md="md-add-circle"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n\n\n\n\n    <ion-grid>\n\n        <ion-row>\n\n    \n\n            <ion-col>\n\n    \n\n            </ion-col>\n\n    \n\n          <ion-col col-auto>\n\n\n\n\n\n\n\n\n\n  <!-- Refresh -->\n\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n\n      <ion-refresher-content\n\n        pullingIcon="arrow-dropdown"\n\n        pullingText="Pull to refresh"\n\n        refreshingSpinner="circles">\n\n      </ion-refresher-content>\n\n      <!-- refreshingText="Refreshing...">\n\n      </ion-refresher-content>-->\n\n    </ion-refresher>\n\n    <!--  \n\n    <ion-grid>\n\n    <ion-row>\n\n    \n\n      \n\n        <ion-col col-6   *ngFor="let food of FoodList$ | async" detail-push navPush="MenuListEditPage" [navParams]="{item: item}">\n\n    -->\n\n    <ion-grid>\n\n        <ion-row>\n\n          <ion-col align="center" col-6 *ngFor="let food of FoodList$ | async" detail-push navPush="MenuListEditPage" [navParams]="{food: food}">\n\n\n\n    <ion-card > \n\n<!--\n\n      <img height="100" width="100" src="https://firebasestorage.googleapis.com/v0/b/lungnuad-a547e.appspot.com/o/images%2F{{food.FOOD_IMG}}.jpg?alt=media&token=b934ec8f-234a-47cf-9d6a-4b5376fdb8d8">\n\n-->\n\n<!--\n\n\n\n  <ion-grid>\n\n        <ion-row>\n\n          <ion-col>\n\n            <h1></h1>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n\n\n\n\n-->\n\n    \n\n    \n\n      \n\n      <ion-item>\n\n          <ion-label align="center">\n\n              <img src="https://firebasestorage.googleapis.com/v0/b/lungnuad-a547e.appspot.com/o/images%2F{{food.FOOD_IMG}}.jpg?alt=media&token=b934ec8f-234a-47cf-9d6a-4b5376fdb8d8">\n\n            </ion-label> \n\n          </ion-item>      \n\n\n\n          <ion-list>\n\n              <ion-label align="left">           \n\n               &nbsp;  รหัส : {{food.FOOD_ID}}          \n\n              </ion-label>\n\n      \n\n              <ion-label align="left"> \n\n               &nbsp;  ชื่อ : {{food.FOOD_NAME}}\n\n              </ion-label>\n\n      \n\n              <ion-label align="left"> \n\n               &nbsp;  ราคา : {{food.FOOD_PRICE}}\n\n              </ion-label>\n\n      \n\n              <ion-label align="left">           \n\n               &nbsp;  ประเภทอาหาร : {{food.FOOD_TYPE_NAME}}          \n\n              </ion-label>\n\n      \n\n\n\n          </ion-list>\n\n         \n\n\n\n    </ion-card>   \n\n\n\n  </ion-col>\n\n</ion-row>\n\n</ion-grid>\n\n\n\n\n\n    <!-- \n\n  </ion-col>\n\n  </ion-row>\n\n  </ion-grid>\n\n-->\n\n\n\n \n\n</ion-col>\n\n     \n\n<ion-col>\n\n  \n\n</ion-col>\n\n\n\n</ion-row>\n\n</ion-grid>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"G:\ChunWarayut\LungNuad\src\pages\menu-list\menu-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0__providers_service_service__["a" /* ServiceProvider */]])
    ], MenuListPage);
    return MenuListPage;
}());

//# sourceMappingURL=menu-list.js.map

/***/ })

});
//# sourceMappingURL=11.js.map