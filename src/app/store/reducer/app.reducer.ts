import {ActionReducerMap} from "@ngrx/store";
import {IAppState} from "../state/app.state";
import {userReducers} from "./users.reducer";
import {productReducers} from "./product.reducer";
import {shoppingCartReducers} from "./shopping-cart.reducer";

export const appReducers: ActionReducerMap<IAppState, any> = {
  users: userReducers,
  product: productReducers,
  shoppingCart: shoppingCartReducers
};
