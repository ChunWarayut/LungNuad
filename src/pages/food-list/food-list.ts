import { ServiceProvider } from './../../providers/service/service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { Food } from '../../module/item/item.module';
import firebase from 'firebase';
/**
 * Generated class for the FoodListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-food-list',
  templateUrl: 'food-list.html',
})
export class FoodListPage {
  FoodList$:Observable<Food[]>;
  ususususu 
  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    private fooding: ServiceProvider,
  ) {
    this.FoodList$ = this.fooding
    .getFoodList()
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
    console.log('ionViewDidLoad FoodListPage');
    var user = firebase.auth().currentUser;
    
    if (user != null) {
      user.providerData.forEach(function (user) {
        console.log("Sign-in provider: " + user.providerId);
        console.log("  Provider-specific UID: " + user.uid);
        console.log("  Name: " + user.displayName);
        console.log("  Email: " + user.email);
        console.log("  Photo URL: " + user.photoURL);
      });
    } 
  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    this.FoodList$ = this.fooding
    .getFoodList()
    .snapshotChanges()
    .map(
      Change => {
        return Change.map(c=> ({
          key : c.payload.key,
          ...c.payload.val(),
        }));
      });

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);   
     
  }

}