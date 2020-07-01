import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {OrderModel} from "./model/order.model";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private _orderUrl: string = "http://localhost:3000/orders";
  constructor(private http: HttpClient) { }
checkOut(order: OrderModel): Observable<OrderModel> {
    return this.http.post<OrderModel>(this._orderUrl, order);
}
}
