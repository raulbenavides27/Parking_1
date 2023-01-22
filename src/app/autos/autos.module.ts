import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AutosPageRoutingModule } from './autos-routing.module';

import { AutosPage } from './autos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    AutosPageRoutingModule
  ],
  declarations: [AutosPage]
})
export class AutosPageModule { }
