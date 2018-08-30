webpackJsonp([10],{

/***/ 445:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuTypeAddPageModule", function() { return MenuTypeAddPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu_type_add__ = __webpack_require__(529);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MenuTypeAddPageModule = /** @class */ (function () {
    function MenuTypeAddPageModule() {
    }
    MenuTypeAddPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__menu_type_add__["a" /* MenuTypeAddPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__menu_type_add__["a" /* MenuTypeAddPage */]),
            ],
        })
    ], MenuTypeAddPageModule);
    return MenuTypeAddPageModule;
}());

//# sourceMappingURL=menu-type-add.module.js.map

/***/ }),

/***/ 529:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuTypeAddPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_toast_service_toast_service__ = __webpack_require__(274);
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
 * Generated class for the MenuTypeAddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MenuTypeAddPage = /** @class */ (function () {
    function MenuTypeAddPage(navCtrl, navParams, typeing, toast, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.typeing = typeing;
        this.toast = toast;
        this.alertCtrl = alertCtrl;
        this.type = {
            FOOD_TYPE_ID: undefined,
            FOOD_TYPE_NAME: undefined
        };
    }
    MenuTypeAddPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MenuTypeAddPage');
    };
    /*
      addTypeItem(type:Type){
    
        this.type.FOOD_TYPE_ID = "T_" + Math.floor(Date.now() / 100);
    
        this.typeing.addTypeItem(type).then(ref =>{
    
          this.toast.show(`${type.FOOD_TYPE_NAME}  เพิ่มสำเร็จ`)
    
          this.navCtrl.setRoot('HomeAdminPage', {key:ref.key});
        });
      }
      */
    MenuTypeAddPage.prototype.showConfirm = function (type) {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: this.type.FOOD_TYPE_NAME,
            message: 'คุณต้องการเพิ่ม  ' + this.type.FOOD_TYPE_NAME + ' ใช่หรือไม่',
            buttons: [
                {
                    text: 'ไม่ใช่',
                    handler: function () {
                        console.log('Disagree clicked');
                        _this.navCtrl.setRoot('HomeAdminPage');
                    }
                },
                {
                    text: 'ใช่',
                    handler: function () {
                        console.log('Agree clicked');
                        _this.type.FOOD_TYPE_ID = "T_" + Math.floor(Date.now() / 100);
                        _this.typeing.addTypeItem(type).then(function (ref) {
                            _this.toast.show(type.FOOD_TYPE_NAME + "  \u0E40\u0E1E\u0E34\u0E48\u0E21\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08");
                            _this.navCtrl.setRoot('HomeAdminPage', { key: ref.key });
                        });
                    }
                }
            ]
        });
        confirm.present();
    };
    MenuTypeAddPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-menu-type-add',template:/*ion-inline-start:"G:\ChunWarayut\LungNuad\src\pages\menu-type-add\menu-type-add.html"*/'<!--\n\n  Generated template for the MenuTypeAddPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar color="boa">\n\n        <ion-title>เพิ่มประเภทอาหาร</ion-title>\n\n        <button ion-button menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n          </button>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n\n\n    <ion-grid>\n\n        <ion-row>\n\n    \n\n            <ion-col>\n\n    \n\n            </ion-col>\n\n    \n\n          <ion-col col-auto>\n\n\n\n\n\n  <ion-item>\n\n\n\n    <ion-label>ชื่อประเภทอาหาร</ion-label> \n\n\n\n    <ion-input [(ngModel)]="type.FOOD_TYPE_NAME"></ion-input>\n\n\n\n  </ion-item>\n\n\n\n\n\n  <div style="display:flex; flex-direction:column;justify-content:center">\n\n     \n\n    <button ion-button block full round large (click)=showConfirm(type)>Add</button>\n\n\n\n  </div>\n\n\n\n\n\n   \n\n</ion-col>\n\n     \n\n<ion-col>\n\n  \n\n</ion-col>\n\n\n\n</ion-row>\n\n</ion-grid>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"G:\ChunWarayut\LungNuad\src\pages\menu-type-add\menu-type-add.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* ServiceProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_toast_service_toast_service__["a" /* ToastServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], MenuTypeAddPage);
    return MenuTypeAddPage;
}());

//# sourceMappingURL=menu-type-add.js.map

/***/ })

});
//# sourceMappingURL=10.js.map