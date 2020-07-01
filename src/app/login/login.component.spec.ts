import {ProductsService} from "../products.service";
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {ComponentFixture, TestBed, inject} from "@angular/core/testing";
import {ProductDetailComponent} from "../product-detail/product-detail.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatChipsModule} from "@angular/material/chips";
import {RouterTestingModule} from "@angular/router/testing";
import {RouterModule} from "@angular/router";
import {StoreModule} from "@ngrx/store";
import {appReducers} from "../store/reducer/app.reducer";
import {AuthService} from "../auth.service";
import {LoginComponent} from "./login.component";
import {UserModel} from "../model/user.model";
import {UsersService} from "../users.service";
import {NO_ERRORS_SCHEMA} from "@angular/core";

describe('LoginComponent', () => {
  let service: AuthService;
  let httpMock: HttpTestingController;
let userService: UsersService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        LoginComponent,
      ],
      imports: [
        MatFormFieldModule,
        MatChipsModule,
        RouterTestingModule,
        RouterModule.forRoot([]),
        HttpClientTestingModule,
        StoreModule.forRoot(appReducers)
      ],
      providers: [AuthService, UsersService],
      schemas: [ NO_ERRORS_SCHEMA ]
    }).compileComponents();
    service = TestBed.get(AuthService);
    userService = TestBed.get(UsersService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });
  it('return the username and the password for the customer', () =>{
    const mockCustomer = [{
      username: "gg",
      password: "ggg"
    },
      {
        "username": "blackj",
        "password": "12345678"

      }];
    userService.post("http://localhost:3000/login", mockCustomer).subscribe(userData => {
      expect(userData[0].username).toEqual("gg");
      expect(userData[0].password).toEqual( "ggg");
      expect(userData[1].username).toEqual("blackj");
      expect(userData[1].password).toEqual( "12345678");

    });
    const request = httpMock.expectOne("http://localhost:3000/login");
    request.flush(mockCustomer);

  });
  it('Genereting authentification method that has inside a userService method',
    inject([AuthService, UsersService ], (inject: AuthService) => {
      expect(inject).toBe(service);
    }));
});
