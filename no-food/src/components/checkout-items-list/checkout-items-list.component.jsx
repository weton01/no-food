import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCartItems } from "../../redux/cart/cart-selectors";

import CheckoutItem from "../checkout-item/checkout-item.component";

import { CheckoutItemsListContainer } from "./checkout-items-list.styles";

const CheckoutItemsList = ({ selectCartItems }) => {
  return (
    <CheckoutItemsListContainer>
      {selectCartItems.map(item => (
        <CheckoutItem key={item._id} item={item} />
      ))}
    </CheckoutItemsListContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  selectCartItems: selectCartItems
});

export default connect(mapStateToProps)(CheckoutItemsList);
