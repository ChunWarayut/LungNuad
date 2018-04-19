import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FoodOrderPage } from './food-order';

@NgModule({
  declarations: [
    FoodOrderPage,
  ],
  imports: [
    IonicPageModule.forChild(FoodOrderPage),
  ],
})
export class FoodOrderPageModule {}
