import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Link } from "react-router-dom";

import { toggleSidebarHidden } from "../../redux/navbar/navbar-actions";
import { selectNavbarHidden } from "../../redux/navbar/navbar-selectors";
import NavbarUserIcon from "../navbar-user-icon/navbar-user-icon.component";

import {
  SidebarContainer,
  SidebarContent,
  CloseButton,
  CloseButtonContainer
} from "./sidebar.styles";

const Sidebar = ({ hidden, toggleSidebarHidden }) => {
  return !hidden ? (
    <SidebarContainer>
      <div>
        <CloseButtonContainer>
          <CloseButton onClick={toggleSidebarHidden} />
        </CloseButtonContainer>
        <Link to="/">
          <SidebarContent onClick={toggleSidebarHidden}>Home</SidebarContent>
        </Link>
        <Link to="/categories">
          <SidebarContent onClick={toggleSidebarHidden}>
            Categorias
          </SidebarContent>
        </Link>
        <div onClick={toggleSidebarHidden}>
          <NavbarUserIcon isSidebar />
        </div>
      </div>
    </SidebarContainer>
  ) : null;
};

const mapDispatchToProps = dispatch => ({
  toggleSidebarHidden: item => dispatch(toggleSidebarHidden(item))
});

const mapStateToProps = createStructuredSelector({
  hidden: selectNavbarHidden
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);
