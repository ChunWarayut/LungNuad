import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FoodDetailPage } from './food-detail';

@NgModule({
  declarations: [
    FoodDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(FoodDetailPage),
  ],
})
export class FoodDetailPageModule {}
