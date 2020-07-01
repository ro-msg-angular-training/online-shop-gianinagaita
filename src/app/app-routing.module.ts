import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {ProductComponent} from "./product/product.component";
import {ProductDetailComponent} from "./product-detail/product-detail.component";
import {ProductEditComponent} from "./product-edit/product-edit.component";

import {RegisterComponent} from "./register/register.component";
import {LoginComponent} from "./login/login.component";
import {CardModalComponent} from "./card-modal/card-modal.component";
import {OrderComponent} from "./order/order.component";
// import { HomeComponent } from '../home/home.component';
const appRoutes: Routes = [{
  path: '',
  redirectTo: '/login',
  pathMatch: 'full'
}, {
  path: 'login',
  component: LoginComponent
},{
  path: 'login',
  redirectTo: '/products',
  pathMatch: 'full'
},
  {path: 'products', component: ProductComponent},
  {path: 'product-detail', component: ProductDetailComponent},
  {path: 'product-detail/:id', component: ProductDetailComponent},
  {
    path: 'edit/:id', component: ProductEditComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path:'card-modal',
    component: CardModalComponent
  },
  {path:'order',
  component: OrderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {
}

export const routingComponents = [ProductDetailComponent, ProductComponent, ProductEditComponent, LoginComponent, RegisterComponent, CardModalComponent, OrderComponent]
