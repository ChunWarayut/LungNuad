
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';

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


  
  DetailList001$:Observable<Detail[]>;

  detail:Detail

  arrData
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,  
    public loadingCtrl: LoadingController,
    private detailing: ServiceProvider, 
    public alertCtrl: AlertController) 
  {

    

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

    console.log(this.arrData);
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
  
    loading.present();
  
    setTimeout(() => {
      loading.dismiss();
    }, 1400);
  }
  /*
  GoBack(){
    this.navCtrl.setRoot('FoodStatusPage');
  }

*/

getUpdate0(detail){

    detail.DETAIL_STATUS = 'กำลังจัดเตรียมอาหาร'

  this.detailing.editDetailItem(detail)
}

getUpdate1(detail){

  detail.DETAIL_STATUS = 'อยู่ในระหว่างการจัดส่ง'

  this.detailing.editDetailItem(detail)
}

getUpdate2(detail){
  
  detail.DETAIL_STATUS = 'ส่งสำเร็จ'

  this.detailing.editDetailItem(detail)

}
}