import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MenuTypeEditPage } from './menu-type-edit';

@NgModule({
  declarations: [
    MenuTypeEditPage,
  ],
  imports: [
    IonicPageModule.forChild(MenuTypeEditPage),
  ],
})
export class MenuTypeEditPageModule {}
