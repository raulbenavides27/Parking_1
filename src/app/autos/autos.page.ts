import { Component, ModuleWithComponentFactories, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';
import { getElementRoot } from '@ionic/core/dist/types/utils/helpers';

@Component({
  selector: 'app-autos',
  templateUrl: './autos.page.html',
  styleUrls: ['./autos.page.scss'],
})
export class AutosPage implements OnInit {

  formularioAuto: FormGroup;

  constructor(public fb: FormBuilder,
    public alertController: AlertController,
    public navCtrol: NavController) {

    this.formularioAuto = this.fb.group({
      'marca': new FormControl("", Validators.required),
      'modelo': new FormControl("", Validators.required),
      'year': new FormControl("", Validators.required),
      'name': new FormControl("", Validators.required)
    });
  }

  ngOnInit() {
  }

  async guardar() {
    var f = this.formularioAuto.value;

    if (this.formularioAuto.invalid) {
      const alert = await this.alertController.create({
        header: 'Datos incompletos',
        message: 'Tienes que llenar todos los datos',
        buttons: ['Aceptar']
      });

      await alert.present();
      return;
    }

    var Autos = {
      marca: f.marca,
      modelo: f.modelo,
      año: f.year
    }



    const alert = await this.alertController.create({
      header: 'Auto agregado',
      message: 'Registro exitoso',
      buttons: ['Aceptar']
    });
    localStorage.setItem('Autos', JSON.stringify(Autos));
    this.navCtrol.navigateRoot('menu/home');
    this.navCtrol.navigateRoot('login');
    await alert.present();
    return;
  }
}
