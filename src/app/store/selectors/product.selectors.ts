import {IAppState} from "../state/app.state";
import {createSelector} from "@ngrx/store";
import {IUserState} from "../state/user.state";
import {IProductState} from "../state/product.state";

const selectProducts = (state: IAppState) => state.product;
export const  selectProductList = createSelector(
  selectProducts,
  (state: IProductState) => state.selectedProduct
);
export const selectSelectedProduct = createSelector(
  selectProducts,
  (state: IProductState) => {
    return Object.keys(state).map(() => state.selectedProduct)[0];
  }
);
