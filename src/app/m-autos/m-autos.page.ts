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
data =localStorage.getItem("Autos");
public items:any
    constructor() {

    }

  ngOnInit(): void {
  }
 }

    

