import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { toggleCartHidden } from "../../redux/cart/cart-actions";
import { selectCartItemsCount } from "../../redux/cart/cart-selectors";

import {
  NavbarCartIconContainer,
  CartIcon,
  CartCount,
  Count
} from "./navbar-cart-icon.styles";

const NavbarCartIcon = ({ toggleCartHidden, itemsCount }) => (
  <NavbarCartIconContainer onClick={toggleCartHidden}>
    <CartIcon />
    <CartCount>
      <Count>{itemsCount}</Count>
    </CartCount>
  </NavbarCartIconContainer>
);

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = createStructuredSelector({
  itemsCount: selectCartItemsCount
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavbarCartIcon);
