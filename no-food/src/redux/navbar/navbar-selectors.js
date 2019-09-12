import { createSelector } from "reselect";

const selectNavbar = state => state.navbar;

export const selectNavbarHidden = createSelector(
  [selectNavbar],
  navbar => navbar.hidden
);
