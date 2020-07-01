import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {BehaviorSubject, Observable, of, throwError} from "rxjs";
import {ProductModule} from "./model/product.module";
import {ProductDetailModule} from "./product-detail/product-detail.module";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ShoppingCartItemModel} from "./model/shopping-cart-item.model";

@Injectable({
  providedIn: 'root'
})

export class ProductsService {
  private_url: string = "http://localhost:3000/products";
  private cart = [];
  shoppingCart: ShoppingCartItemModel[] = [];
  private cartItemCount = new BehaviorSubject(0);
   counter = 0;
  //looking for behaviorSubject
  constructor(private http: HttpClient) {
  }
  //creating a form group, $key is like a primary key, for inserting new products.
 formGroup: FormGroup = new FormGroup({
  $key: new FormControl(null),
  name: new FormControl('', Validators.required),
  category: new FormControl('', Validators.required),
  price: new FormControl('', [Validators.required, Validators.maxLength(7)]),
  description: new FormControl('')
});
  getAllProducts(): Observable<ProductModule[]> {
    return this.http.get<ProductModule[]>(this.private_url);
  }

  //not hardcoding the return type, because i can return what type i want and after that i can made cast.

  getProductById(id: unknown) {
    return  this.http.get<ProductDetailModule>(`http://localhost:3000/products/${id}`);
  }
  deleteProduct(id: number): Observable<ProductDetailModule> {
    return this.http.delete<ProductDetailModule>(`${this.private_url}/${id}`);
  }
 createProduct(userData: any): Observable<any>{
    return this.http.post<any>(this.private_url, userData);
 }
 updateProduct(id,data){
    return this.http.put<any>(`${this.private_url}/${id}`, data);
 }
  getCart() {
    return this.cart;
  }
  getCartItemCount() {
    return this.cartItemCount;
  }
  getShoppingCartItems(): ShoppingCartItemModel[] {
    return this.shoppingCart;
  }
  clearingShoppingCart(){
    this.shoppingCart= [];
  }
  addProduct(product){
    let added = false;
    const shoppingCartItem = new ShoppingCartItemModel();
    shoppingCartItem.product=product;
    shoppingCartItem.quantity=1;
    for (let p of this.shoppingCart)
      if(p.product.id === product.id){
        added = true;
       p.quantity++;
       // product.quantity++;
        break;
      }

    if(!added){
      this.shoppingCart.push(shoppingCartItem);
    }
    this.cartItemCount.next(this.cartItemCount.value +1);
    return console.log('success!');
  }
  increaseCart(product: ShoppingCartItemModel){

    product.quantity++;
  }

  decreaseProduct(product: ShoppingCartItemModel){
 product.quantity--;
  }
  removeProduct(product){
    for(let [index, p] of this.shoppingCart.entries()){
      if(p.product.id === product.id) {
        this.cartItemCount.next(this.cartItemCount.value - p.product.amount);

        //this.cart.splice(index,1);
        this.shoppingCart.splice(index,1);
        this.fetchData()
      }
    }
  }
  fetchData(){
    this.getShoppingCartItems();
    }


}
