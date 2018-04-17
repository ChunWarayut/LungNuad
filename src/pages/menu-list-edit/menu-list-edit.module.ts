import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MenuListEditPage } from './menu-list-edit';

@NgModule({
  declarations: [
    MenuListEditPage,
  ],
  imports: [
    IonicPageModule.forChild(MenuListEditPage),
  ],
})
export class MenuListEditPageModule {}
