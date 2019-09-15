import React, { useState } from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../../components/custom-button/custom-button.component";

import {
  SignInContainer,
  SignInContent,
  Container,
  ButtonContainer
} from "./sign-in.styles";

import api from "../../services/api";

const SignIn = () => {
  const [values, setValues] = useState({
    email: "",
    name: "",
    password: "",
    confirmPassword: "",
    imgUrl: ""
  });

  const handleChange = event => {
    const { name, value } = event.target;

    setValues(values => ({ ...values, [name]: value }));
  };

  const handleSubmit = async event => {
    event.preventDefault();
    let { name, email, password, confirmPassword, imgUrl } = values;
    let newUser = {
      nome: name,
      email: email,
      senha: password,
      senhaConfirmacao: confirmPassword,
      foto: imgUrl,
      ativo: true
    };

    try {
      let response = await api.post("api/usuario/register", newUser);
      setValues({
        email: "",
        name: "",
        password: "",
        confirmPassword: "",
        imgUrl: ""
      });

      console.log(response.data);
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <SignInContainer>
      <Container>
        <SignInContent onSubmit={handleSubmit}>
          <h2>Dados cadastrais</h2>

          <div>
            <FormInput
              type="name"
              name="name"
              label="Nome"
              onChange={handleChange}
              value={values.name}
              required
              secondaryFormInput
            />
            <FormInput
              type="email"
              name="email"
              label="Email"
              onChange={handleChange}
              value={values.email}
              required
              secondaryFormInput
            />
            <FormInput
              type="password"
              name="password"
              label="Senha"
              onChange={handleChange}
              value={values.password}
              required
              secondaryFormInput
            />
            <FormInput
              type="password"
              name="confirmPassword"
              label="Confirmar Senha"
              onChange={handleChange}
              value={values.confirmPassword}
              required
              secondaryFormInput
            />
            <FormInput
              type="string"
              name="imgUrl"
              label="URL da imagem"
              onChange={handleChange}
              value={values.imgUrl}
              required
              secondaryFormInput
            />
          </div>
          <ButtonContainer>
            <CustomButton>Concluir</CustomButton>
          </ButtonContainer>
        </SignInContent>
      </Container>
    </SignInContainer>
  );
};

export default SignIn;
