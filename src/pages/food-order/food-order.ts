import { Detail } from './../../module/item/item.module';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { ServiceProvider } from '../../providers/service/service';

/**
 * Generated class for the FoodOrderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-food-order',
  templateUrl: 'food-order.html',
})
export class FoodOrderPage {

  DetailList$:Observable<Detail[]>;


  detail:Detail

  constructor(public navCtrl: NavController, public navParams: NavParams,  private detailing: ServiceProvider) {


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
  GoBack(){
    this.navCtrl.setRoot('FoodStatusPage');
  }

}
