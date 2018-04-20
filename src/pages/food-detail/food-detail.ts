import { ServiceProvider } from './../../providers/service/service';
import { Food, Detail } from './../../module/item/item.module';
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

  constructor(public navCtrl: NavController, public navParams: NavParams, private detailing: ServiceProvider, private toast: ToastServiceProvider, public alertCtrl: AlertController) {
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


 addDetailItem(detail:Detail) {
  let confirm = this.alertCtrl.create({
    title: this.detail.FOOD_NAME,
    message: 'คุณต้องการสั่ง  '+this.detail.FOOD_NAME+' ใช่หรือไม่',
    buttons: [
      {
        text: 'ไม่ใช่',
        handler: () => {
          console.log('Disagree clicked');
          this.navCtrl.setRoot('FoodOrderPage')
        }
      },
      {
        text: 'ใช่',
        handler: () => {
          console.log('Agree clicked');
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
      }
    ]
  });
  confirm.present();
}

}
