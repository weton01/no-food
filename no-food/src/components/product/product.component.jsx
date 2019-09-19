import React from "react";
import { connect } from "react-redux";

import {
  ProductContainer,
  ProductImageContainer,
  ProductImage,
  ProductBodyContainer,
  ProductPrice,
  ProductTitle
} from "./product.styles";

import CustomButton from "../../components/custom-button/custom-button.component";

import { addItem } from "../../redux/cart/cart-actions";

const Product = ({ product, addItem }) => {
  const { foto, preco, nome, descricao, _id } = product;

  const produto = { foto, nome, _id, preco };

  return (
    <ProductContainer>
      <ProductImageContainer>
        <ProductImage imageUrl={foto}>
          <div>
            <CustomButton onClick={() => addItem(produto)}>
              Adicionar ao Carrinho
            </CustomButton>
          </div>
        </ProductImage>
      </ProductImageContainer>
      <hr />
      <ProductBodyContainer>
        <ProductTitle>{nome}</ProductTitle>
        <ProductPrice>
          R$
          {parseFloat(preco)
            .toFixed(2)
            .replace(".", "*")
            .replace(",", ".")
            .replace("*", ",")}
        </ProductPrice>
        <ProductTitle></ProductTitle>
        <h6>{descricao}</h6>
      </ProductBodyContainer>
    </ProductContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(
  null,
  mapDispatchToProps
)(Product);
