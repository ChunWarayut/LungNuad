import { ToastServiceProvider } from './../../providers/toast-service/toast-service';
import { ServiceProvider } from './../../providers/service/service';
import { Cart, Food, Detail } from './../../module/item/item.module';
import { Observable } from 'rxjs/Observable';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

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

  CartList$:Observable<Cart[]>;

  food:Food

  detail:Detail = {

    DETAIL_ID : undefined,
    FOOD_NAME : undefined,
    BUYER_NAME : undefined,
    DETAIL_AMOUT : 1,
    DETAIL_PRICE : undefined,
    DETAIL_DATE : undefined,
    DETAIL_ADDRESS : undefined,
    DETAIL_STATUS : undefined

  }


  cart:Cart = {

    CART_ID : undefined,
    CART_NAME : undefined,
    CART_AMOUT : 1,
    CART_PRICE : undefined,

  }


  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private carting: ServiceProvider, 
    
    private detailing: ServiceProvider, 
    private toast: ToastServiceProvider, 
    public alertCtrl: AlertController
  ) 
    {

    this.CartList$ = this.carting
    .getCartList()
    .snapshotChanges()
    .map(
      Change => {
        return Change.map(c=> ({
          key : c.payload.key,
          ...c.payload.val(),
        }));
      });


      

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FoodOrderPage');
  }
  
  GoBack(){
    this.navCtrl.setRoot('FoodListPage');
  }

  addDetailItem(detail:Detail) {
    let confirm = this.alertCtrl.create({
      title: "สั่งอาหาร",
      message: 'คุณต้องการสั่งใช่หรือไม่',
      buttons: [
        {
          text: 'ไม่ใช่',
          handler: () => {
            console.log('Disagree clicked');
            this.navCtrl.setRoot('CartPage')
          }
        },
        {
          text: 'ใช่',
          handler: () => {
            console.log('Agree clicked');
      this.detail.DETAIL_ID = 'D_' +  Math.floor(Date.now() / 100);

      this.detail.FOOD_NAME=" ";
      this.detail.BUYER_NAME ='0';
      this.detail.DETAIL_AMOUT= 0;
    
      this.detail.DETAIL_PRICE =0;
      this.detail.DETAIL_DATE ='0';
      this.detail. DETAIL_ADDRESS ='0';
      this.detail.DETAIL_STATUS ='0';
  
      this.detailing.addDetailItem(detail).then(ref =>{
        this.toast.show(`สั่งอาหารสำเร็จ`)
        this.navCtrl.setRoot('FoodListPage',  {key:ref.key});
      });


      this.carting.removeCartItem();
          }
        }
      ]
    });
    confirm.present();
  }
}
