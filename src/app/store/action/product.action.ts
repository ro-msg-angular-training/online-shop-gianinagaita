import {Action} from "@ngrx/store";
import {ProductModule} from "../../model/product.module";
import {ProductDetailModule} from "../../product-detail/product-detail.module";

export enum EProductAction {
  GetProductById = '[Product] Get Product',
  GetProductByIdSuccess = '[Product] Get Product Success',
  GetAllProducts = '[Product] Get All Products',
  GetAllProductsSuccessfully = '[Product] Get All Products Success',
  AddNewProduct = '[Product] Add New Product',
  AddNewProductSuccess = '[Product] Add New Product Success',
  RemoveProduct = '[Product] Remove Product',
  RemoveProductSuccess = '[Product] Remove Product Success',
  UpdateProduct = '[Product] Update Product',
  UpdateProductSuccess = '[Product] Update Product Success'
}
export class GetProductById implements Action {
  public readonly type = EProductAction.GetProductById;
  constructor(public payload: ProductModule){}
}
export class GetProductByIdSuccess implements Action {
  public readonly type = EProductAction.GetProductByIdSuccess;

  constructor(public payload: ProductDetailModule) {
  }
}
export class GetAllProducts implements Action {
  public readonly type = EProductAction.GetAllProducts;
  constructor(public payload: ProductModule[]){}
}
export class GetAllProductsSuccessfully implements Action {
  public readonly type = EProductAction.GetAllProductsSuccessfully;
  constructor(public payload: ProductModule[]){}
}
export class AddNewProduct implements Action {
  public readonly type = EProductAction.AddNewProduct;
  constructor(public payload: ProductModule){}
}
export class AddNewProductSuccess implements Action {
  public readonly type = EProductAction.AddNewProductSuccess;

  constructor(public payload: ProductModule){}
}
export class RemoveProduct implements Action {
  public readonly type = EProductAction.RemoveProduct;
  constructor(public payload: ProductModule){}
}
export class RemoveProductSuccess implements Action {
  public readonly type = EProductAction.RemoveProductSuccess;

  constructor(public payload: ProductDetailModule){}
}
export class UpdateProduct implements Action {
  public readonly type = EProductAction.UpdateProduct;
  constructor(public payload: ProductModule){}
}
export class UpdateProductSuccess implements Action {
  public readonly type = EProductAction.UpdateProductSuccess;
  constructor(public payload: ProductModule){}
}
export type ProductAction = GetProductById | GetProductByIdSuccess | GetAllProducts | GetAllProductsSuccessfully | AddNewProduct | AddNewProductSuccess
| RemoveProduct | RemoveProductSuccess | UpdateProduct | UpdateProductSuccess;
