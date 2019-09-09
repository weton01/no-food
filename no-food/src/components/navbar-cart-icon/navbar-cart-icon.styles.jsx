import styled from "styled-components";
import { IoMdCart } from "react-icons/io";

export const NavbarCartIconContainer = styled.div`
  position: relative;
  color: white;
  width: 55px;
  height: 35px;
  margin-right: 10px;
  margin-top: 5px;
  cursor: pointer;
`;

export const CartIcon = styled(IoMdCart)`
  position: absolute;
  width: 55px;
  height: 35px;
`;

export const CartCount = styled.div`
  position: absolute;
  display: flex;
  align-content: center;
  justify-items: center;
  border-radius: 50%;
  background: white;
  height: 15px;
  width: 15px;
  z-index: 1;
  right: 2px;
  top: -7px;
`;

export const Count = styled.h6`
  position: absolute;
  top: -24.5px;
  right: 1px;
  z-index: 2;
  color: black;
`;
