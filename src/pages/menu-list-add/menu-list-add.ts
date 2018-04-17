import { ToastServiceProvider } from './../../providers/toast-service/toast-service';
import { ServiceProvider } from './../../providers/service/service';
import { Food } from './../../module/item/item.module';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Item } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import firebase from 'firebase';

/**
 * Generated class for the MenuListAddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu-list-add',
  templateUrl: 'menu-list-add.html',
})
export class MenuListAddPage {


  food: Food = {
    
    FOOD_ID:undefined,
    FOOD_NAME:undefined,
    FOOD_PRICE:undefined,
    FOOD_IMG:undefined,
    FOOD_TYPE_NAME:undefined

  };
  

  captureDataUrl: string;
  alertCtrl: AlertController;


  constructor(public navCtrl: NavController, public navParams: NavParams, private fooding:ServiceProvider, private toast:ToastServiceProvider, alertCtrl: AlertController, private camera: Camera) {

    this.alertCtrl = alertCtrl;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuListAddPage');
  }

  addFoodItem(food:Food){

    this.food.FOOD_ID = Math.floor(Date.now() / 100);

    food.FOOD_IMG = this.food.FOOD_ID;

    this.fooding.addFoodItem(food).then(ref =>{

      this.toast.show(`${food.FOOD_NAME}  เพิ่มสำเร็จ`)

      this.navCtrl.setRoot('MenuListPage', {key:ref.key});
    });

    this.upload();

  }

  selectPhoto(): void {
    const cameraOptions: CameraOptions = {
      quality: 10,
      destinationType: this.camera.DestinationType.DATA_URL,
      // In this app, dynamically set the picture source, Camera or photo gallery
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    };
    this.camera.getPicture(cameraOptions).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      this.captureDataUrl = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      // Handle error
    });
  }
  upload() {
    let storageRef = firebase.storage().ref();

    const filename = Math.floor(Date.now() / 100);

    // Create a reference to 'images/todays-date.jpg'
    const imageRef = storageRef.child(`images/${filename}.jpg`);

    imageRef.putString(this.captureDataUrl, firebase.storage.StringFormat.DATA_URL).then((snapshot)=> {
      this.showSuccesfulUploadAlert();
    });

  }

  showSuccesfulUploadAlert() {
    let alert = this.alertCtrl.create({
      title: 'อัพโหลดสำเร็จ',
      subTitle: 'Picture is uploaded to Firebase',
      buttons: ['OK']
    });
    alert.present();
    // clear the previous photo data in the variable
    this.captureDataUrl = "";
  }

}
