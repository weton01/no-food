import React from "react";
import { Link } from "react-router-dom";

import { DefaultContainer } from "./default.styles";

import Header from "../../components/header/header.component";
import CustomButton from "../../components/custom-button/custom-button.component";
const Default = () => (
  <>
    <Header>
      <h1> Erro 404 </h1>
      <h1> Página Não Encontrada</h1>
    </Header>

    <DefaultContainer>
      <h2>Caso esteja perdido, volte para o início:</h2>
      <Link to="/">
        <CustomButton>Inicio</CustomButton>
      </Link>
    </DefaultContainer>
  </>
);

export default Default;
