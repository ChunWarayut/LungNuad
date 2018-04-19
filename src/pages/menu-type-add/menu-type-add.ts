import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Type } from '../../module/item/item.module';
import { ServiceProvider } from '../../providers/service/service';
import { ToastServiceProvider } from '../../providers/toast-service/toast-service';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, private typeing:ServiceProvider, private toast:ToastServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuTypeAddPage');
  }

  addTypeItem(type:Type){

    this.type.FOOD_TYPE_ID = "T_" + Math.floor(Date.now() / 100);

    this.typeing.addTypeItem(type).then(ref =>{

      this.toast.show(`${type.FOOD_TYPE_NAME}  เพิ่มสำเร็จ`)

      this.navCtrl.setRoot('HomeAdminPage', {key:ref.key});
    });
  }
  
}
