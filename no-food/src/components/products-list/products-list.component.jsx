import React from "react";

import Product from "../product/product.component";

import { ProductsListContainer } from "./products-list.styles";

const ProductsList = ({ productsList }) => {
  return (
    <ProductsListContainer>
      {productsList.data.map(product => (
        <Product key={product._id} product={product} />
      ))}
    </ProductsListContainer>
  );
};

export default ProductsList;
