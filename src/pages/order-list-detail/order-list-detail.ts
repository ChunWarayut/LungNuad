import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { Detail } from './../../module/item/item.module';
import { Observable } from 'rxjs/Observable';
import { ServiceProvider } from '../../providers/service/service';
/**
 * Generated class for the OrderListDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-order-list-detail',
  templateUrl: 'order-list-detail.html',
})
export class OrderListDetailPage {

  DetailList$:Observable<Detail[]>;


  detail:Detail

  constructor(public navCtrl: NavController, public navParams: NavParams,  private detailing: ServiceProvider, public alertCtrl: AlertController) {


    this.DetailList$ = this.detailing
    .getDetailList()
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
  /*
  GoBack(){
    this.navCtrl.setRoot('FoodStatusPage');
  }

*/
  GoBack(){
  let confirm = this.alertCtrl.create({
    title: this.detail.FOOD_NAME,
    message: 'คุณต้องการสั่ง  '+this.detail.FOOD_NAME+' ใช่หรือไม่',
    buttons: [
      {
        text: 'ไม่ใช่',
        handler: () => {
          console.log('Disagree clicked');
          this.navCtrl.setRoot('FoodStatusPage');
        }
      },
      {
        text: 'ใช่',
        handler: () => {
          console.log('Agree clicked');    this.navCtrl.setRoot('FoodStatusPage');

    
        }
      }
    ]
  });
  confirm.present();
}


}
