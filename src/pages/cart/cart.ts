


import { AngularFireDatabase } from 'angularfire2/database';
import { ServiceProvider } from './../../providers/service/service';
import { Cart, Detail } from './../../module/item/item.module';
import { Observable } from 'rxjs/Observable';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import firebase from 'firebase';

/**
 * Generated class for the CartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {

  cartData
  CartList$: Observable<Cart[]>;

  

  detail: Detail = {
    DETAIL_ID: undefined,
    BUYER_NAME: undefined,
    DETAIL_ORDER: undefined,
    DETAIL_TOTAL: undefined,
    DETAIL_DATE: undefined,
    DETAIL_ADDRESS: undefined,
    DETAIL_STATUS: undefined
  }
  arrData=[]
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private carting: ServiceProvider,
    private fdb: AngularFireDatabase,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController
  ) {

    this.fdb.list("/total/").valueChanges().subscribe(_data => {
      this.arrData = _data;
    });
    this.CartList$ = this.carting.getCartList().snapshotChanges().map(Change => {
          return Change.map(c => ({
            key: c.payload.key,
            ...c.payload.val(),
          }));
        });
        
  }



   cartRef = firebase.database().ref("total/");
  GoBack() {
    
    this.cartRef.remove();
    this.navCtrl.setRoot('FoodListPage');
    
  }

  addDetailItem(detail: Detail) {
    let confirm = this.alertCtrl.create({
      title: "สั่งอาหาร",
      message: 'คุณต้องการสั่งใช่หรือไม่',
      buttons: [
        {
          text: 'ไม่ใช่',
          handler: () => {
            console.log('Disagree clicked');
            this.navCtrl.setRoot('CartPage');
          }
        },
        {
          text: 'ใช่',
          handler: () => {
            console.log('Agree clicked');

            // Using Date() function
            var d = Date();
            // Converting the number value to string
            var a = d.toString()
            
            this.CartList$.subscribe(_data => {
              this.cartData = _data;
              this.detail.DETAIL_ID = 'D_' + Math.floor(Date.now() / 100);
              this.detail.DETAIL_ORDER = this.cartData;
              this.detail.DETAIL_TOTAL = this.arrData;
              this.detail.BUYER_NAME = 'วรายุทธ เทกระโทก';
              this.detail.DETAIL_ADDRESS = "25/1-2 ซอย 15 ";
              this.detail.DETAIL_DATE = a;
              this.detail.DETAIL_STATUS = 'กำลังดำเนินการ';

    
              setTimeout(() => {
                this.carting.addDetailItem(detail)                
              }, 2000);
              /*
              this.fdb.list('detail-list').push(detail).then(ref => {
                this.navCtrl.setRoot('FoodListPage');
              });*/
            })


            this.carting.removeCartItem();
                    
            var cartRef0000 = firebase.database().ref("total/");
            cartRef0000.remove();
            
            this.navCtrl.setRoot('OrderListPage');
          }
        }
      ]
    });
    confirm.present();
  }


  ionViewDidLoad() {
   
    var cartR = firebase.database().ref("total/");
    cartR.remove();


    console.log('ionViewDidLoad FoodOrderPage');    

    var total = 0;

    var cartRef11111 = firebase.database()
    .ref("cart-list/");
    cartRef11111.orderByChild("CART_PRICE")
    .on("child_added", function myCart (data) {
      var add = 0;
      add = Number( data.val().CART_PRICE );
      total += add;
    var cartRe = firebase.database()
    .ref("total/");

    var totjk = {
      TOTAL_TOTAL:total
    }

    cartRe.update(totjk);
    });

    
  }
  
}