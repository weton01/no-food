import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCurrentUser } from "../../redux/user/user.selectors";

import {
  LoggedUserContainer,
  ImageContainer,
  Image
} from "./logged-user.styles";

import WithSpinner from "../../components/with-spinner/with-spinner.component";

import api from "../../services/api";

const LoggedUserContainerWithSpinner = WithSpinner(LoggedUserContainer);

const LoggedUser = ({ currentUser }) => {
  const [user, setUser] = useState({ nome: "", email: "", foto: "" });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUser = async () => {
      const { token, usuario } = currentUser;

      try {
        let response = await api.get(`/api/usuario/${usuario._id}`, {
          headers: {
            "x-access-token": token
          }
        });
        setUser({
          nome: response.data.nome,
          email: response.data.email,
          foto: response.data.foto
        });
        setLoading(false);
        console.log("Chegou no logged user");
      } catch (err) {
        console.error(err.response.data);
      }
    };
    loadUser();
  }, [currentUser]);

  return (
    <LoggedUserContainerWithSpinner isLoading={loading}>
      <ImageContainer>
        <Image src={user.foto} alt="foto" />
      </ImageContainer>
      <h1>Bem vindo {user.nome}</h1>
      <h1>{user.email}</h1>
    </LoggedUserContainerWithSpinner>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

export default connect(mapStateToProps)(LoggedUser);
