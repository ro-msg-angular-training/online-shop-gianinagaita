import {browser, by, element, Key} from "protractor";

export class ProductListPage {
  navigateTo() {
    return browser.get('/products');
  }
  getProductsList() {
    return element.all(by.className('mat-elevation-z8 mat-table'));
  }
  getFirstProductDetail() {
    return element(by.className('mat-button-wrapper'));
  }
  selectNextKey() {
    browser.actions().sendKeys(Key.ARROW_RIGHT).perform();
  }
  selectPrevKey() {
    browser.actions().sendKeys(Key.ARROW_LEFT).perform();
  }
  selectEscapeKey() {
    browser.actions().sendKeys(Key.ESCAPE).perform();
  }
}
