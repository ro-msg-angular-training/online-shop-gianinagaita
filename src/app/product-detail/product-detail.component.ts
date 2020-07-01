import {AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {ProductsService} from "../products.service";
import {ProductDetailModule} from "./product-detail.module";
import {ProductModule} from "../model/product.module";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {ProductsoperationsComponent} from "../productsoperations/productsoperations.component";
import {ProductEditComponent} from "../product-edit/product-edit.component";
import {AuthService} from "../auth.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit{
  public productId;
  public productReceived: any;
  allProducts: any;
  dataFromBackend: any;
//type product
  private id: any;
  products = [];
  productsUpdated: ProductModule[];
  public userRoles: string[];
  private data: ProductModule[];
//ActivedRouter cause u came from antother pahe to this one.!
  constructor(private routeActive: ActivatedRoute,private http: HttpClient
    , private servicesProduct: ProductsService, private dialog: MatDialog, private authService: AuthService,
              private router: Router) {
  }
  ngOnInit() {
    let id = parseInt(this.routeActive.snapshot.paramMap.get('id'));
    this.productReceived = id;
    this.servicesProduct.getProductById(id)
      .subscribe(
        (data: any) => {
          console.log(data);
          this.dataFromBackend = data;
          console.log(this.dataFromBackend);
        });
    this.fetchData();
  }
  onEdit(){
    this.router.navigate(['/edit', this.dataFromBackend.id]);
    this.fetchData();
  }
  deleteProduct(id: number) {
    this.servicesProduct.deleteProduct(id)
      .subscribe(
        data => {
          this.dataFromBackend = data,
            error1 => alert(error1.error.message)

        }
      );
    this.router.navigate(['/products']);
  }

  onCreate(){
    //this.productService.initializeAnotherFormGroup();
    const dialogConfig= new MatDialogConfig();
    dialogConfig.disableClose= true;
    dialogConfig.autoFocus=true;
    this.dialog.open(ProductsoperationsComponent);
    this.fetchData();
  }

  // showButton() : boolean{
  //   if(this.authService.userRoles === null) return false;
  //   for(let per of this.authService.userRoles)
  //     if(per === "admin") return false;
  //   return true;
  // }
  fetchData(){
    this.servicesProduct.getAllProducts().subscribe(data => {
    this.data = data;
   })
  }


}

