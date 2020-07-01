import {ProductModule} from "../../model/product.module";
import {ProductDetailModule} from "../../product-detail/product-detail.module";

export interface IProductState {
  products: ProductModule[];
  selectedProduct: ProductDetailModule;
  selectedProduct2: ProductModule;
}

export const initialProductState: IProductState = {
  products: null,
  selectedProduct: null,
  selectedProduct2: null
};
