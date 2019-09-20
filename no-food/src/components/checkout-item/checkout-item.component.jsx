import React from "react";
import { connect } from "react-redux";

import {
  CheckoutItemContainer,
  CheckoutImageContainer,
  CheckoutImage,
  QuantityItemsContainer,
  IconButton,
  AddItemIcon,
  RemoveItemIcon,
  NameItemContainer,
  NameItem,
  PriceItemContainer,
  RemoveItemButton
} from "./checkout-item.styles";

import {
  removeItem,
  addItem,
  clearItemFromCart
} from "../../redux/cart/cart-actions";

const CheckoutItem = ({ item, removeItem, addItem, clearItemFromCart }) => {
  const { foto, quantity, preco, nome } = item;

  return (
    <CheckoutItemContainer>
      <RemoveItemButton onClick={() => clearItemFromCart(item)} />
      <CheckoutImageContainer>
        <CheckoutImage imageUrl={foto} />
      </CheckoutImageContainer>
      <QuantityItemsContainer>
        <IconButton onClick={() => removeItem(item)}>
          <RemoveItemIcon />
        </IconButton>
        <h5>{quantity}</h5>
        <IconButton>
          <AddItemIcon onClick={() => addItem(item)} />
        </IconButton>
      </QuantityItemsContainer>
      <NameItemContainer>
        <NameItem>{nome}</NameItem>
      </NameItemContainer>
      <PriceItemContainer>
        R${" "}
        {(preco * quantity)
          .toFixed(2)
          .replace(".", "*")
          .replace(",", ".")
          .replace("*", ",")}
      </PriceItemContainer>
    </CheckoutItemContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  removeItem: item => dispatch(removeItem(item)),
  addItem: item => dispatch(addItem(item)),
  clearItemFromCart: item => dispatch(clearItemFromCart(item))
});

export default connect(
  null,
  mapDispatchToProps
)(CheckoutItem);
