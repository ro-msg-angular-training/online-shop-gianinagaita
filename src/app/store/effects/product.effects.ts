import {Injectable} from "@angular/core";
import {Actions, Effect, ofType} from "@ngrx/effects";
import {ProductsService} from "../../products.service";
import {IAppState} from "../state/app.state";
import {Store} from "@ngrx/store";
import {
  AddNewProduct, AddNewProductSuccess,
  EProductAction,
  GetAllProducts,
  GetAllProductsSuccessfully,
  GetProductById,
  GetProductByIdSuccess, RemoveProduct, RemoveProductSuccess, UpdateProduct, UpdateProductSuccess
} from "../action/product.action";
import {catchError, map, switchMap, tap} from "rxjs/operators";
import {IProductState} from "../state/product.state";
import {of} from "rxjs";
import {Router} from "@angular/router";

@Injectable()
export class ProductEffects {
  @Effect()
  getProduct$ = this._actions$.pipe(
    ofType<GetProductById>(EProductAction.GetProductById),
    map(action => action.payload),
    switchMap( payload =>
    this._productServices.getProductById(payload).pipe(
      map(product => new GetProductByIdSuccess(product)))));
  @Effect()
  getAllProducts$ = this._actions$.pipe(
    ofType<GetAllProducts>(EProductAction.GetAllProducts),
    switchMap(() =>
    this._productServices.getAllProducts().pipe(
      map(product => new GetAllProductsSuccessfully(product))))); //this line always!
  @Effect()
  updateProduct$ = this._actions$.pipe(
    ofType<UpdateProduct>(EProductAction.UpdateProduct),
    map(action => action.payload ),
    switchMap(payload =>
  this._productServices.updateProduct(payload.id, payload)
    .pipe(
      map(product => new UpdateProductSuccess(product))
    ))
  );
  @Effect({dispatch: false})
  updateProductSuccess$ = this._actions$.pipe(
    ofType<UpdateProductSuccess>(EProductAction.UpdateProductSuccess),
    tap(editedProduct => this.router.navigate(['products/' + editedProduct.payload.id]))
  );
  @Effect()
  deleteProduct$ = this._actions$.pipe(
    ofType<RemoveProduct>(EProductAction.RemoveProduct),
    map(action => action.payload),
    switchMap(product =>
    this._productServices.deleteProduct(product.id).pipe(
      map(item => new RemoveProductSuccess(item))
    ))
  );
  @Effect({dispatch: false})
  deleteProductSuccess$ = this._actions$.pipe(
    ofType<AddNewProductSuccess>(EProductAction.AddNewProductSuccess),
    tap(() => this.router.navigate(['products']))
  );
  @Effect()
  addProduct$ = this._actions$.pipe(
    ofType<AddNewProduct>(EProductAction.AddNewProduct),
    map(action => action.payload),
    switchMap(product =>
    this._productServices.createProduct(product).pipe(
      map( newItem => new AddNewProductSuccess(newItem))
    ))
  );
  @Effect({dispatch: false})
  addNewProductSuccess$ = this._actions$.pipe(
    ofType<AddNewProductSuccess>(EProductAction.AddNewProductSuccess),
    tap(() => this.router.navigate(['products']))
  );

  constructor(private _actions$: Actions,
              private _productServices: ProductsService,
              private _store: Store<IAppState>,
              private router: Router) {}

}
