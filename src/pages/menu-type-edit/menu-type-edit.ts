import { Type } from './../../module/item/item.module';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';
import { ToastServiceProvider } from '../../providers/toast-service/toast-service';

/**
 * Generated class for the MenuTypeEditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu-type-edit',
  templateUrl: 'menu-type-edit.html',
})
export class MenuTypeEditPage {

  type:Type;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private typeing: ServiceProvider,
    private toast:ToastServiceProvider, public alertCtrl: AlertController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuTypeEditPage');
  }

  ionViewWillLoad() {
    this.type = this.navParams.get('type');
  }

  /*
  save(type){
    this.typeing.editTypeItem(type).then(() =>{
      this.toast.show(`${type.FOOD_TYPE_NAME} save!`)
      this.navCtrl.setRoot('HomeAdminPage');});
  }
*/

save(type) {
    let confirm = this.alertCtrl.create({
      title: this.type.FOOD_TYPE_NAME,
      message: 'คุณต้องการแก้ไขเป็น  '+this.type.FOOD_TYPE_NAME+' ใช่หรือไม่',
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
            this.typeing.editTypeItem(type).then(() =>{
              this.toast.show(`${type.FOOD_TYPE_NAME} save!`)
              this.navCtrl.setRoot('HomeAdminPage');});        
          }
        }
      ]
    });
    confirm.present();
  }

  removeItem(type) {
  let confirm = this.alertCtrl.create({
    title: this.type.FOOD_TYPE_NAME,
    message: 'คุณต้องการลบ  '+this.type.FOOD_TYPE_NAME+' ใช่หรือไม่',
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
          this.typeing.removeTyperItem(type).then(()=>{
            this.toast.show(`${type.FOOD_TYPE_NAME} deleted!`);
            this.navCtrl.setRoot('HomeAdminPage');
          });
           
        }
      }
    ]
  });
  confirm.present();
}

  /*
  removeItem(type){
    this.typeing.removeTyperItem(type).then(()=>{
      this.toast.show(`${type.FOOD_TYPE_NAME} deleted!`);
      this.navCtrl.setRoot('HomeAdminPage');
    });
  }
*/


}
