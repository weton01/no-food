import React, { useState } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { setCurrentUser } from "../../redux/user/user.actions";
import { selectCurrentUser } from "../../redux/user/user.selectors";

import Icon from "../../assets/icons/icon-1.png";
import CustomButton from "../../components/custom-button/custom-button.component";
import FormInput from "../../components/form-input/form-input.component";
import LoggedUser from "../../components/logged-user/logged-user.component";

import api from "../../services/api";

import {
  HomeContainer,
  LoginContainer,
  LogoContainer,
  ButtonContainer
} from "./home.styles";

const Home = ({ setCurrentUser, currentUser }) => {
  const [values, setValues] = useState({ email: "", password: "" });

  const handleChange = event => {
    const { name, value } = event.target;
    setValues(values => ({ ...values, [name]: value }));
  };

  const handleSubmit = async event => {
    event.preventDefault();
    const user = {
      email: values.email,
      senha: values.password
    };

    let response = await api
      .post("/api/usuario/autenticar", user)
      .catch(error => {
        response = error;
      });

    let currentUser = response.data;

    setCurrentUser(currentUser);
  };

  return (
    <HomeContainer onSubmit={handleSubmit}>
      {!currentUser ? (
        <LoginContainer>
          <LogoContainer src={Icon} alt="icon" />
          <div style={{ width: "300px" }}>
            <FormInput
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              label="Email"
              required
            />
            <FormInput
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              label="Senha"
              required
            />
          </div>
          <ButtonContainer>
            <CustomButton type="submit">Efetuar Login</CustomButton>
            <CustomButton btnSecondary>Cadastre-se</CustomButton>
          </ButtonContainer>
        </LoginContainer>
      ) : (
        <LoggedUser />
      )}
    </HomeContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: item => dispatch(setCurrentUser(item))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
