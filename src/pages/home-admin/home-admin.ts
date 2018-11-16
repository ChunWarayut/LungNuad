
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';
import firebase from 'firebase';
import { Detail } from '../../module/item/item.module';
import { Observable } from 'rxjs/Observable';
import { ServiceProvider } from '../../providers/service/service';

/**
 * Generated class for the HomeAdminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home-admin',
  templateUrl: 'home-admin.html',
})
export class HomeAdminPage {

  @ViewChild(Nav) nav: Nav;


  pages: Array<{title: string, component: any}>;

  DetailList$:Observable<Detail[]>;

  detail:Detail
  
  
  email = "5840505134@5840505134.com";
  password = "5840505134"
  constructor(public navCtrl: NavController, public navParams: NavParams, private detailing: ServiceProvider) {

    this.pages = [
      { title: 'ประเภทอาหาร', component: 'MenuTypePage' },
      { title: 'เมนูอาหาร', component: 'MenuListPage' },
      { title: 'รายการสั่งซื้อ', component: 'OrderPage' }
    ];

    

    this.DetailList$ = this.detailing
    .getDetailList2()
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
    console.log('ionViewDidLoad HomeAdminPage');
    firebase.auth().signInWithEmailAndPassword(this.email, this.password);

  }


  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.navCtrl.push(page.component);
  }

}
