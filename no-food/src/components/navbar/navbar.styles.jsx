import styled from "styled-components";
import { TiThMenu } from "react-icons/ti";

export const Container = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  width: 100%;
  background: transparent;
  margin-right: 0px;
`;

export const NavbarContainer = styled.nav`
  display: flex;
  flex-direction: row;
  position: relative;
  align-items: center;
  width: 100%;
  max-width: 1280px;
  height: 55px;
  user-select: none; /* supported by Chrome and Opera */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */

  & a {
    text-decoration: none;
  }
`;

export const MenuIconContainer = styled(TiThMenu)`
  display: none;
  color: white;
  width: 55px;
  height: 35px;
  margin-left: 10px;
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex;
  }
`;

export const NavbarLogoContainer = styled.div`
  display: flex;
  width: 150px;
  margin-right: 25px;

  @media (max-width: 768px) {
    justify-content: center;
    width: 100%;
  }
`;

export const NavbarLogo = styled.img`
  height: 40px;
  width: 150px;
  margin-bottom: 4px;

  @media (max-width: 768px) {
    height: 35px;
    width: 125px;
  }
`;

export const NavbarContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin: 0px 20px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavbarContent = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Content = styled.h4`
  color: white;
  margin-right: 25px;
  font-family: "Titillium Web", sans-serif;
  letter-spacing: 3px;
  cursor: pointer;

  &:hover {
    color: yellow;
    transition: 0.6s linear;
  }
`;
