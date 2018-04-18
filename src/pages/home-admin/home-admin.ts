
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.pages = [
      { title: 'ประเภทอาหาร', component: 'MenuTypePage' },
      { title: 'เมนูอาหาร', component: 'MenuListPage' },
      { title: 'order ลูกค้า', component: 'OrderListPage' }
    ];


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeAdminPage');
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.navCtrl.push(page.component);
  }

}
