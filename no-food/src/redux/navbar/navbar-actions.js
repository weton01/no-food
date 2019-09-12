import NavbarActionTypes from "./navbar-types";

export const sidebarHidden = () => ({
  type: NavbarActionTypes.SIDEBAR_HIDDEN
});

export const toggleSidebarHidden = () => ({
  type: NavbarActionTypes.TOGGLE_SIDEBAR_HIDDEN
});
