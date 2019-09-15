import { UserActionTypes } from "./user.types";

export const logoutUser = () => ({
  type: UserActionTypes.LOGOUT_USER
});

export const setCurrentUser = user => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user
});
