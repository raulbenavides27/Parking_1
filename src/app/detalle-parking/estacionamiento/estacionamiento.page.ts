import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estacionamiento',
  templateUrl: './estacionamiento.page.html',
  styleUrls: ['./estacionamiento.page.scss'],
})
export class EstacionamientoPage implements OnInit {
  public parking = 
  [
    {
      id: '1',
      nombre:'DUOC PLAZA NORTE',
      comuna:'huechuraba',
      estado:'activo',
      disponibilidad: '75%',
      direccion: 'Calle Nueva 1660',
    
    },
    {
      id: '2',
      nombre:'MALL HUECHURABA',
      comuna:'ZUSUKI',
      estado:'expreso',
      disponibilidad: '2022',
      direccion: 'Av. americo vespucio 1737',
    },
    {
      id: '3',
      nombre:'SANTA ISABEL INDEPENDENCIA',
      comuna:'ZUSUKI',
      estado:'expreso',
      disponibilidad: '2022',
      direccion: '2022',
    },
    {
      id: '3',
      nombre:'SODIMAC QUILICURA',
      comuna:'ZUSUKI',
      estado:'expreso',
      disponibilidad: '2022',
      direccion: '2022',
    }
    
         ]
  constructor() { }

  ngOnInit() {
  }

}
