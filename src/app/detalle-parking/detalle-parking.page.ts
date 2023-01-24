import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router' ;

@Component({
  selector: 'app-detalle-parking',
  templateUrl: './detalle-parking.page.html',
  styleUrls: ['./detalle-parking.page.scss'],
})
export class DetalleParkingPage implements OnInit {


  constructor(private router: Router) { }
  
  
  segmentChanged($event:any){
    console.log($event.detail.value);
    let direction=$event.detail.value;
    this.router.navigate(['menu/detalle-parking/'+direction]);
  }
  /**
   * Antes de que se muestre la visual
   * se redirecciona a la url especifica
   */
  ionViewWillEnter(){
    this.router.navigate(['menu/detalle-parking/estacionamiento']);
  }

  ngOnInit() {
  }

}
