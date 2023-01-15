import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,FormControl,Validators } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';
//import { Proveedor1Service } from '../proveedor1.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage{

  formularioLogin: FormGroup;

  constructor(public fb: FormBuilder,
    public alertController: AlertController,
    public navCtrol:NavController){
    
    this.formularioLogin = this.fb.group({
      'nombre': new FormControl("",Validators.required),
      'pass': new FormControl("",Validators.required)
    })
   }
  ngOnInit(){
  }


  async ingresar(){
    var f = this.formularioLogin.value;

    var usuario = JSON.parse(localStorage.getItem('usuario')!);

    if(usuario.nombre == f.nombre && usuario.password == f.pass){
      console.log('Ingresado');

      localStorage.setItem('ingresado','true');
      this.navCtrol.navigateRoot('menu/inicio');
    }else{
      const alert = await this.alertController.create({
        header: 'Datos incorrectos',
        message: 'Los datos que ingresaste son incorrectos.',
        buttons: ['Aceptar']
      });
  
      await alert.present();
    }
  }

}