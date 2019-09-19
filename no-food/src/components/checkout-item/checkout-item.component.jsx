import React from "react";

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
  PriceItemContainer
} from "./checkout-item.styles";

const CheckoutItem = ({ item }) => {
  const { foto, quantity, preco, nome } = item;

  return (
    <CheckoutItemContainer>
      <CheckoutImageContainer>
        <CheckoutImage imageUrl={foto} />
      </CheckoutImageContainer>
      <QuantityItemsContainer>
        <IconButton>
          <RemoveItemIcon />
        </IconButton>
        <h5>{quantity}</h5>
        <IconButton>
          <AddItemIcon />
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

export default CheckoutItem;
