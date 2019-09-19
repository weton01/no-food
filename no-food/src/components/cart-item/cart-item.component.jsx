import React from "react";

import {
  CartItemContainer,
  CartItemImage,
  CartItemName,
  CartItemQuantity,
  CartLabelContainer
} from "./cart-item.styles";

const CartItem = ({ item }) => {
  const { foto, quantity, nome } = item;

  return (
    <CartItemContainer>
      <CartItemImage imageUrl={foto} />
      <CartLabelContainer>
        <CartItemName>{nome}</CartItemName>
      </CartLabelContainer>
      <CartLabelContainer>
        <CartItemQuantity>
          {quantity > 9 ? quantity : `0${quantity}`}
        </CartItemQuantity>
      </CartLabelContainer>
    </CartItemContainer>
  );
};

export default CartItem;
