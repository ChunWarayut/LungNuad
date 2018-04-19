import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrderListDetailPage } from './order-list-detail';

@NgModule({
  declarations: [
    OrderListDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(OrderListDetailPage),
  ],
})
export class OrderListDetailPageModule {}
