import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { CartItemsListContainer } from "./cart-items-list.styles";

import { selectCartItems } from "../../redux/cart/cart-selectors";

import CartItem from "../cart-item/cart-item.component";

const CartItemsList = ({ cartItems }) => {
  return (
    <CartItemsListContainer>
      {cartItems.map(item => (
        <CartItem key={item._id || item.id} item={item} />
      ))}
    </CartItemsListContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default connect(mapStateToProps)(CartItemsList);
