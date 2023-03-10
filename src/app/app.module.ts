import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { Proveedor1Service } from './proveedor1.service';
//Firebase services + enviroments module segun profe 
/*import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from 'src/environments/environment';*/
// segun documentcion 
//import { BrowserModule } from '@angular/platform-browser';
//import { NgModule } from '@angular/core';
//import { IonicApp, IonicModule } from 'ionic-angular';
//import { MyApp } from './app.component';
//import { AngularFireModule } from '@angular/fire/compat';
//import { firebaseConfig } from '../environment';
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,HttpClientModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },Proveedor1Service],
  bootstrap: [AppComponent],
})
export class AppModule {}
