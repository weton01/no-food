import React from "react";

import Categorie from "../../components/categorie/categorie.component";

import { CategoriesListContainer } from "./categories-list.styles";

const CategoriesList = ({ categoriesList }) => {
  return (
    <CategoriesListContainer>
      {categoriesList.data.map(categorie => (
        <Categorie key={categorie._id} categorie={categorie} />
      ))}
    </CategoriesListContainer>
  );
};

export default CategoriesList;
