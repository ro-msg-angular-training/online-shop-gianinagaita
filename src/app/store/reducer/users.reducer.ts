import {initialUserState, IUserState} from "../state/user.state";
import {EUserAction, UserAction} from "../action/user.action";

export const userReducers = (
  state = initialUserState,
    action: UserAction
): IUserState => {
  switch (action.type) {
    case EUserAction.GetUsersSuccess: {
      return {
        ...state,
        selectedUser: action.payload
      };
    }
    default:
      return state;
  }
};
