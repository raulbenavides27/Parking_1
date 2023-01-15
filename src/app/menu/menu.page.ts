import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  indiceSeleccionado: number = 0;
  paginas = [
    {
      titulo: 'Inicio',
      url: '/menu/inicio',
      icono: 'home'
    },
    {
      titulo: 'estacionamiento',
      url: '/menu/estacionamiento',
      icono: 'business'
    },
    {
      titulo: 'Auto',
      url: '/menu/autos',
      icono: 'business'
    },
    {
      titulo: 'Ajustes',
      url: '/menu/ajuste',
      icono: 'business'
    },
    {
      titulo: 'Ayuda',
      url: '/menu/autos',
      icono: 'business'
    }
  ]
  constructor(public alertController: AlertController,
    public navCtrl: NavController) { }

  ngOnInit() {
 
  }
  cambiarIndiceSeleccionado(i: number){
    this.indiceSeleccionado = i;
  }

  async salir(){
    const alert = await this.alertController.create({
      header: 'Salir',
      message: '¿Confirmar para salir?',
      buttons: [
        {
          text: 'Cancelar',
          handler: () => {
            
          }
        }, {
          text: 'Aceptar',
          handler: () => {
            localStorage.removeItem('ingresado');
            this.navCtrl.navigateRoot('home');
          }
        }
      ]
    });

    await alert.present();
  }

}
