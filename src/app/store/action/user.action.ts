import {Action} from "@ngrx/store";
import {UserModel} from "../../model/user.model";

export enum EUserAction {
  GetUsers = '[User] Get Users',
  GetUsersSuccess = '[User] Get User Success'
}
export class GetUser implements Action {
  public readonly type = EUserAction.GetUsers;
  constructor(public payload: UserModel) {}
}
export class GetUserSuccess implements Action {
  public readonly type = EUserAction.GetUsersSuccess;
  constructor(public payload: UserModel) {}
}
export type UserAction = GetUser | GetUserSuccess;
