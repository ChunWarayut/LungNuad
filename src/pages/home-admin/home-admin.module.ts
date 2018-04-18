import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomeAdminPage } from './home-admin';

@NgModule({
  declarations: [
    HomeAdminPage,
  ],
  imports: [
    IonicPageModule.forChild(HomeAdminPage),
  ],
})
export class HomeAdminPageModule {}
