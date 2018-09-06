import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import { UsersServiceProvider } from '../../providers/users-service/users-service';

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

  constructor(public toastCtrl: ToastController, 
    public usersService : UsersServiceProvider,
    public loadingCtrl: LoadingController,
    public navCtrl: NavController, public navParams: NavParams) {
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
    this.usersService.loginUserService(this.email, this.password).then(authData =>{
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
