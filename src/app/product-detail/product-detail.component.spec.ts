import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {ProductDetailComponent} from './product-detail.component';
import {ProductsService} from "../products.service";
import {MatFormFieldModule} from "@angular/material/form-field";
import {RouterTestingModule} from "@angular/router/testing";
import {RouterModule} from "@angular/router";
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {StoreModule} from "@ngrx/store";
import {appReducers} from "../store/reducer/app.reducer";
import {MatChipsModule} from "@angular/material/chips";
import {Observable, of} from "rxjs";
import {ProductDetailModule} from "./product-detail.module";
import {HttpErrorResponse} from "@angular/common/http";
//function that are into this program:!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//expect(result).toBe()//toContain()//toEqual()//toBeNull()//toBeTruthy()

describe('ProductDetailsComponent', () => {
  let httpClientSpy:{ get: jasmine.Spy, post: jasmine.Spy, put: jasmine.Spy};
  let service: ProductsService;
  let httpMock: HttpTestingController;
  beforeEach(() => {

    TestBed.configureTestingModule({
      declarations: [
        ProductDetailComponent,
      ],
      imports: [
        MatFormFieldModule,
        MatChipsModule,
        RouterTestingModule,
        RouterModule.forRoot([]),
        HttpClientTestingModule,
        StoreModule.forRoot(appReducers)
      ],
      providers: [ProductsService]
    }).compileComponents();
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);

    service = TestBed.get(ProductsService);
  httpMock = TestBed.get(HttpTestingController);
  });
  afterEach(() => {
    //httpMock.verify();
  })
  it('should return expected product (HttpClient called once)', () => {
    const expectedProduct: ProductDetailModule[] = [{ id:1, name: 'Notebook Basic 17', category:'laptops', description: 'a good one', price: 121, image: 'sdsdasds.jpg'}];
    // @ts-ignore
    httpClientSpy.get.and.returnValue(of(expectedProduct));
    service.getProductById(1).subscribe(productData => expect(productData.name).toEqual(expectedProduct[0].name, 'expected heros'),
    fail
  );
  expect(httpClientSpy.get.calls.count()).toBe(0, 'one call');
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('returned Observable should match the right data', () => {
    const mockCourse = {
      id: 2,
      name: 'Iphone xs',
      category: 'Telephons',
      image: "https://sapui5.hana.ondemand.com/test-s/ss/ui/documentation/sdk/images/HT-1001.jpg",
      price: 123,
      description: "dsfsdfsdfsd"
    };
    service.createProduct(mockCourse).subscribe(productData => {
      expect(productData.name).toEqual("Iphone xs");
    });
    const req = httpMock.expectOne(`${service.private_url}`);

    expect(req.request.method).toEqual('POST');

    req.flush(mockCourse);
  });

  it('returned Observable should match the right data', () => {
    const mockingProduct = [
      {
        id: 12,
        name: "Notebook Basic 17",
        category: "Laptops",
        image: "https://sapui5.hana.ondemand.com/test-resources/sap/ui/documentation/sdk/images/HT-1001.jpg",
        price: 1249,
        description: "Notebook Basic 17 with 2,80 GHz quad core, 17\" LCD, 4 GB DDR3 RAM, 500 GB Hard Disc, Windows 8 Pro"
      }
    ];

    service.getProductById(1).subscribe(productData => {
      expect(productData[0].name).toEqual("Notebook Basic 17");
      expect(productData[0].description).toEqual("Notebook Basic 17 with 2,80 GHz quad core, 17\" LCD, 4 GB DDR3 RAM, 500 GB Hard Disc, Windows 8 Pro");
    });

    const req = httpMock.expectOne(`${service.private_url}/1`);
    req.flush(mockingProduct);
  });

  it('reading data from backend', () => {
    service.getProductById(1).subscribe(productData => {
      expect(productData[1].name).toEqual("Notebook Basic 17")
    });
    const req = httpMock.expectOne("http://localhost:3000/products/1");

  })


});

