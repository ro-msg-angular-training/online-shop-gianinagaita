import {initialProductState, IProductState} from "../state/product.state";
import {EProductAction, ProductAction} from "../action/product.action";

export const productReducers = (
  state = initialProductState, //initial state, previous state
  action: ProductAction //action
): IProductState => {
  switch (action.type) {
    case EProductAction.GetProductByIdSuccess:
      return {
        ...state,
        selectedProduct: action.payload
      };
    case EProductAction.GetAllProductsSuccessfully:
      return {
        ...state,
        products: action.payload
      };
    case EProductAction.AddNewProductSuccess:
      return {
        ...state,
        selectedProduct2: action.payload
      };
    case EProductAction.UpdateProductSuccess:
      return {
        ...state,
        selectedProduct2: action.payload
      };
    case EProductAction.RemoveProductSuccess:
      return {
        ...state,
        selectedProduct: action.payload
      };
    default:
      return state;
  }
};
