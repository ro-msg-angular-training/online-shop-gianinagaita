import {UserModel} from "../../model/user.model";

export interface IUserState {
  users: UserModel[];
  selectedUser: UserModel;
}
  export const initialUserState: IUserState = {
  users: null,
  selectedUser: null
};
