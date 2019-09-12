import styled from "styled-components";
import { IoMdCart } from "react-icons/io";

export const NavbarCartIconContainer = styled.div`
  position: relative;
  color: white;
  width: 55px;
  height: 35px;

  cursor: pointer;
`;

export const CartIcon = styled(IoMdCart)`
  position: absolute;
  width: 55px;
  height: 35px;
`;

export const Count = styled.h6`
  position: absolute;
  top: 7px;
  right: 20px;
  z-index: 2;
  color: black;
  user-select: none; /* supported by Chrome and Opera */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */

  @media (max-width: 768px) {
    top: 5px;
  }
`;
