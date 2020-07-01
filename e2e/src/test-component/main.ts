import {browser} from "protractor";

export class MainPage {
navigateTo(){
  return browser.get('/');
  browser.sleep(2000);
}

}
