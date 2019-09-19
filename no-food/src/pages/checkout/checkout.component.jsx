import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import Header from "../../components/header/header.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import CheckoutItemList from "../../components/checkout-items-list/checkout-items-list.component";

import {
  selectCartTotal,
  selectCartItemsCount
} from "../../redux/cart/cart-selectors";

import { CheckoutBodyContainer } from "./checkout.styles";

const Checkout = ({ total, cartItemsCount }) => (
  <>
    <Header>
      <h3>Items no carrinho: {cartItemsCount}</h3>
      <h1 style={{ marginBottom: 10 }}>
        R${" "}
        {parseFloat(total)
          .toFixed(2)
          .replace(".", "*")
          .replace(",", ".")
          .replace("*", ",")}
      </h1>
      <CustomButton btnSecondary>Finalizar Compra</CustomButton>
    </Header>
    <CheckoutBodyContainer>
      <CheckoutItemList />
    </CheckoutBodyContainer>
  </>
);

const mapStateToProps = createStructuredSelector({
  total: selectCartTotal,
  cartItemsCount: selectCartItemsCount
});

export default connect(mapStateToProps)(Checkout);
