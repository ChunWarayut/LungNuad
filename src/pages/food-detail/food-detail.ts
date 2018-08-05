import { ServiceProvider } from './../../providers/service/service';
import { Food, Cart } from './../../module/item/item.module';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ToastServiceProvider } from '../../providers/toast-service/toast-service';

/**
 * Generated class for the FoodDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-food-detail',
  templateUrl: 'food-detail.html',
})
export class FoodDetailPage {
  
  food:Food
  
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
    private toast: ToastServiceProvider, 
    public alertCtrl: AlertController
  ) 
    {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FoodDetailPage');
  }

  ionViewWillLoad() {
    this.food = this.navParams.get('food');
  }
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


 addCartItem(cart:Cart) {
  let confirm = this.alertCtrl.create({
    title: this.food.FOOD_NAME,
    message: 'คุณต้องการสั่ง  '+this.food.FOOD_NAME+' ใช่หรือไม่',
    buttons: [
      {
        text: 'ไม่ใช่',
        handler: () => {
          console.log('Disagree clicked');
          this.navCtrl.setRoot('FoodListPage')
        }
      },
      {
        text: 'ใช่',
        handler: () => {
          console.log('Agree clicked');
    this.cart.CART_ID = 'C_' +  Math.floor(Date.now() / 100);

    this.cart.CART_NAME = this.food.FOOD_NAME;
    this.cart.CART_PRICE = this.food.FOOD_PRICE * this.cart.CART_AMOUT;


    this.carting.addCartItem(cart).then(ref =>{
      this.toast.show(`${cart.CART_NAME} สั่งอาหารสำเร็จ`)
      this.navCtrl.setRoot('CartPage',  {key:ref.key});
    });
    
        }
      }
    ]
  });
  confirm.present();
}

}
