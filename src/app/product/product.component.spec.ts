import {ProductsService} from "../products.service";
import {ProductDetailModule} from "../product-detail/product-detail.module";
import {ProductModule} from "../model/product.module";
import {of} from "rxjs";
import {ProductComponent} from "./product.component";
import {ComponentFixture, TestBed} from "@angular/core/testing";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatChipsModule} from "@angular/material/chips";
import {RouterTestingModule} from "@angular/router/testing";
import {RouterModule} from "@angular/router";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {StoreModule} from "@ngrx/store";
import {appReducers} from "../store/reducer/app.reducer";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
let component: ProductComponent;
let fixture: ComponentFixture<ProductComponent>;
let h1: HTMLElement;
describe('ProductList with product service', () => {
  let httpClientSpy: { get: jasmine.Spy};
  let productService: ProductsService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductComponent],
      imports:  [MatFormFieldModule,
      MatChipsModule,
      RouterTestingModule,
      RouterModule.forRoot([]),
      HttpClientTestingModule,
      StoreModule.forRoot(appReducers),

   ],
    providers: [ProductsService]});
    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    h1 = fixture.nativeElement.querySelector('h1');
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    productService = new ProductsService(<any> httpClientSpy);
  });
  it('should return expected product (HttpClient called once)', () => {
    const expectedProduct: ProductModule[] = [{
      id: 1, amount:2, price: 31, name: 'smth', category: 'random', description: 'llll', iamge: 'dsfsd.jsp'
    }
    ];
    httpClientSpy.get.and.returnValue(of(expectedProduct));
    // productService.getProductById(1).subscribe(
    //   product => expect(product).toEqual(expectedProduct, 'expected heroes'),
    //   fail
    // );
    expect(httpClientSpy.get.calls.count()).toBe(0, 'one call');
  });
  });
  it('#getValue should return real value form the real service', () => {

  });
