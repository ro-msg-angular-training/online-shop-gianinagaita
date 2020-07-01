import {initialShoppingCartState, IShoppingCartState} from "../state/shopping-cart.state";
import {EShoppingCartActions, ShoppingCartActions} from "../action/shopping-cart.action";

export const shoppingCartReducers = (
  state = initialShoppingCartState,
    action: ShoppingCartActions
): IShoppingCartState => {
  switch (action.type) {
    case EShoppingCartActions.CreateCheckoutSuccess:
      return {
        ...state,
        order: action.payload
      };
    case EShoppingCartActions.GetAllShoppingItemsSuccess:
      return {
        ...state,
        items: action.payload
      };
  }
};
