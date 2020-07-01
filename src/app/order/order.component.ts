import { Component, OnInit } from '@angular/core';
import {OrderModel} from "../model/order.model";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {UsersService} from "../users.service";
import {AuthService} from "../auth.service";
import {OrderService} from "../order.service";
import {ProductsService} from "../products.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatDialogRef} from "@angular/material/dialog";
import {ProductComponent} from "../product/product.component";
import {CardModalComponent} from "../card-modal/card-modal.component";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
public customerName: string;
  orderForm: FormGroup;
  constructor(private router: Router,
              private route: ActivatedRoute,
              private authUser: AuthService,
              private orderService: OrderService,
              private productService: ProductsService,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.orderForm = this.formBuilder.group({
      'customer': [this.customerName, [
        Validators.required
      ]],
      'fname': ['',[
        Validators.required
      ]],
      'lname':['', [
        Validators.required
      ]],
      'years': ['', [
        Validators.required
      ]]
    });
  }

onCheckOut(){

    const order = new OrderModel();
    order.customer=this.authUser.userName;
    this.customerName = order.customer;
    console.log(order.customer);
  order.products = this.productService.getShoppingCartItems().map((item) => ({
    productId: item.product.id,
    quantity: item.quantity
  }));
  console.log(order.products);
  this.orderService.checkOut(order);
  this.productService.clearingShoppingCart();

}
}
