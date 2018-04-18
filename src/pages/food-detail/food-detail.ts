import { ServiceProvider } from './../../providers/service/service';
import { Food, Detail } from './../../module/item/item.module';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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
  
  detail:Detail= {

    DETAIL_ID : undefined,
  FOOD_NAME : undefined,
  
  DETAIL_AMOUT : undefined,
  DETAIL_PRICE : undefined,
  DETAIL_DATE : undefined,
  DETAIL_ADDRESS : undefined,
  DETAIL_STATUS : undefined

  }

  constructor(public navCtrl: NavController, public navParams: NavParams, private detailing: ServiceProvider, private toast: ToastServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FoodDetailPage');
  }

  ionViewWillLoad() {
    this.food = this.navParams.get('food');
  }

  addDetailItem(detail:Detail){

    this.detail.DETAIL_ID = 'D_' +  Math.floor(Date.now() / 100);
    this.detailing.addDetailItem(detail).then(ref =>{
      this.toast.show(`${detail.FOOD_NAME} สั่งอาหารสำเร็จ`)
      this.navCtrl.setRoot('FoodListPage',  {key:ref.key});
    });
  }
}
