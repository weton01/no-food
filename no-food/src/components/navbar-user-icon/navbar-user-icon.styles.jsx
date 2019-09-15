import styled, { css } from "styled-components";

const navbarUserContentStyle = css`
  font-size: 16px;
`;

const getNavbarUserContentStyle = props => {
  if (!props.isSidebar) return navbarUserContentStyle;
  return null;
};

export const NavbarUserContent = styled.h2`
  color: white;
  margin-right: 25px;
  font-family: "Titillium Web", sans-serif;
  cursor: pointer;
  letter-spacing: 3px;

  ${getNavbarUserContentStyle}

  margin-right: -5px;
  &:hover {
    color: yellow;
    transition: 0.6s linear;
  }
`;
