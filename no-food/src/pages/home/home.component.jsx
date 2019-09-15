import React, { useState } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { setCurrentUser } from "../../redux/user/user.actions";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { Link } from "react-router-dom";

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

    try {
      let response = await api.post("/api/usuario/autenticar", user);
      let currentUser = response.data;

      setCurrentUser(currentUser);
    } catch (err) {
      console.error(err.response.data);
    }
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
            <Link to="/signin">
              <CustomButton type="button" btnSecondary>
                Cadastre-se
              </CustomButton>
            </Link>
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
