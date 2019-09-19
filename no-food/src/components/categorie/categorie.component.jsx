import React from "react";
import { Link } from "react-router-dom";

import {
  CategorieContainer,
  CategorieImage,
  CategorieTitleContainer,
  CategorieTitle
} from "./categorie.styles";

const Categorie = ({ categorie }) => {
  const { titulo, foto, _id } = categorie;

  return (
    <Link to={`/categories/${_id}`}>
      <CategorieContainer>
        <CategorieImage imageUrl={foto} />
        <CategorieTitleContainer>
          <CategorieTitle>{titulo}</CategorieTitle>
        </CategorieTitleContainer>
      </CategorieContainer>
    </Link>
  );
};

export default Categorie;
