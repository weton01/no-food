import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { selectCurrentUser } from "../../redux/user/user.selectors";
import { logoutUser } from "../../redux/user/user.actions";

import { NavbarUserContent } from "./navbar-user-icon.styles";

import { createStructuredSelector } from "reselect";

const NavbarUserIcon = ({ logoutUser, currentUser, isSidebar }) => {
  return !currentUser ? (
    <Link to="/signin">
      <NavbarUserContent isSidebar={isSidebar}>Registre-se</NavbarUserContent>
    </Link>
  ) : (
    <NavbarUserContent isSidebar={isSidebar} onClick={logoutUser}>
      Sair
    </NavbarUserContent>
  );
};

const mapDispatchToProps = dispatch => ({
  logoutUser: () => dispatch(logoutUser())
});

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavbarUserIcon);
