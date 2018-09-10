


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
              var d = new Date();
              var curr_date = d.getDate();
              var curr_month = d.getMonth() + 1; //Months are zero based
              var curr_year = d.getFullYear();
              var curr_hourse = d.getHours();
              var curr_minutes = d.getMinutes();
              var curr_secounds = d.getSeconds();

            this.CartList$.subscribe(_data => {
              this.cartData = _data;
              console.log(
                _data
              );

              var user = firebase.auth().currentUser;
                        
              firebase.database().ref('/users/' + user.uid).once('value').then(data =>{
                this.detail.DETAIL_ID = 'D_' + Math.floor(Date.now());
                this.detail.DETAIL_ORDER = this.cartData;
                this.detail.DETAIL_TOTAL = this.arrData;
                this.detail.BUYER_NAME = data.val().name;
                this.detail.DETAIL_ADDRESS = data.val().location;
                this.detail.DETAIL_DATE = curr_date + "-" + curr_month + "-" +  curr_year + ", " + curr_hourse + ":" + curr_minutes + ":" + curr_secounds ;
                this.detail.DETAIL_STATUS = 'กำลังดำเนินการ';
  
                
              setTimeout(() => {
                firebase.database().ref("detail-list/" +user.uid).push(detail)                
              }, 2000);
            })
          })


            this.carting.removeCartItem();
                    
            var cartRef0000 = firebase.database().ref("total/");
            cartRef0000.remove();
            
            this.navCtrl.setRoot('FoodStatusPage');
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