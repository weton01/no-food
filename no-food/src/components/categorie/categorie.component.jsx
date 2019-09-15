import React from "react";

import {
  CategorieContainer,
  CategorieImage,
  CategorieTitleContainer,
  CategorieTitle
} from "./categorie.styles";

const Categorie = ({ categorie }) => {
  const { titulo, foto } = categorie;

  return (
    <CategorieContainer>
      <CategorieImage imageUrl={foto} />
      <CategorieTitleContainer>
        <CategorieTitle>{titulo}</CategorieTitle>
      </CategorieTitleContainer>
    </CategorieContainer>
  );
};

export default Categorie;
