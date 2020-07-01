import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ProductDetailModule {
  id: number;
  name: string;
  category: string;
  price: number;
  description: string;
  image: string;
}
