import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ProductComponent} from './product/product.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTableModule} from "@angular/material/table";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatListModule} from "@angular/material/list";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {RouterModule, Routes} from "@angular/router";
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatChipsModule} from "@angular/material/chips";
import {ProductsService} from "./products.service";
import {MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSortModule} from "@angular/material/sort";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {ProductsoperationsComponent} from './productsoperations/productsoperations.component';
import {ProductEditComponent} from './product-edit/product-edit.component';
import {MatGridListModule} from "@angular/material/grid-list";
import {MatInputModule} from "@angular/material/input";

import {RegisterComponent} from './register/register.component';
import {LoginComponent} from "./login/login.component";
import {UsersService} from "./users.service";
import {AuthService} from "./auth.service";
import {CardModalComponent} from './card-modal/card-modal.component';
import {IonicModule} from "@ionic/angular";
import {OrderComponent} from './order/order.component';
import {MatSelectModule} from "@angular/material/select";
import {StoreModule} from '@ngrx/store';
import {appReducers} from "./store/reducer/app.reducer";
import {EffectsModule} from "@ngrx/effects";
import {UserEffects} from "./store/effects/users.effects";
import {ShoppingCartEffects} from "./store/effects/shopping-cart.effects";
import {ProductEffects} from "./store/effects/product.effects";
import {StoreRouterConnectingModule} from "@ngrx/router-store";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {environment} from "../environments/environment";



@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductDetailComponent,
    ProductsoperationsComponent,
    ProductEditComponent,
    LoginComponent,
    RegisterComponent,
    CardModalComponent,
    OrderComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([UserEffects, ShoppingCartEffects, ProductEffects]),
    StoreRouterConnectingModule.forRoot({stateKey: 'router'}),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatChipsModule,
    MatDialogModule,
    MatFormFieldModule,

    MatSortModule,
    MatButtonToggleModule,
    MatGridListModule,
    MatInputModule,
    IonicModule,
    MatSelectModule

  ],
  //need to put here the service component
  providers: [ProductsService, UsersService, AuthService],
  entryComponents: [ProductComponent, ProductDetailComponent, ProductsoperationsComponent, ProductEditComponent, CardModalComponent],
  bootstrap: [AppComponent, ProductComponent]
})
export class AppModule {
}
