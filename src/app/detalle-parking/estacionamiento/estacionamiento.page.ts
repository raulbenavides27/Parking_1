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
      comuna:'HUECHURABA',
      estado:'activo',
      disponibilidad: '80%',
      direccion: 'Av. americo vespucio 1737',
    },
    {
      id: '3',
      nombre:'SANTA ISABEL INDEPENDENCIA',
      comuna:'INDEPENDENCIA',
      estado:'En mantencion',
      disponibilidad: '15%',
      direccion: 'av INDEPENDENCIA 3160',
    },
    {
      id: '3',
      nombre:'SODIMAC QUILICURA',
      comuna:'QUILICURA',
      estado:'activo',
      disponibilidad: '40%',
      direccion: 'Av. Manuel Antonio Matta 581',
    }
    
         ]
  constructor() { }

  ngOnInit() {
  }

}
