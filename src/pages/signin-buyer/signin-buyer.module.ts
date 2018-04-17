import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SigninBuyerPage } from './signin-buyer';

@NgModule({
  declarations: [
    SigninBuyerPage,
  ],
  imports: [
    IonicPageModule.forChild(SigninBuyerPage),
  ],
})
export class SigninBuyerPageModule {}
