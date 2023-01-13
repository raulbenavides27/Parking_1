import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router' ;

@Component({
  selector: 'app-pagos',
  templateUrl: './pagos.page.html',
  styleUrls: ['./pagos.page.scss'],
})
export class PagosPage implements OnInit {

  constructor(private router: Router) { }


  ionViewWillEnter(){
    this.router.navigate(['pagos/tarjeta']);
  }

  ngOnInit() {
  }

}
