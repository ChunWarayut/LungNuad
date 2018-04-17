import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReportFoodTypePage } from './report-food-type';

@NgModule({
  declarations: [
    ReportFoodTypePage,
  ],
  imports: [
    IonicPageModule.forChild(ReportFoodTypePage),
  ],
})
export class ReportFoodTypePageModule {}
