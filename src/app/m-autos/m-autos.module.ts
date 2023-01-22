import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MAutosPageRoutingModule } from './m-autos-routing.module';

import { MAutosPage } from './m-autos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MAutosPageRoutingModule,
  
  ],
  declarations: [MAutosPage]
})
export class MAutosPageModule {}
