import { AngularFireDatabase } from 'angularfire2/database';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Detail } from './../../module/item/item.module';
import { Observable } from 'rxjs/Observable';
import firebase from 'firebase';
/**
 * Generated class for the FoodStatusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-food-status',
  templateUrl: 'food-status.html',
})
export class FoodStatusPage {

  DetailList$:Observable<Detail[]>;


  detail:Detail

  usid = firebase.auth().currentUser.uid;
  constructor(public navCtrl: NavController, public navParams: NavParams, db: AngularFireDatabase) {


    this.DetailList$ = db.list('detail-list/'+this.usid)
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
  }

}
 