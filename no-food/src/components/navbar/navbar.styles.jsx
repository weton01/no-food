import styled from "styled-components";
import { TiThMenu } from "react-icons/ti";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background: red;
`;

export const NavbarContainer = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  max-width: 1280px;
  height: 55px;
`;

export const MenuIconContainer = styled(TiThMenu)`
  display: none;
  color: white;
  width: 55px;
  height: 35px;
  margin-left: 10px;

  @media (max-width: 768px) {
    display: flex;
  }
`;

export const NavbarLogoContainer = styled.div`
  display: flex;
  width: 100%;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const NavbarLogo = styled.img`
  height: 40px;
  width: 150px;
  margin-bottom: 4px;

  @media (max-width: 768px) {
    height: 35px;
    width: 125px;
    margin-right: 5px;
  }
`;
