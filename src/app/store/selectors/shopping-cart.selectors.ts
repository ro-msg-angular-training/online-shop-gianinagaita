import {IAppState} from "../state/app.state";
import {createSelector} from "@ngrx/store";
import {IUserState} from "../state/user.state";
import {IProductState} from "../state/product.state";
import {IShoppingCartState} from "../state/shopping-cart.state";

const selectShoppingList = (state: IAppState) => state.shoppingCart;
export const  selectShoppingCartList = createSelector(
  selectShoppingList,
  (state: IShoppingCartState) => state.items
);
export const selectOrder = createSelector(
  selectShoppingList,
  (state: IShoppingCartState) => state.order
);
