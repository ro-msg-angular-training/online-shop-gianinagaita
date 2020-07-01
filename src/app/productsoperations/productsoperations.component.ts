import {Component, Inject, OnInit} from '@angular/core';
import {ActivatedRoute, Route, Router} from "@angular/router";
import {ProductsService} from "../products.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ProductDetailComponent} from "../product-detail/product-detail.component";
import {HttpClient} from "@angular/common/http";
import {ProductComponent} from "../product/product.component";
import {ProductModule} from "../model/product.module";

@Component({
  selector: 'app-productsoperations',
  templateUrl: './productsoperations.component.html',
  styleUrls: ['./productsoperations.component.css']
})
//for adding the new product!!
export class ProductsoperationsComponent implements OnInit {
  private_url: string="http://localhost:3000/products";
  private data: ProductModule[];
  constructor(private router: Router,public productService: ProductsService, private dialogRef: MatDialogRef<ProductDetailComponent>) { }

  ngOnInit() {
  }
  onSubmit(){
    console.log(this.productService.formGroup.value);
    this.productService.createProduct(this.productService.formGroup.value).subscribe(
      response =>
        console.log('Successfully!', response),
      error => console.error('Error', error)
    );
    this.fetchData();
  }
  onNoClick(): void {
    this.dialogRef.close();
    this.fetchData();
  }
  fetchData(){
    this.productService.getAllProducts().subscribe(data => {
      this.data = data;
    })
  }

}

