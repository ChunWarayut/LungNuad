import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MenuTypeAddPage } from './menu-type-add';

@NgModule({
  declarations: [
    MenuTypeAddPage,
  ],
  imports: [
    IonicPageModule.forChild(MenuTypeAddPage),
  ],
})
export class MenuTypeAddPageModule {}
