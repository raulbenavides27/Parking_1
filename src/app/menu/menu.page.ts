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
      titulo: 'inicio',
      url: '/inicio/inicio',
      icono: 'home'
    },
    {
      titulo: 'estacionamiento',
      url: '/estacionamiento/estacionamiento',
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
            this.navCtrl.navigateRoot('login');
          }
        }
      ]
    });

    await alert.present();
  }

}
