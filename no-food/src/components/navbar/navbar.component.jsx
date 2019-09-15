import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";

import Logo from "../../assets/images/img-1.png";
import NavbarCartIcon from "../navbar-cart-icon/navbar-cart-icon.component";
import DropdownCart from "../dropdown-cart/dropdown-cart.component";
import NavbarUserIcon from "../navbar-user-icon/navbar-user-icon.component";
import { selectCartHidden } from "../../redux/cart/cart-selectors";
import { toggleSidebarHidden } from "../../redux/navbar/navbar-actions";
import { cartHidden } from "../../redux/cart/cart-actions";

import {
  Container,
  NavbarContainer,
  MenuIconContainer,
  NavbarLogoContainer,
  NavbarLogo,
  NavbarContentContainer,
  NavbarContent,
  Content
} from "./navbar.styles";

const Navbar = ({ hidden, dispatch }) => (
  <Container>
    <NavbarContainer>
      <MenuIconContainer
        onClick={() => {
          dispatch(toggleSidebarHidden());
          dispatch(cartHidden());
        }}
      />
      <NavbarLogoContainer>
        <Link to="/">
          <NavbarLogo src={Logo} alt="logo" />
        </Link>
      </NavbarLogoContainer>
      <NavbarContentContainer>
        <NavbarContent>
          <Link to="/">
            <Content>Inicio</Content>
          </Link>
          <Link to="/categories">
            <Content>Categorias</Content>
          </Link>
        </NavbarContent>
        <NavbarContent>
          <NavbarUserIcon></NavbarUserIcon>
        </NavbarContent>
      </NavbarContentContainer>
      <div>
        <NavbarCartIcon />
      </div>
      {!hidden ? <DropdownCart /> : null}
    </NavbarContainer>
  </Container>
);

const mapStateToProps = createStructuredSelector({
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Navbar);
