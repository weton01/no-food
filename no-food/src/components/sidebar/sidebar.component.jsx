import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { toggleSidebarHidden } from "../../redux/navbar/navbar-actions";
import { selectNavbarHidden } from "../../redux/navbar/navbar-selectors";
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
        <SidebarContent>Home</SidebarContent>
        <SidebarContent>Categorias</SidebarContent>
        <SidebarContent>Registro</SidebarContent>
      </div>
    </SidebarContainer>
  ) : null;
};

const mapDispatchToProps = dispatch => ({
  toggleSidebarHidden: item => dispatch(toggleSidebarHidden())
});

const mapStateToProps = createStructuredSelector({
  hidden: selectNavbarHidden
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);
