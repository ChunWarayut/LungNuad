
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';

import { Detail } from './../../module/item/item.module';
import { Observable } from 'rxjs/Observable';
import { ServiceProvider } from '../../providers/service/service';


import * as firebase from 'firebase';
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

  }

  
  ionViewWillLoad() {
    this.detail = this.navParams.get('detail');
  }

  ionViewDidLoad() {
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
  
    loading.present();
  
    setTimeout(() => {
      loading.dismiss();
    }, 1400);
  }


getUpdate0(detail){

    detail.status = 'กำลังจัดเตรียมอาหาร'

  this.detailing.editDetailItem(detail)
  firebase.database().ref('users-detail/' + detail.nameID +'/' + detail.detailID).update(detail)
}

getUpdate1(detail){

  detail.status = 'กำลังจัดส่ง'

  this.detailing.editDetailItem(detail)
  firebase.database().ref('users-detail/' + detail.nameID +'/' + detail.detailID).update(detail)
  
}

getUpdate2(detail){
  
  detail.status = 'ส่งสำเร็จ'

  this.detailing.editDetailItem(detail)
  firebase.database().ref('users-detail/' + detail.nameID +'/' + detail.detailID).update(detail)

}
}