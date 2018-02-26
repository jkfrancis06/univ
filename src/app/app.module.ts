import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import {GoogleMaps} from "@ionic-native/google-maps";
import { IonicImageLoader } from 'ionic-image-loader';



import { TabsPage } from '../pages/tabs/tabs';
import {UniversitePage} from "../pages/universite/universite";
import {DetailsPage} from "../pages/details/details";
import {MapPage} from "../pages/map/map";
import {HelpPage} from "../pages/help/help";
import {MatieresPage} from "../pages/matieres/matieres";


import {SchoolService} from "../services/schoolservice.service";

import {HttpClientModule} from "@angular/common/http";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HttpModule } from '@angular/http';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';



const firebaseConfig = {
  apiKey: "AIzaSyDAnMK5gNelK5l-BWQKboJO0RCgUdT16Yw",
  authDomain: "ecoles-1758c.firebaseapp.com",
  databaseURL: "https://ecoles-1758c.firebaseio.com",
  storageBucket: "ecoles-1758c.appspot.com",
  messagingSenderId: "504950213804"
};



@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    UniversitePage,
    DetailsPage,
    MapPage,
    HelpPage,
    MatieresPage
  ],
  imports: [
    HttpClientModule,
    HttpModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig),
    BrowserModule,
    IonicImageLoader.forRoot(),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    UniversitePage,
    DetailsPage,
    MapPage,
    HelpPage,
    MatieresPage
  ],
  providers: [
    SchoolService,
    GoogleMaps,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
