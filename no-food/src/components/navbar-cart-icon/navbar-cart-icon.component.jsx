import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { toggleCartHidden } from "../../redux/cart/cart-actions";
import { sidebarHidden } from "../../redux/navbar/navbar-actions";

import { selectCartItemsCount } from "../../redux/cart/cart-selectors";

import {
  NavbarCartIconContainer,
  CartIcon,
  Count
} from "./navbar-cart-icon.styles";

const NavbarCartIcon = ({ itemsCount, dispatch }) => (
  <NavbarCartIconContainer
    onClick={() => {
      dispatch(toggleCartHidden());
      dispatch(sidebarHidden());
    }}
  >
    <CartIcon />
    <Count>{itemsCount < 10 ? `0${itemsCount}` : itemsCount}</Count>
  </NavbarCartIconContainer>
);

const mapStateToProps = createStructuredSelector({
  itemsCount: selectCartItemsCount
});

export default connect(mapStateToProps)(NavbarCartIcon);
