import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrderLinePage } from './order-line';

@NgModule({
  declarations: [
    OrderLinePage,
  ],
  imports: [
    IonicPageModule.forChild(OrderLinePage),
  ],
})
export class OrderLinePageModule {}
