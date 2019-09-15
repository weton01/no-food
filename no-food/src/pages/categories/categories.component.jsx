import React from "react";
import { useState, useEffect } from "react";

import Header from "../../components/header/header.component";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import CategoriesList from "../../components/categories-list/categories-list.component";

import api from "../../services/api";

const CategoriesListWithSpinner = WithSpinner(CategoriesList);

const Categories = () => {
  const [categoriesList, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCategories = async () => {
      try {
        let response = await api.get("api/categoria/");
        setCategories(response);
      } catch (err) {
        console.error(err);
      }
      setLoading(false);
    };

    getCategories();
  }, []);

  return (
    <div>
      <Header>
        <h1>Categorias</h1>
      </Header>
      <CategoriesListWithSpinner
        isLoading={loading}
        categoriesList={categoriesList}
      />
    </div>
  );
};

export default Categories;
