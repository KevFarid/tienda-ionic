import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import { ComponentsModule } from '../components/components.module';
import { NgModule } from '@angular/core';
import { FiltroPipe } from '../pipes/filtro.pipe';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab1PageRoutingModule,
    ComponentsModule
  ],
  declarations: [
    Tab1Page,
    FiltroPipe
  ]
})
export class Tab1PageModule {}
