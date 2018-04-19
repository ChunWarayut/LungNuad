import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SettingEditPage } from './setting-edit';

@NgModule({
  declarations: [
    SettingEditPage,
  ],
  imports: [
    IonicPageModule.forChild(SettingEditPage),
  ],
})
export class SettingEditPageModule {}
