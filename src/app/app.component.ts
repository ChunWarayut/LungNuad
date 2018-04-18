
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
 /*
  @ViewChild(Nav) nav: Nav;
*/
  rootPage:string = 'HomePage';
/*
  pages: Array<{title: string, component: any}>;
*/

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    /*
    this.pages = [
      { title: 'เลือกอาหาร', component: 'FoodListPage' },
      { title: 'อาหารที่สั่ง', component: 'FoodDetailPage' },
      { title: 'เมนูอาหาร', component: 'MenuListPage' },
      { title: 'เพิ่มเมนูอาหาร', component: 'MenuListAddPage' },
      { title: 'ประเภทอาหาร', component: 'MenuTypePage' },
      { title: 'เพิ่มประเภทอาหาร', component: 'MenuTypeAddPage' }
    ];
*/
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  /*
  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
  */
}

