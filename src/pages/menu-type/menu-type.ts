import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Type } from '../../module/item/item.module';
import { Observable } from 'rxjs/Observable';
import { ServiceProvider } from '../../providers/service/service';

/**
 * Generated class for the MenuTypePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu-type',
  templateUrl: 'menu-type.html',
})
export class MenuTypePage {
  TypeList$:Observable<Type[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private typeing: ServiceProvider) {

    this.TypeList$ = this.typeing
    .getTypeList()
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

    this.TypeList$ = this.typeing
    .getTypeList()
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