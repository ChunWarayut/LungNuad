import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
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

  constructor(
    public toastCtrl: ToastController, 

    public loadingCtrl: LoadingController,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SigninBuyerPage');
  }

  signupF(){
    let toast = this.toastCtrl.create({
      message: 'กรุณากรอกข้อมูลให้ครบถ้วน',
      duration: 3000,
      position: 'top'
    });
    toast.present();
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
        newUser.updateProfile({
          displayName:this.name || '',
          photoURL:'https://firebasestorage.googleapis.com/v0/b/lungnuad-a547e.appspot.com/o/Untitled-12.ico?alt=media&token=b7de86c3-bdd4-4a43-871e-e5cc5e0b36af'        
        })

        firebase.auth().signInWithEmailAndPassword(account['email'], account['password'])
          .then(
            authUser =>{
              firebase.database().ref('users').child(authUser.uid).set(account);
              loader.dismiss();
        }
      )
      .catch(error =>{
        let toast = this.toastCtrl.create({
          message: 'กรุณากรอกข้อมูลให้ครบถ้วน',
          duration: 3000,
          position: 'top'
        });
        toast.present();
      })
    }
    )
    .catch(function(error) {
      // Handle Errors here.
      error.code;
      error.message;
      // ...
      
    });
    this.navCtrl.setRoot('HomePage');
  }

}
