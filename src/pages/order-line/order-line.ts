import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Detail } from './../../module/item/item.module';
import { Observable } from 'rxjs/Observable';
import { ServiceProvider } from '../../providers/service/service';
import firebase from 'firebase';

/**
 * Generated class for the OrderLinePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-order-line',
  templateUrl: 'order-line.html',
})
export class OrderLinePage {

  DetailList$:Observable<Detail[]>;


  
  email = "5840505134@5840505134.com";
  password = "5840505134"

  detail:Detail

  constructor(public navCtrl: NavController, public navParams: NavParams,  private detailing: ServiceProvider) {


    this.DetailList$ = this.detailing
    .getDetailList3()
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
    console.log('ionViewDidLoad FoodStatusPage');
    firebase.auth().signInWithEmailAndPassword(this.email, this.password);

  }
}