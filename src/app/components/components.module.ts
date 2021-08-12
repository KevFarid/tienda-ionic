import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './product-card/product-card.component';
import { IonicModule } from '@ionic/angular';
import { SlideProductComponent } from './slide-product/slide-product.component';



@NgModule({
  declarations: [
    ProductCardComponent,
    SlideProductComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    ProductCardComponent,
    SlideProductComponent
  ]
})
export class ComponentsModule { }
