import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {ProductDetailComponent} from "../product-detail/product-detail.component";
import {ProductComponent} from "../product/product.component";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductModule} from "../model/product.module";
import {ProductsService} from "../products.service";
import {BehaviorSubject} from "rxjs";
import {ShoppingCartItemModel} from "../model/shopping-cart-item.model";

@Component({
  selector: 'app-card-modal',
  templateUrl: './card-modal.component.html',
  styleUrls: ['./card-modal.component.css']
})
export class CardModalComponent implements OnInit {
  cart: ShoppingCartItemModel[] = [];
  singleCard: ShoppingCartItemModel;
  cartItemCount: BehaviorSubject<number>;
  allProducts: any;
  private c: any;
  sum = 0;

  constructor(private router: Router, private route: ActivatedRoute,
              private productService: ProductsService,
              private dialogRef: MatDialogRef<ProductComponent>) {
  }

  ngOnInit() {
    this.cart = this.productService.getShoppingCartItems();
    console.log(this.cart); //get me the shopping card
    this.cartItemCount = this.productService.getCartItemCount();
    console.log(this.cartItemCount); //get me only the value

  }

  decreaseCartItem(product: ShoppingCartItemModel) {
    this.productService.decreaseProduct(product);
  }

  increaseCartItem(product: ShoppingCartItemModel) {
    this.productService.increaseCart(product);

  }

  removeCartItem(product: ShoppingCartItemModel) {
    this.productService.removeProduct(product);
  }

  getTotal(price: number, amount: number): number{
    this.sum += this.sum + price * amount;
    console.log(this.sum);
    return this.sum;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  checkOut() {
    this.onNoClick();
    this.router.navigate(['/order']);
  }

}
