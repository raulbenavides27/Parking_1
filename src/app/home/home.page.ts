import { Component } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage  {
 
  lati: number | undefined;
  long: number | undefined;

  constructor() { }

 async getGeolocation(){
  const getGeolocation = await Geolocation.getCurrentPosition()
  this.lati=getGeolocation.coords.latitude;
  this.long=getGeolocation.coords.longitude; 
  }

}