import {Injectable} from "@angular/core";
import {Actions, Effect, ofType} from "@ngrx/effects";
import {ProductsService} from "../../products.service";
import {Store} from "@ngrx/store";
import {IAppState} from "../state/app.state";
import {Router} from "@angular/router";
import {
  CreateCheckout,
  CreateCheckoutSuccess,
  EShoppingCartActions,
  GetAllShoppingItems
} from "../action/shopping-cart.action";
import {map, switchMap, tap} from "rxjs/operators";
import {OrderService} from "../../order.service";
import {EProductAction, UpdateProductSuccess} from "../action/product.action";

@Injectable()
export class ShoppingCartEffects {
  @Effect()
  checkOut$ = this._actions$.pipe(
    ofType<CreateCheckout>(EShoppingCartActions.CreateCheckout),
    map(action => action.payload),
    switchMap(order =>
      this._orderService.checkOut(order).pipe(
        map(item => new CreateCheckoutSuccess(item))
      )
  )
  );
  @Effect({dispatch: false})
  checkOutSuccess$ = this._actions$.pipe(
    ofType<CreateCheckoutSuccess>(EShoppingCartActions.CreateCheckoutSuccess),
    tap(checkOutProduct => this.router.navigate(['products/']))
  );
  constructor(private _actions$: Actions,
              private _orderService: OrderService,
              private _store: Store<IAppState>,
              private router: Router) {}
}
