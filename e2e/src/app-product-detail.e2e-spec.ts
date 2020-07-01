import {MainPage} from "./test-component/main";
import {ProductDetailPage} from "./test-component/product-detail";
import {ProductListPage} from "./test-component/product-list";
import {LoginPage} from "./test-component/login-page";
import {browser} from "protractor";

describe('ng Product view', function () {
  let page: MainPage;
  let loginPage: LoginPage;
  let productDetail : ProductDetailPage;
  let productList: ProductListPage;
  beforeEach(() => {
    page = new MainPage();
    loginPage = new LoginPage();
    productList = new ProductListPage();
    productDetail = new ProductDetailPage();
  });
  it('should redirect to login page', () => {
loginPage.navigateTo();
browser.pause();
  });
  it('should display Field Name', () => {
expect(loginPage.getUsernameField().getText()).toEqual('');
  });
  it('should display Password', () => {
    expect(loginPage.getPasswordField().getText()).toEqual('');
  });
  it('should submit Form', () => {
    expect(loginPage.getSubmitButton().getText()).toEqual('Login');
  });
  it('should redirect to product-list page', () =>{
    productList.navigateTo();
    browser.pause();
  });
  it('should get the list of the products', () =>{
    expect(productList.getProductsList().count()).toBe(1);
  });
  it('should open a particular product and see the detail about', () => {
    productDetail.navigateTo();
    browser.pause();
    productList.getFirstProductDetail().click();
    productList.selectNextKey();
  })
  it('should display the detail of a particular product', () => {
expect(productDetail.getProductDetailName().getText()).toEqual('Name: Notebook Basic 17');
  })
});
