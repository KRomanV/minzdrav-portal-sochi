import { State } from "../types/state";
import { Actions } from "../types/Action";

export const userReducer = (
  state: State['user'] = null,
  action: Actions
): State['user'] => {
  switch (action.type) {
    case "CREATE_USER":
      console.log('REDUCER',action.payload)
      return action.payload;
    case "LOGIN_USER":
      return action.payload;
    case "LOGOUT_USER":
      return null;
    case "UPDATE_USER":   // обновления записей 
      return action.payload
    default:
      return state;
  }
};
