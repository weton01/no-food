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
  font-family: "Titillium Web", sans-serif;
  cursor: pointer;
  letter-spacing: 3px;

  ${getNavbarUserContentStyle}

  &:hover {
    color: yellow;
    transition: 0.6s linear;
  }
`;
