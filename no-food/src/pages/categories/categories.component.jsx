import React from "react";
import { connect } from "react-redux";
import { useState, useEffect } from "react";
import { createStructuredSelector } from "reselect";

import { selectCurrentUser } from "../../redux/user/user.selectors";

import Header from "../../components/header/header.component";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import CategoriesList from "../../components/categories-list/categories-list.component";

import api from "../../services/api";

const CategoriesListWithSpinner = WithSpinner(CategoriesList);

const Categories = ({ currentUser }) => {
  const [categoriesList, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCategories = async () => {
      try {
        let response = api.get("api/categoria/", {
          headers: { "x-access-token": currentUser.token }
        });

        setCategories(response);
        setLoading(false);
      } catch (err) {
        console.error(err);
      }
    };

    getCategories();
  }, []);

  return (
    <div>
      <Header>
        <h1>Categorias</h1>
      </Header>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

export default connect(mapStateToProps)(Categories);
