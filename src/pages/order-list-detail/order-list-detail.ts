
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

  if(detail.status == 'กำลังดำเนินการ'){

    detail.status = 'จัดเตรียมอาหาร'
    detail.color = 'secondary'
    detail.statusNum = 1
    detail.statusNumC =1

  this.detailing.editDetailItem(detail)
  firebase.database().ref('users-detail/' + detail.nameID +'/' + detail.detailID).update(detail)
  this.navCtrl.setRoot('HomeAdminPage');
  }else if (detail.status == 'จัดเตรียมอาหาร'){
    
  detail.status = 'กำลังจัดส่ง'
  detail.color = 'primary'
  detail.statusNum = 2
  detail.statusNumC =1


  this.detailing.editDetailItem(detail)
  firebase.database().ref('users-detail/' + detail.nameID +'/' + detail.detailID).update(detail)
  this.navCtrl.setRoot('HomeAdminPage');
  }else if(detail.status == 'กำลังจัดส่ง'){
    
  detail.status = 'ส่งสำเร็จ'
  detail.color = 'light'
  detail.statusNum = 3
  detail.statusNumC =0

  this.detailing.editDetailItem(detail)
  firebase.database().ref('users-detail/' + detail.nameID +'/' + detail.detailID).update(detail)
  this.navCtrl.setRoot('HomeAdminPage');

  }
}

getUpdate1(detail){

  detail.status = 'กำลังจัดส่ง'
  detail.color = 'primary'
  detail.statusNum = 2
  detail.statusNumC =1


  this.detailing.editDetailItem(detail)
  firebase.database().ref('users-detail/' + detail.nameID +'/' + detail.detailID).update(detail)
  this.navCtrl.setRoot('HomeAdminPage');
  
}

getUpdate2(detail){
  
  detail.status = 'ส่งสำเร็จ'
  detail.color = 'light'
  detail.statusNum = 3
  detail.statusNumC =0

  this.detailing.editDetailItem(detail)
  firebase.database().ref('users-detail/' + detail.nameID +'/' + detail.detailID).update(detail)
  this.navCtrl.setRoot('HomeAdminPage');

}
}