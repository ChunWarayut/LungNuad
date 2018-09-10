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
  apiKey: "AIzaSyBwT3783rn5Iep4iVsaMOfI3maLf8VvrXw",
    authDomain: "projectfinal-5eb87.firebaseapp.com",
    databaseURL: "https://projectfinal-5eb87.firebaseio.com",
    projectId: "projectfinal-5eb87",
    storageBucket: "",
    messagingSenderId: "310405845589"
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
