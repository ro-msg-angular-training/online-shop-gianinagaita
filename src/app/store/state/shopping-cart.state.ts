import {ShoppingCartItemModel} from "../../model/shopping-cart-item.model";
import {OrderModel} from "../../model/order.model";

export interface IShoppingCartState {
  items: ShoppingCartItemModel[];
  order: OrderModel;
}

export const initialShoppingCartState: IShoppingCartState = {
  items: [],
  order: null
};
