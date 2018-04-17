import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MenuListPage } from './menu-list';

@NgModule({
  declarations: [
    MenuListPage,
  ],
  imports: [
    IonicPageModule.forChild(MenuListPage),
  ],
})
export class MenuListPageModule {}
