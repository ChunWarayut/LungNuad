import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';

/**
 * Generated class for the OrderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-order',
  templateUrl: 'order.html',
})
export class OrderPage {

  pages: Array<{title: string, component: any}>;

  
  
  email = "5840505134@5840505134.com";
  password = "5840505134"

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  
    
    this.pages = [
      { title: 'กำลังดำเนินการ', component: 'OrderListPage' },
      { title: 'ส่งสำเร็จ', component: 'OrderLinePage' }
    ];

  }

  ionViewDidLoad() {
    firebase.auth().signInWithEmailAndPassword(this.email, this.password);
    console.log('ionViewDidLoad OrderPage');
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.navCtrl.push(page.component);
  }

}
