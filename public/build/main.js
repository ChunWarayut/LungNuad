webpackJsonp([21],{

/***/ 144:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 144;

/***/ }),

/***/ 186:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/cart/cart.module": [
		433,
		2
	],
	"../pages/food-detail/food-detail.module": [
		434,
		20
	],
	"../pages/food-list/food-list.module": [
		435,
		19
	],
	"../pages/food-order/food-order.module": [
		453,
		18
	],
	"../pages/food-status/food-status.module": [
		436,
		17
	],
	"../pages/home-admin/home-admin.module": [
		437,
		16
	],
	"../pages/home/home.module": [
		438,
		15
	],
	"../pages/login-admin/login-admin.module": [
		439,
		14
	],
	"../pages/login-buyer/login-buyer.module": [
		440,
		13
	],
	"../pages/logout-buyer/logout-buyer.module": [
		441,
		12
	],
	"../pages/menu-list-add/menu-list-add.module": [
		442,
		1
	],
	"../pages/menu-list-edit/menu-list-edit.module": [
		443,
		0
	],
	"../pages/menu-list/menu-list.module": [
		444,
		11
	],
	"../pages/menu-type-add/menu-type-add.module": [
		445,
		10
	],
	"../pages/menu-type-edit/menu-type-edit.module": [
		446,
		9
	],
	"../pages/menu-type/menu-type.module": [
		447,
		8
	],
	"../pages/order-list-detail/order-list-detail.module": [
		448,
		7
	],
	"../pages/order-list/order-list.module": [
		449,
		6
	],
	"../pages/setting-edit/setting-edit.module": [
		450,
		5
	],
	"../pages/setting/setting.module": [
		451,
		4
	],
	"../pages/signin-buyer/signin-buyer.module": [
		452,
		3
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 186;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(133);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the ServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ServiceProvider = /** @class */ (function () {
    function ServiceProvider(db) {
        this.db = db;
        this.foodListRef = this.db.list('food-list');
        this.typeListRef = this.db.list('type-list');
        this.detailListRef = this.db.list('detail-list');
        this.buyerlListRef = this.db.list('buyer-list');
        this.cartListRef = this.db.list("cart-list");
    }
    ServiceProvider.prototype.getFoodList = function () {
        return this.foodListRef;
    };
    ServiceProvider.prototype.getTypeList = function () {
        return this.typeListRef;
    };
    ServiceProvider.prototype.getDetailList = function () {
        return this.detailListRef;
    };
    ServiceProvider.prototype.getBuyerList = function () {
        return this.buyerlListRef;
    };
    ServiceProvider.prototype.getCartList = function () {
        return this.cartListRef;
    };
    ServiceProvider.prototype.addFoodItem = function (food) {
        return this.foodListRef.push(food);
    };
    ServiceProvider.prototype.addTypeItem = function (type) {
        return this.typeListRef.push(type);
    };
    ServiceProvider.prototype.addDetailItem = function (detail) {
        console.log('22');
        return this.detailListRef.push(detail);
    };
    ServiceProvider.prototype.addBuyerItem = function (buyer) {
        return this.buyerlListRef.push(buyer);
    };
    ServiceProvider.prototype.addCartItem = function (cart) {
        return this.cartListRef.push(cart);
    };
    ServiceProvider.prototype.editFoodItem = function (food) {
        return this.foodListRef.update(food.key, food);
    };
    ServiceProvider.prototype.editTypeItem = function (type) {
        return this.typeListRef.update(type.key, type);
    };
    ServiceProvider.prototype.editDetailItem = function (detail) {
        return this.detailListRef.update(detail.key, detail);
    };
    ServiceProvider.prototype.editBuyerItem = function (buyer) {
        return this.buyerlListRef.update(buyer.key, buyer);
    };
    ServiceProvider.prototype.editCartItem = function (cart) {
        return this.cartListRef.update(cart.key, cart);
    };
    ServiceProvider.prototype.removeFoodItem = function (food) {
        return this.foodListRef.remove(food.key);
    };
    ServiceProvider.prototype.removeTyperItem = function (type) {
        return this.typeListRef.remove(type.key);
    };
    ServiceProvider.prototype.removeDetailItem = function (detail) {
        return this.detailListRef.remove(detail.key);
    };
    ServiceProvider.prototype.removeBuyertem = function (buyer) {
        return this.buyerlListRef.remove(buyer.key);
    };
    ServiceProvider.prototype.removeCartItem = function () {
        return this.cartListRef.remove();
    };
    ServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], ServiceProvider);
    return ServiceProvider;
}());

//# sourceMappingURL=service.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastServiceProvider; });
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


/*
  Generated class for the ToastServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ToastServiceProvider = /** @class */ (function () {
    function ToastServiceProvider(toastCtrl) {
        this.toastCtrl = toastCtrl;
        console.log('Hello ToastServiceProvider Provider');
    }
    ToastServiceProvider.prototype.show = function (message, duration) {
        if (duration === void 0) { duration = 5000; }
        return this.toastCtrl
            .create({
            message: message,
            duration: duration,
        })
            .present();
    };
    ToastServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], ToastServiceProvider);
    return ToastServiceProvider;
}());

//# sourceMappingURL=toast-service.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(298);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(432);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_service_service__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_toast_service_toast_service__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_database__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_camera__ = __webpack_require__(277);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var config = {
    apiKey: "AIzaSyCqLA0Yg7VnVhwRjVxzrF5CcKUQx-5t6ro",
    authDomain: "lungnuad-a547e.firebaseapp.com",
    databaseURL: "https://lungnuad-a547e.firebaseio.com",
    projectId: "lungnuad-a547e",
    storageBucket: "lungnuad-a547e.appspot.com",
    messagingSenderId: "926337943393"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/cart/cart.module#CartPageModule', name: 'CartPage', segment: 'cart', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/food-detail/food-detail.module#FoodDetailPageModule', name: 'FoodDetailPage', segment: 'food-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/food-list/food-list.module#FoodListPageModule', name: 'FoodListPage', segment: 'food-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/food-status/food-status.module#FoodStatusPageModule', name: 'FoodStatusPage', segment: 'food-status', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home-admin/home-admin.module#HomeAdminPageModule', name: 'HomeAdminPage', segment: 'home-admin', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login-admin/login-admin.module#LoginAdminPageModule', name: 'LoginAdminPage', segment: 'login-admin', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login-buyer/login-buyer.module#LoginBuyerPageModule', name: 'LoginBuyerPage', segment: 'login-buyer', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/logout-buyer/logout-buyer.module#LogoutBuyerPageModule', name: 'LogoutBuyerPage', segment: 'logout-buyer', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/menu-list-add/menu-list-add.module#MenuListAddPageModule', name: 'MenuListAddPage', segment: 'menu-list-add', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/menu-list-edit/menu-list-edit.module#MenuListEditPageModule', name: 'MenuListEditPage', segment: 'menu-list-edit', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/menu-list/menu-list.module#MenuListPageModule', name: 'MenuListPage', segment: 'menu-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/menu-type-add/menu-type-add.module#MenuTypeAddPageModule', name: 'MenuTypeAddPage', segment: 'menu-type-add', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/menu-type-edit/menu-type-edit.module#MenuTypeEditPageModule', name: 'MenuTypeEditPage', segment: 'menu-type-edit', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/menu-type/menu-type.module#MenuTypePageModule', name: 'MenuTypePage', segment: 'menu-type', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/order-list-detail/order-list-detail.module#OrderListDetailPageModule', name: 'OrderListDetailPage', segment: 'order-list-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/order-list/order-list.module#OrderListPageModule', name: 'OrderListPage', segment: 'order-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/setting-edit/setting-edit.module#SettingEditPageModule', name: 'SettingEditPage', segment: 'setting-edit', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/setting/setting.module#SettingPageModule', name: 'SettingPage', segment: 'setting', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signin-buyer/signin-buyer.module#SigninBuyerPageModule', name: 'SigninBuyerPage', segment: 'signin-buyer', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/food-order/food-order.module#FoodOrderPageModule', name: 'FoodOrderPage', segment: 'food-order', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_8_angularfire2__["a" /* AngularFireModule */].initializeApp(config),
                __WEBPACK_IMPORTED_MODULE_9_angularfire2_database__["b" /* AngularFireDatabaseModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_6__providers_service_service__["a" /* ServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_7__providers_toast_service_toast_service__["a" /* ToastServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_camera__["a" /* Camera */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 432:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(271);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = 'HomePage';
        this.pages = [
            { title: 'เลือกอาหาร', component: 'FoodListPage' },
            { title: 'อาหารที่สั่ง', component: 'CartPage' },
            { title: 'สถานะอาหารที่สั่ง', component: 'FoodStatusPage' },
            { title: 'ตั้งค่า', component: 'SettingPage' },
            { title: 'ออกจากระบบ', component: 'HomePage' }
        ];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"G:\ChunWarayut\LungNuad\src\app\app.html"*/'\n\n<ion-menu [content]="content">\n\n        <ion-header>\n\n          \n\n          <ion-toolbar color="boa">\n\n\n\n            <ion-title>Menu</ion-title>\n\n\n\n          </ion-toolbar>\n\n        </ion-header>\n\n      \n\n        <ion-content>\n\n          \n\n      \n\n          <ion-list>\n\n            <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n              {{p.title}}\n\n            </button>\n\n          </ion-list>\n\n\n\n        \n\n        \n\n        </ion-content>\n\n      \n\n      </ion-menu>\n\n      <!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n      <ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n\n'/*ion-inline-end:"G:\ChunWarayut\LungNuad\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[278]);
//# sourceMappingURL=main.js.map