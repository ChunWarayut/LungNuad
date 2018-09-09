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
  }/* 
  ionViewWillLoad(){
    firebase.auth().signOut()
  } */
  ionViewDidLoad(){
    firebase.auth().signOut().then(function() {
      // Sign-out successful.
      
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

    }).catch(function(error) {
      // An error happened.
      
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
    });
    
  }
 loginAdmin(){
  this.navCtrl.push('LoginAdminPage');
 }
 
  signup(){
  this.navCtrl.push('SigninBuyerPage');
  }
}