import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import firebase from 'firebase';
/**
 * Generated class for the SigninBuyerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signin-buyer',
  templateUrl: 'signin-buyer.html',
})
export class SigninBuyerPage {

  email:any;
  password:any;
  name:any;
  location:any;
  phone:any;

  constructor(public loadingCtrl: LoadingController,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SigninBuyerPage');
  }

  signup(){
    const account =  {
      name: this.name || '',
      location: this.location || '',
      phone: this.phone || '',
      email: this.email,
      password: this.password 
    }
    var loader = this.loadingCtrl.create({
      content: "Please wait..."
    });
    loader.present();
    firebase.auth().createUserWithEmailAndPassword(account['email'], account['password'])
    .then(
      newUser =>{

        firebase.auth().signInWithEmailAndPassword(account['email'], account['password'])
          .then(
            authUser =>{
              firebase.database().ref('users').child(authUser.uid).set(account);
              loader.dismiss();
        }
      )
    }
    )
    .catch(function(error) {
      // Handle Errors here.
      error.code;
      error.message;
      // ...
      
    });
    this.navCtrl.popToRoot();
  }

}
