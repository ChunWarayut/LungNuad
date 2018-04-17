import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MenuListAddPage } from './menu-list-add';

@NgModule({
  declarations: [
    MenuListAddPage,
  ],
  imports: [
    IonicPageModule.forChild(MenuListAddPage),
  ],
})
export class MenuListAddPageModule {}
