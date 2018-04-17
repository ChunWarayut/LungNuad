import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginBuyerPage } from './login-buyer';

@NgModule({
  declarations: [
    LoginBuyerPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginBuyerPage),
  ],
})
export class LoginBuyerPageModule {}
