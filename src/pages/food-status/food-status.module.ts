import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FoodStatusPage } from './food-status';

@NgModule({
  declarations: [
    FoodStatusPage,
  ],
  imports: [
    IonicPageModule.forChild(FoodStatusPage),
  ],
})
export class FoodStatusPageModule {}
