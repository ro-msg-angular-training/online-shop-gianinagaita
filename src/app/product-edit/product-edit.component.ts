import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {ProductsService} from "../products.service";
import {MatDialogRef} from "@angular/material/dialog";
import {ProductDetailComponent} from "../product-detail/product-detail.component";
import {ProductDetailModule} from "../product-detail/product-detail.module";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  private_url: string = "http://localhost:3000/products";
id: any;
productData = new ProductDetailModule();
  data: any;
  constructor(private router: ActivatedRoute, private productService: ProductsService,
              private http: HttpClient,
              private route: Router) {
  }

  ngOnInit() {
  console.log(this.router.snapshot.params.id);
  this.id=this.router.snapshot.params.id;
this.getProductData();
  }
  getProductData(){
     this.productService.getProductById(this.id).subscribe(res => {
      console.log(res);
      this.data=res;
      this.productData=this.data;
    })
  }
  updateData(){
    this.route.navigate(['/products']);
    this.productService.updateProduct(this.id, this.productData)
      .subscribe(res =>{}
      )
  }

}
