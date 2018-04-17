import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginAdminPage } from './login-admin';

@NgModule({
  declarations: [
    LoginAdminPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginAdminPage),
  ],
})
export class LoginAdminPageModule {}
