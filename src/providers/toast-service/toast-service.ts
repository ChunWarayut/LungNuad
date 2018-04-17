import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';

/*
  Generated class for the ToastServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ToastServiceProvider {

  constructor(    
    private toastCtrl: ToastController
  ) {
    console.log('Hello ToastServiceProvider Provider');
  }

  show(message: string, duration: number = 5000){
    return this.toastCtrl
    .create({
      message,
      duration,
    })
    .present();
  }

}
