import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';
/**
 * Generated class for the SettingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {

  name
  location
  phone
  email
  UID
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
    var user = firebase.auth().currentUser;
    this.UID = firebase.auth().currentUser.uid;
    
    firebase.database().ref('/users/' + user.uid).once('value').then(data =>{
    this.name = data.val().name
    this.location = data.val().location
    this.phone = data.val().phone
    this.email =  data.val().email 
    }
      
    )

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingPage');
  }

}
