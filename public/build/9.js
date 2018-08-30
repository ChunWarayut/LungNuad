webpackJsonp([9],{

/***/ 446:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuTypeEditPageModule", function() { return MenuTypeEditPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu_type_edit__ = __webpack_require__(530);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MenuTypeEditPageModule = /** @class */ (function () {
    function MenuTypeEditPageModule() {
    }
    MenuTypeEditPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__menu_type_edit__["a" /* MenuTypeEditPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__menu_type_edit__["a" /* MenuTypeEditPage */]),
            ],
        })
    ], MenuTypeEditPageModule);
    return MenuTypeEditPageModule;
}());

//# sourceMappingURL=menu-type-edit.module.js.map

/***/ }),

/***/ 530:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuTypeEditPage; });
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
 * Generated class for the MenuTypeEditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MenuTypeEditPage = /** @class */ (function () {
    function MenuTypeEditPage(navCtrl, navParams, typeing, toast, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.typeing = typeing;
        this.toast = toast;
        this.alertCtrl = alertCtrl;
    }
    MenuTypeEditPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MenuTypeEditPage');
    };
    MenuTypeEditPage.prototype.ionViewWillLoad = function () {
        this.type = this.navParams.get('type');
    };
    /*
    save(type){
      this.typeing.editTypeItem(type).then(() =>{
        this.toast.show(`${type.FOOD_TYPE_NAME} save!`)
        this.navCtrl.setRoot('HomeAdminPage');});
    }
  */
    MenuTypeEditPage.prototype.save = function (type) {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: this.type.FOOD_TYPE_NAME,
            message: 'คุณต้องการแก้ไขเป็น  ' + this.type.FOOD_TYPE_NAME + ' ใช่หรือไม่',
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
                        _this.typeing.editTypeItem(type).then(function () {
                            _this.toast.show(type.FOOD_TYPE_NAME + " save!");
                            _this.navCtrl.setRoot('HomeAdminPage');
                        });
                    }
                }
            ]
        });
        confirm.present();
    };
    MenuTypeEditPage.prototype.removeItem = function (type) {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: this.type.FOOD_TYPE_NAME,
            message: 'คุณต้องการลบ  ' + this.type.FOOD_TYPE_NAME + ' ใช่หรือไม่',
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
                        _this.typeing.removeTyperItem(type).then(function () {
                            _this.toast.show(type.FOOD_TYPE_NAME + " deleted!");
                            _this.navCtrl.setRoot('HomeAdminPage');
                        });
                    }
                }
            ]
        });
        confirm.present();
    };
    MenuTypeEditPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-menu-type-edit',template:/*ion-inline-start:"G:\ChunWarayut\LungNuad\src\pages\menu-type-edit\menu-type-edit.html"*/'<!--\n\n  Generated template for the MenuTypeEditPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    \n\n    <ion-title>{{type?.FOOD_TYPE_NAME}}</ion-title>\n\n\n\n    <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n    <ion-grid>\n\n        <ion-row>\n\n    \n\n            <ion-col>\n\n    \n\n            </ion-col>\n\n    \n\n          <ion-col col-auto>\n\n\n\n\n\n    <ion-card color="primary"> \n\n      \n\n      <ion-item >\n\n        <ion-label>เมนู {{type.FOOD_TYPE_ID}}</ion-label>\n\n      </ion-item>\n\n      <ion-item >\n\n        <ion-label>ชื่อประเภท</ion-label>\n\n      <ion-input [(ngModel)]="type.FOOD_TYPE_NAME"></ion-input>\n\n      </ion-item>\n\n    </ion-card>\n\n      <button ion-button block (click)="save(type)">แก้ไข</button>\n\n      \n\n      <button ion-button block color="danger" (click)="removeItem(type)">ลบ</button>\n\n\n\n      \n\n       \n\n  </ion-col>\n\n     \n\n  <ion-col>\n\n    \n\n  </ion-col>\n\n\n\n</ion-row>\n\n</ion-grid>\n\n\n\n\n\n\n\n      </ion-content>\n\n    '/*ion-inline-end:"G:\ChunWarayut\LungNuad\src\pages\menu-type-edit\menu-type-edit.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* ServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_toast_service_toast_service__["a" /* ToastServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], MenuTypeEditPage);
    return MenuTypeEditPage;
}());

//# sourceMappingURL=menu-type-edit.js.map

/***/ })

});
//# sourceMappingURL=9.js.map