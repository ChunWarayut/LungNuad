import { ServiceProvider } from './../../providers/service/service';
import { Food } from './../../module/item/item.module';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the MenuListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu-list',
  templateUrl: 'menu-list.html',
})
export class MenuListPage {

  FoodList$:Observable<Food[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private Fooding: ServiceProvider) {

    this.FoodList$ = this.Fooding
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
    console.log('ionViewDidLoad MenuListPage');
  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    this.FoodList$ = this.Fooding
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
    }, 5000);   
     
  }

}
