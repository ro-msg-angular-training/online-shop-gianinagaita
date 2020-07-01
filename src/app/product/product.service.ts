import {PeriodicElement} from "./product.component";
import {Injectable} from "@angular/core";

export class ProductService{
  // id, name, category, image, price, description;
ELEMENT_DATA: PeriodicElement[] = [
    {no: 1, name: 'Hydrogen', price: 1.0079, symbol: '>', buttons: 'jjjjjjjjjjj'},
    {no: 2, name: 'Helium', price: 4.0026, symbol: '>',buttons: ''},
    {no: 3, name: 'Lithium', price: 6.941, symbol: '>', buttons:''},
    {no: 4, name: 'Beryllium', price: 9.0122, symbol: '>',buttons:''},
    {no: 5, name: 'Boron', price: 10.811, symbol: '>', buttons:''},
    {no: 6, name: 'Carbon', price: 12.0107, symbol: '>', buttons:''},
    {no: 7, name: 'Nitrogen', price: 14.0067, symbol: '>', buttons:''},
    {no: 8, name: 'Oxygen', price: 15.9994, symbol: '>', buttons:''},
    {no: 9, name: 'Fluorine', price: 18.9984, symbol: '>', buttons:''},
    {no: 10, name: 'Neon', price: 20.1797, symbol: '>', buttons:''},
  ];
addProduct(no: number, name: string, price: number, symbol: string, buttons: any){
this.ELEMENT_DATA.push({no: no, name: name, price: price, symbol: symbol, buttons: buttons});
}
updateStatus(no: number, name: string, price: number, symbol: string, buttons: any){
  this.ELEMENT_DATA[no].price=price;
}
}
