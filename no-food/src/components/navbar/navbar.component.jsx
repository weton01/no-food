import React from "react";

import Logo from "../../assets/images/img-1.png";
import NavbarCartIcon from "../navbar-cart-icon/navbar-cart-icon.component";

import {
  Container,
  NavbarContainer,
  MenuIconContainer,
  NavbarLogoContainer,
  NavbarLogo
} from "./navbar.styles";

const Navbar = () => (
  <Container>
    <NavbarContainer>
      <MenuIconContainer />
      <NavbarLogoContainer>
        <NavbarLogo src={Logo} alt="logo" />
      </NavbarLogoContainer>
      <NavbarCartIcon />
    </NavbarContainer>
  </Container>
);

export default Navbar;
