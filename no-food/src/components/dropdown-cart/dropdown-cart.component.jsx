import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { createStructuredSelector } from "reselect";

import { DropdownCartContainer, ListContainer } from "./dropdown-cart.styles";

import CartItemsList from "../cart-items-list/cart-items-list.component";
import CustomButton from "../custom-button/custom-button.component";

import { cartHidden } from "../../redux/cart/cart-actions";

const DropdownCart = ({ cartHidden }) => (
  <DropdownCartContainer>
    <ListContainer>
      <CartItemsList />
    </ListContainer>
    <Link to="/checkout">
      <CustomButton onClick={cartHidden}>Carrinho</CustomButton>
    </Link>
  </DropdownCartContainer>
);

const mapDispatchToProps = dispatch => ({
  cartHidden: () => dispatch(cartHidden())
});

const mapStateToProps = createStructuredSelector({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DropdownCart);
