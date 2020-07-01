import {browser, by, element, Key} from "protractor";

export class ProductDetailPage {
  navigateTo() {
    return browser.get('product-detail/1');
  }
  getTileOfProduct() {
    return element(by.id('title'));
  }
  getProductDetailName() {
    this.navigateTo();
    return element(by.id('productName'));
  }
  getProductDetailCategory() {
    return element(by.id('productCategory'));
  }
  getProductDetailPrice() {
    return element(by.id('productPrice'));
  }
  getProductDetailDescription() {
    return element(by.id('productDescription'));
  }
  getProductDetailImage() {
    return element(by.id('productImage'));
  }


}
