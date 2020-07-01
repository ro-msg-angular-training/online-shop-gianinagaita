import {initialUserState, IUserState} from "./user.state";
import {initialProductState, IProductState} from "./product.state";
import {initialShoppingCartState,  IShoppingCartState} from "./shopping-cart.state";

export interface IAppState {
  users: IUserState;
  product: IProductState;
  shoppingCart: IShoppingCartState;
}
export const initialAppState: IAppState = {
  users: initialUserState,
  product: initialProductState,
  shoppingCart: initialShoppingCartState
};
export function getInitialState(): IAppState {
  return initialAppState;
}
