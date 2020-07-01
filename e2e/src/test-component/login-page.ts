import {browser, by, element, Key} from "protractor";



export class LoginPage {
  navigateTo() {
    return browser.get('/login');
    browser.sleep(2000);
  }
getUsernameField() {
    return element(by.id('name'));
}
getPasswordField() {
    return element(by.id('password'));
}
getSubmitButton() {
    return element(by.className('mat-raised-button mat-primary mat-button mat-button-base'));
}

}
