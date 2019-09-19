import React from "react";
import { useState, useEffect } from "react";

import Header from "../../components/header/header.component";
import ProductsList from "../../components/products-list/products-list.component";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import HeaderTitle from "../../components/header-title/header-title.component";

import api from "../../services/api";

const HeaderTitleWithSpinner = WithSpinner(HeaderTitle);
const ProductsListWithSpinner = WithSpinner(ProductsList);

const SingleCategorie = ({ match }) => {
  const [nameHeader, setNameHeader] = useState("");
  const [loadingComponents, setLoadingComponents] = useState({
    loadingHeader: true,
    loadingProducts: true
  });
  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    let getNameHeader = async () => {
      try {
        let response = await api.get(`/api/categoria/${match.params.id}`);
        setNameHeader(response.data.titulo);
        setLoadingComponents(values => ({ ...values, loadingHeader: false }));
      } catch (err) {
        console.error(err);
      }
    };

    getNameHeader();
  }, [match]);

  useEffect(() => {
    let getProductsList = async () => {
      try {
        let response = await api.get(`/api/produto/${match.params.id}`);
        setProductsList(response);
        setLoadingComponents(values => ({ ...values, loadingProducts: false }));
      } catch (err) {
        console.error(err);
      }
    };

    getProductsList();
  }, [match]);

  return (
    <>
      <Header>
        <HeaderTitleWithSpinner isLoading={loadingComponents.loadingHeader}>
          {nameHeader}
        </HeaderTitleWithSpinner>
      </Header>

      <ProductsListWithSpinner
        productsList={productsList}
        isLoading={loadingComponents.loadingProducts}
      />
    </>
  );
};

export default SingleCategorie;
