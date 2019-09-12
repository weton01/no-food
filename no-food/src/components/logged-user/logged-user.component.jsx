import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCurrentUser } from "../../redux/user/user.selectors";

import { LoggedUserContainer } from "./logged-user.styles";

import api from "../../services/api";

const LoggedUser = ({ currentUser }) => {
  const [user, setUser] = useState({ nome: "", email: "", foto: "" });

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
      } catch (err) {
        console.error(err.response.data);
      }
    };
    loadUser();
  });

  return (
    <LoggedUserContainer>
      <h1>Bem vindo {user.nome}</h1>
      <h1>{user.email}</h1>
    </LoggedUserContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

export default connect(mapStateToProps)(LoggedUser);
