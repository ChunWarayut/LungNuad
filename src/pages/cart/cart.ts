


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



  ionViewDidLoad() {
   
    const cartR = firebase.database().ref("total/");
    cartR.remove();


    console.log('ionViewDidLoad FoodOrderPage');    

    let total = 0;

    const cartRef11111 = firebase.database()
    .ref("cart-list/");
    cartRef11111.orderByChild("CART_PRICE")
    .on("child_added",async function myCart (data) {
      let add = 0;
      add = Number( data.val().CART_PRICE );
      total += add;
    let cartRe = firebase.database()
    .ref("total/");

    let totjk = {
      TOTAL_TOTAL:total
    }

   await cartRe.update(totjk);
    });

    
  }
  
  async addDetailItem(detail: Detail) {
    let confirm = await this.alertCtrl.create({
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
          handler: async () => {
            console.log('Agree clicked');
              let d = new Date();
              let curr_date = d.getDate();
              let curr_month = d.getMonth() + 1; //Months are zero based
              let curr_year = d.getFullYear();
              let curr_hourse = d.getHours();
              let curr_minutes = d.getMinutes();
              let curr_secounds = d.getSeconds();


             await this.CartList$
              .subscribe(async _data => {
              this.cartData = _data;
              console.log(
                _data
              );

              let user = firebase.auth().currentUser;
                        
             await firebase.database().ref('/users/' + user.uid).once('value').then(async data =>{
               let list = {
                 DETAIL_ID:'D_' + Math.floor(Date.now()),
                 DETAIL_ORDER:this.cartData,
                 DETAIL_TOTAL:this.arrData,
                 BUYER_NAME:data.val().name,
                 DETAIL_ADDRESS:data.val().location,
                 DETAIL_DATE:curr_date + "-" + curr_month + "-" +  curr_year + ", " + curr_hourse + ":" + curr_minutes + ":" + curr_secounds,
                 DETAIL_STATUS:'กำลังดำเนินการ'
               }
               await firebase.database().ref("detail-list/" + user.uid).push(list)
               
               var ref = firebase.database().ref('/detail-list/' + user.uid);
                ref.orderByKey().limitToLast(1).on("child_added", function(snapshot) {
                  console.log(snapshot.key);

                  firebase.database().ref('/detail-list/' + user.uid + '/'+snapshot.key).remove();

                });
                this.navCtrl.setRoot('FoodStatusPage');   

               /* 
                this.detail.DETAIL_ID = 'D_' + Math.floor(Date.now());
                this.detail.DETAIL_ORDER = await this.cartData;
                this.detail.DETAIL_TOTAL = await this.arrData;
                this.detail.BUYER_NAME = data.val().name;
                this.detail.DETAIL_ADDRESS = data.val().location;
                this.detail.DETAIL_DATE = curr_date + "-" + curr_month + "-" +  curr_year + ", " + curr_hourse + ":" + curr_minutes + ":" + curr_secounds ;
                this.detail.DETAIL_STATUS = 'กำลังดำเนินการ';
                */
  
                /* 
              */
            })/* 
            let deleteref = firebase.database().ref("detail-list/" + user.uid).orderByKey().limitToLast(1) */
                this.carting.removeCartItem();

                    
                let cartRef0000 = firebase.database().ref("total/");
                cartRef0000.remove();
          
          })

          }
        }
      ]
    });
    confirm.present();
  }
}