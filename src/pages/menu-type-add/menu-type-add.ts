import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Type } from '../../module/item/item.module';
import { ServiceProvider } from '../../providers/service/service';
import { ToastServiceProvider } from '../../providers/toast-service/toast-service';
import firebase from 'firebase';

/**
 * Generated class for the MenuTypeAddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu-type-add',
  templateUrl: 'menu-type-add.html',
})
export class MenuTypeAddPage {

  type: Type = {

  
    FOOD_TYPE_ID  : undefined,
    FOOD_TYPE_NAME  : undefined

  };

  TID;
  email = "5840505134@5840505134.com";
  password = "5840505134"
  constructor(public navCtrl: NavController, public navParams: NavParams, private typeing:ServiceProvider, private toast:ToastServiceProvider, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuTypeAddPage');
    firebase.auth().signInWithEmailAndPassword(this.email, this.password);
    firebase.database().ref('type-list').limitToLast(1).once('child_added').then(data => {
      console.log(data.val().FOOD_TYPE_ID);
      this.TID = data.val().FOOD_TYPE_ID;
    })

  }
/*
  addTypeItem(type:Type){

    this.type.FOOD_TYPE_ID = "T_" + Math.floor(Date.now() / 100);

    this.typeing.addTypeItem(type).then(ref =>{

      this.toast.show(`${type.FOOD_TYPE_NAME}  เพิ่มสำเร็จ`)

      this.navCtrl.setRoot('MenuTypePage', {key:ref.key});
    });
  }
  */
 
  showConfirm(type:Type) {
    let confirm = this.alertCtrl.create({
      title: this.type.FOOD_TYPE_NAME,
      message: 'คุณต้องการเพิ่ม  '+this.type.FOOD_TYPE_NAME+' ใช่หรือไม่',
      buttons: [
        {
          text: 'ไม่ใช่',
          handler: () => {
            console.log('Disagree clicked');
            this.navCtrl.setRoot('MenuTypePage')
          }
        },
        {
          text: 'ใช่',
          handler: () => {
            console.log('Agree clicked');
            this.type.FOOD_TYPE_ID = this.TID + 1

            this.typeing.addTypeItem(type).then(ref =>{
        
              this.toast.show(`${type.FOOD_TYPE_NAME}  เพิ่มสำเร็จ`)
        
              this.navCtrl.setRoot('MenuTypePage', {key:ref.key});
            });          }
        }
      ]
    });
    confirm.present();
  }
  
}
