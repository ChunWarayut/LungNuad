webpackJsonp([8],{

/***/ 447:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuTypePageModule", function() { return MenuTypePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu_type__ = __webpack_require__(531);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MenuTypePageModule = /** @class */ (function () {
    function MenuTypePageModule() {
    }
    MenuTypePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__menu_type__["a" /* MenuTypePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__menu_type__["a" /* MenuTypePage */]),
            ],
        })
    ], MenuTypePageModule);
    return MenuTypePageModule;
}());

//# sourceMappingURL=menu-type.module.js.map

/***/ }),

/***/ 531:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuTypePage; });
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
 * Generated class for the MenuTypePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MenuTypePage = /** @class */ (function () {
    function MenuTypePage(navCtrl, navParams, typeing) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.typeing = typeing;
        this.TypeList$ = this.typeing
            .getTypeList()
            .snapshotChanges()
            .map(function (Change) {
            return Change.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
    }
    MenuTypePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MenuListPage');
    };
    MenuTypePage.prototype.doRefresh = function (refresher) {
        console.log('Begin async operation', refresher);
        this.TypeList$ = this.typeing
            .getTypeList()
            .snapshotChanges()
            .map(function (Change) {
            return Change.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.complete();
        }, 9000);
    };
    MenuTypePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-menu-type',template:/*ion-inline-start:"G:\ChunWarayut\LungNuad\src\pages\menu-type\menu-type.html"*/'<!--\n\n  Generated template for the MenuTypePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="boa">\n\n    <ion-title>ประเภทอาหาร</ion-title>\n\n    <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n    <ion-buttons end>\n\n      <button navPush="MenuTypeAddPage" ion-button>\n\n        <ion-icon name="add"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n\n\n    <!-- Refresh -->\n\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n\n        <ion-refresher-content\n\n          pullingIcon="arrow-dropdown"\n\n          pullingText="Pull to refresh"\n\n          refreshingSpinner="circles">\n\n        </ion-refresher-content>\n\n        <!-- refreshingText="Refreshing...">\n\n        </ion-refresher-content>-->\n\n      </ion-refresher>\n\n      <!--  -->\n\n      <ion-card color="Beige" *ngFor="let type of TypeList$ | async" detail-push navPush="MenuTypeEditPage" [navParams]="{type: type}"> \n\n        \n\n        <ion-item>\n\n          <ion-label>รหัสประเภทอาหาร</ion-label> \n\n          <ion-label> {{type.FOOD_TYPE_ID}} </ion-label>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n          <ion-label>ชื่อประเภทอาหาร</ion-label> \n\n          <ion-label> {{type.FOOD_TYPE_NAME}} </ion-label>\n\n        </ion-item>\n\n\n\n      </ion-card>    \n\n\n\n\n\n\n\n\n\n    \n\n\n\n</ion-content>\n\n'/*ion-inline-end:"G:\ChunWarayut\LungNuad\src\pages\menu-type\menu-type.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* ServiceProvider */]])
    ], MenuTypePage);
    return MenuTypePage;
}());

//# sourceMappingURL=menu-type.js.map

/***/ })

});
//# sourceMappingURL=8.js.map