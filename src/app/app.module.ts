import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
//Firebase services + enviroments module segun profe 
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from 'src/environments/environment';
// segun documentcion 
//import { BrowserModule } from '@angular/platform-browser';
//import { NgModule } from '@angular/core';
//import { IonicApp, IonicModule } from 'ionic-angular';
//import { MyApp } from './app.component';
//import { AngularFireModule } from '@angular/fire/compat';
//import { firebaseConfig } from '../environment';
@NgModule({
  declarations: [AppComponent],
  imports: [
  //  AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,AngularFireStorageModule,AngularFireDatabaseModule,
    AngularFirestoreModule,
    BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
