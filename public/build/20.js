webpackJsonp([20],{

/***/ 434:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodDetailPageModule", function() { return FoodDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__food_detail__ = __webpack_require__(518);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FoodDetailPageModule = /** @class */ (function () {
    function FoodDetailPageModule() {
    }
    FoodDetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__food_detail__["a" /* FoodDetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__food_detail__["a" /* FoodDetailPage */]),
            ],
        })
    ], FoodDetailPageModule);
    return FoodDetailPageModule;
}());

//# sourceMappingURL=food-detail.module.js.map

/***/ }),

/***/ 518:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FoodDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_service_service__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(74);
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
 * Generated class for the FoodDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FoodDetailPage = /** @class */ (function () {
    function FoodDetailPage(navCtrl, navParams, carting, toast, loadingCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.carting = carting;
        this.toast = toast;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.cart = {
            CART_ID: undefined,
            CART_NAME: undefined,
            CART_AMOUT: 1,
            CART_PRICE: undefined,
        };
    }
    FoodDetailPage.prototype.ionViewDidLoad = function () {
    };
    FoodDetailPage.prototype.ionViewWillLoad = function () {
        this.food = this.navParams.get('food');
    };
    /*
      addDetailItem(detail:Detail){
    
        this.detail.DETAIL_ID = 'D_' +  Math.floor(Date.now() / 100);
    
        this.detail.FOOD_NAME = this.food.FOOD_NAME;
        this.detail.DETAIL_PRICE = this.food.FOOD_PRICE * this.detail.DETAIL_AMOUT;
        detail.DETAIL_DATE = new Date().toISOString();
        detail.BUYER_NAME = 'สมชาย ใจดี';
        detail.DETAIL_ADDRESS = '25/1 ต.เมืองพล อ.พล จ.ขอนแก่น';
        detail.DETAIL_STATUS = 'รอดำเนินการ';
    
    
        this.detailing.addDetailItem(detail).then(ref =>{
          this.toast.show(`${detail.FOOD_NAME} สั่งอาหารสำเร็จ`)
          this.navCtrl.setRoot('FoodOrderPage',  {key:ref.key});
        });
    
      }
      */
    FoodDetailPage.prototype.addCartItem = function (cart) {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: this.food.FOOD_NAME,
            message: 'คุณต้องการสั่ง  ' + this.food.FOOD_NAME + ' ใช่หรือไม่',
            buttons: [
                {
                    text: 'ไม่ใช่',
                    handler: function () {
                        console.log('Disagree clicked');
                        _this.navCtrl.setRoot('FoodListPage');
                    }
                },
                {
                    text: 'ใช่',
                    handler: function () {
                        console.log('Agree clicked');
                        _this.cart.CART_ID = 'C_' + Math.floor(Date.now() / 100);
                        _this.cart.CART_NAME = _this.food.FOOD_NAME;
                        _this.cart.CART_PRICE = _this.food.FOOD_PRICE * _this.cart.CART_AMOUT;
                        _this.carting.addCartItem(cart).then(function (ref) {
                            _this.toast.show(cart.CART_NAME + " \u0E40\u0E25\u0E37\u0E2D\u0E01\u0E2D\u0E32\u0E2B\u0E32\u0E23\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08");
                            _this.navCtrl.setRoot('CartPage', { key: ref.key });
                        });
                    }
                }
            ]
        });
        confirm.present();
    };
    FoodDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-food-detail',template:/*ion-inline-start:"G:\ChunWarayut\LungNuad\src\pages\food-detail\food-detail.html"*/'<!--\n\n  Generated template for the FoodDetailPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="boa">\n\n    <ion-title>{{food?.FOOD_NAME}}</ion-title>\n\n    <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n\n\n\n\n\n\n\n\n<ion-content padding>\n\n\n\n\n\n    <ion-grid>\n\n        <ion-row>\n\n    \n\n            <ion-col>\n\n    \n\n            </ion-col>\n\n    \n\n          <ion-col col-auto>\n\n\n\n                  <img  src="https://firebasestorage.googleapis.com/v0/b/lungnuad-a547e.appspot.com/o/images%2F{{food?.FOOD_IMG}}.jpg?alt=media&token=b934ec8f-234a-47cf-9d6a-4b5376fdb8d8">\n\n            \n\n    \n\n    <ion-item color="Beige">\n\n      <ion-label><b>เมนู : {{food?.FOOD_NAME}}</b></ion-label>\n\n    </ion-item>\n\n    <ion-item color="Beige">\n\n      <ion-label><b>ราคา : {{food?.FOOD_PRICE}}</b></ion-label>\n\n    </ion-item>\n\n\n\n    \n\n    <ion-item >\n\n        <ion-label>จำนวน : </ion-label>\n\n      <ion-input [(ngModel)]="cart.CART_AMOUT"></ion-input>\n\n      </ion-item>\n\n      <button ion-button block (click)=" addCartItem(cart)">สั่งเมนูนี้</button>\n\n\n\n\n\n\n\n    \n\n  </ion-col>\n\n     \n\n  <ion-col>\n\n    \n\n  </ion-col>\n\n\n\n</ion-row>\n\n</ion-grid>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"G:\ChunWarayut\LungNuad\src\pages\food-detail\food-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0__providers_service_service__["a" /* ServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_toast_service_toast_service__["a" /* ToastServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */]])
    ], FoodDetailPage);
    return FoodDetailPage;
}());

//# sourceMappingURL=food-detail.js.map

/***/ })

});
//# sourceMappingURL=20.js.map