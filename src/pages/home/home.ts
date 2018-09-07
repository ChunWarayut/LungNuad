import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController, MenuController } from 'ionic-angular';
import firebase from 'firebase';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  email:any;
  password:any;

  constructor(
    public toastCtrl: ToastController, 
    private menu: MenuController,
    public loadingCtrl: LoadingController,
    public navCtrl: NavController, 
    public navParams: NavParams
    ) {
      this.menu.swipeEnable(false);

  }

  loginf(){
    let toast = this.toastCtrl.create({
      message: 'อีเมล์หรือรหัสผ่านไม่ถูกต้อง กรุณากรอกใหม่อีกครั้ง',
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }

  login(){
    var loader = this.loadingCtrl.create({
      content: "Please wait..."
    });
    loader.present();
    firebase.auth().signInWithEmailAndPassword(this.email, this.password)
    .then(authData =>{
      this.navCtrl.setRoot('FoodListPage')
      loader.dismiss();
    }).catch( error =>{
      let toast = this.toastCtrl.create({
        message: 'อีเมล์หรือรหัสผ่านไม่ถูกต้อง กรุณากรอกใหม่อีกครั้ง',
        duration: 3000,
        position: 'top'
      });
      toast.present();
      this.password = "";
      loader.dismiss();
    }
    )
  }
 loginAdmin(){
  this.navCtrl.push('LoginAdminPage');
 }
 
  signup(){
  this.navCtrl.push('SigninBuyerPage');
  }

}
