import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CartService {
private cart = [];
private cartItemCount = new BehaviorSubject(0);
  constructor() { }
}
