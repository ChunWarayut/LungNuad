
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


  
  DetailList001$:Observable<Detail[]>;

  detail:Detail

  arrData
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,  
    private detailing: ServiceProvider, 
    public alertCtrl: AlertController) 
  {

    
    this.DetailList001$ = this.detailing
    .getDetailList()
    .snapshotChanges()
    .map(
      Change => {
        return Change.map(c=> ({
          key : c.payload.key,
          ...c.payload.val().DETAIL_ORDER,
        }));
      });

    

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
    
  }
  /*
  GoBack(){
    this.navCtrl.setRoot('FoodStatusPage');
  }

*/
}