import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { ServiceProvider } from '../providers/service/service';
import { ToastServiceProvider } from '../providers/toast-service/toast-service';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { Camera } from '@ionic-native/camera';

import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCqLA0Yg7VnVhwRjVxzrF5CcKUQx-5t6ro",
  authDomain: "lungnuad-a547e.firebaseapp.com",
  databaseURL: "https://lungnuad-a547e.firebaseio.com",
  projectId: "lungnuad-a547e",
  storageBucket: "lungnuad-a547e.appspot.com",
  messagingSenderId: "926337943393"
};
firebase.initializeApp(config);


@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ServiceProvider,
    ToastServiceProvider,
    Camera
  ]
})
export class AppModule {}
