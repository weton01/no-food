import NavbarActionTypes from "./navbar-types";

const INITIAL_STATE = {
  hidden: true
};

const navbarReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NavbarActionTypes.TOGGLE_SIDEBAR_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };

    case NavbarActionTypes.SIDEBAR_HIDDEN:
      return {
        ...state,
        hidden: true
      };

    default:
      return state;
  }
};

export default navbarReducer;
