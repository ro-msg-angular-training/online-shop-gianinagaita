import {Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {BehaviorSubject, Observable, Subscription} from "rxjs";
import {ProductService} from "./product.service";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {ProductModule} from "../model/product.module";
import {ProductsService} from "../products.service";
import {ProductDetailModule} from "../product-detail/product-detail.module";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {ProductsoperationsComponent} from "../productsoperations/productsoperations.component";
import {CardModalComponent} from "../card-modal/card-modal.component";
import {IAppState} from "../store/state/app.state";
import {Store} from "@ngrx/store";


//also could made a class
export interface PeriodicElement {
  name: string;
  no: number;
  price: number;
  symbol: string;
  buttons: any;
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductService]
})
export class ProductComponent implements OnInit {
  displayedColumns: string[] = ['no', 'name', 'price', 'symbol', 'buttons'];
  productsFromBackend: ProductModule[] = [];
  allProducts: ProductModule[];
  dataSources: { no: number, name: string };
  paramsSubscription: Subscription;
  productDetail: ProductDetailModule;
  private_url: string = "http://localhost:3000/products";
  idNumber: ProductDetailModule;
  counter = 0;
  cart = [];
  products = [];
//giving the data from the service and giving the vieww to display it .
  cartItemCount: BehaviorSubject<number>;
  constructor(private router: Router, private routerActive: ActivatedRoute,
              private http: HttpClient,
              private productsService: ProductsService,
              private dialog: MatDialog,
              private _store: Store<IAppState>) {
  }
  ngOnInit() {
    // we have injected here, but is need to be observable.
    // observable is kind of lazy.
    this.productsService.getAllProducts()
      .subscribe((data) => {
        this.allProducts = data;
      })



    //this will make the change to be updated, if i press on max will display max and he s id, and if i press jana and she s id this is
    //what will be displayed.DON T FORGET about the ; form the end.
    //cleans up every time one component is distroyed.
    this.cart = this.productsService.getCart();
    this.cartItemCount = this.productsService.getCartItemCount();

  }
  //detail page
  onLoad(element: any) {
    this.router.navigate(['/product-detail', element.id]);
    this.productDetail = element;
  }
//increase the value from the shopcard
  onAddCart(element: ProductModule) {
    this.productsService.addProduct(element);

  }


  //on the event of type any is saving me the value of the product.
  //opening the card
  async openCart() {
    // this.animateCSS('bounceOutLeft', true);

    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    this.dialog.open(CardModalComponent, {width: '400px', height: '550px'});


  }



}
