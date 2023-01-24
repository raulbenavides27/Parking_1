import { Component, OnInit } from '@angular/core';
import { Proveedor1Service } from '../proveedor1.service';
@Component({
  selector: 'app-ajuste',
  templateUrl: './ajuste.page.html',
  styleUrls: ['./ajuste.page.scss'],
})
export class AjustePage implements OnInit {
  obtenerDatos:any[]=[];
  constructor(public proveedor:Proveedor1Service) {
    this.proveedor.obtenerDatos<any[]>("").subscribe(data =>{
      this.obtenerDatos = data
      console.log(this.obtenerDatos)
    })
  }
  ngOnInit() {
  }

}
