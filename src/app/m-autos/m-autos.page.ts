import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';
import { Observable, observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';

@Component({
  selector: 'app-m-autos',
  templateUrl: './m-autos.page.html',
  styleUrls: ['./m-autos.page.scss'],
})
export class MAutosPage implements OnInit {
//data =localStorage.getItem("Autos");
public autos = 
[
  {
    id: '1',
    nombre:'El regalon',
    marca:'Zusuki',
    modelo:'expresso',
    year: '2022',
    imageURL:'https://http2.mlstatic.com/D_NQ_NP_751845-MLC50334326188_062022-O.jpg'
  },
  {
    id: '2',
    nombre:'La nave',
    marca:'PEGOUT',
    modelo:'508',
    year: '2021',
    imageURL:'https://http2.mlstatic.com/D_NQ_NP_859615-MLC53326268984_012023-O.jpg'
  },
  {
    id: '3',
    nombre:'Auto hermano',
    marca:'hyundai',
    modelo:'elantra',
    year: '2016',
    imageURL:'http://imgcf.ecn.cl/600/ff/ff2bdb0005a85b4f8daa4528ca288fe7ba07b389.bin.jpg'
  },
  
       ]
    constructor() {

    }

  ngOnInit(): void {
  }
 }

    

