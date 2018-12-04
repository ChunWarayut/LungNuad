import { ServiceProvider } from './../../providers/service/service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Food, Type } from '../../module/item/item.module';
import { ToastServiceProvider } from '../../providers/toast-service/toast-service';
import { Camera, CameraOptions } from '@ionic-native/camera';
import firebase from 'firebase';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the MenuListEditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu-list-edit',
  templateUrl: 'menu-list-edit.html',
})
export class MenuListEditPage {

  food:Food;


  captureDataUrl: string;
  alertCtrl: AlertController;


  type: Type = {

    FOOD_TYPE_ID  : undefined,
    FOOD_TYPE_NAME  : undefined

  };
    
  TypeList$:Observable<Type[]>;

  
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private fooding: ServiceProvider,
    private toast:ToastServiceProvider, alertCtrl: AlertController, private camera: Camera, private typeing: ServiceProvider) {
      
      this.alertCtrl = alertCtrl;


    this.TypeList$ = this.typeing
    .getTypeList()
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
    console.log('ionViewDidLoad MenuListEditPage');
  }


  ionViewWillLoad() {
    this.food = this.navParams.get('food');
  }
/*

  save(food){

    food.FOOD_TYPE_NAME = this.type.FOOD_TYPE_NAME;

    this.fooding.editFoodItem(food).then(() =>{
      this.toast.show(`${food.FOOD_NAME} save!`)
      this.navCtrl.setRoot('HomeAdminPage');});
  }
  */


 /*
  removeItem(food){
    this.fooding.removeFoodItem(food).then(()=>{
      this.toast.show(`${food.FOOD_NAME} deleted!`);
      this.navCtrl.setRoot('HomeAdminPage');
    });
  }
*/

save(food) {
  if ( food.FOOD_PRICE >= 0 ) {

    food.FOOD_TYPE_NAME = food.FOOD_TYPE_NAME;
      
    this.fooding.editFoodItem(food).then(() =>{
      this.toast.show(`${food.FOOD_NAME} save!`)
      this.navCtrl.setRoot('MenuListPage');
    });
  }else {
    this.toast.show(`กรุณาใส่ให้ถูกต้อง`)
    this.navCtrl.setRoot('MenuListPage');

  }
    
}

removeItem(food){
  let confirm = this.alertCtrl.create({
    title: this.food.FOOD_NAME,
    message: 'คุณต้องการลบ  '+this.food.FOOD_NAME+' ใช่หรือไม่',
    buttons: [
      {
        text: 'ไม่ใช่',
        handler: () => {
          console.log('Disagree clicked');
          this.navCtrl.setRoot('HomeAdminPage')
        }
      },
      {
        text: 'ใช่',
        handler: () => {
          console.log('Agree clicked');
          this.fooding.removeFoodItem(food).then(()=>{
            this.toast.show(`${food.FOOD_NAME} deleted!`);
            this.navCtrl.setRoot('HomeAdminPage');
          });
        }
      }
    ]
  });
  confirm.present();
}


saveDataImg(food){
  food.FOOD_IMG = 'F_' + Math.floor(Date.now() / 100);
  
  food.FOOD_TYPE_NAME = food.FOOD_TYPE_NAME;
      
  this.fooding.editFoodItem(food).then(() =>{
    this.toast.show(`${food.FOOD_NAME} save!`)
    this.navCtrl.setRoot('MenuListPage');});
 /*  food.FOOD_TYPE_NAME = food.FOOD_TYPE_NAME;

  this.fooding.editFoodItem(food).then(() =>{



    this.toast.show(`${food.FOOD_NAME} save!`)
    this.navCtrl.setRoot('HomeAdminPage');}); */
    this.upload();
}

/*
 saveDataImg(food){


  food.FOOD_IMG = 'F_' + Math.floor(Date.now() / 100);
  food.FOOD_TYPE_NAME = this.type.FOOD_TYPE_NAME;

  this.fooding.editFoodItem(food).then(() =>{



    this.toast.show(`${food.FOOD_NAME} save!`)
    this.navCtrl.setRoot('HomeAdminPage');});
    this.upload();


  }
*/
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

    const filename = this.food.FOOD_IMG;

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
