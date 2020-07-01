import {Injectable} from "@angular/core";
import {Actions, Effect, ofType} from "@ngrx/effects";
import {AuthService} from "../../auth.service";
import {Router} from "@angular/router";
import {EUserAction, GetUser, GetUserSuccess} from "../action/user.action";
import {map, switchMap, tap} from "rxjs/operators";

@Injectable()
export class UserEffects {
  @Effect()
  getUser$ = this._actions$.pipe(
    ofType<GetUser>(EUserAction.GetUsers),
    map(action => action.payload),
    switchMap(payload =>
      this._authService.authenticateUser(payload).pipe(
        map(selectedUser => new GetUserSuccess(selectedUser)
        ))
    ));

  @Effect({dispatch: false})
  getAuthUserSuccess$ = this._actions$.pipe(
    ofType<GetUserSuccess>(EUserAction.GetUsersSuccess),
    tap(
      () => {
        this._router.navigateByUrl('/products');
      }
    )
  );

  constructor(private _authService: AuthService,
              private _actions$: Actions,
              private _router: Router) {
  }
}

