import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomeBuyerPage } from './home-buyer';

@NgModule({
  declarations: [
    HomeBuyerPage,
  ],
  imports: [
    IonicPageModule.forChild(HomeBuyerPage),
  ],
})
export class HomeBuyerPageModule {}
