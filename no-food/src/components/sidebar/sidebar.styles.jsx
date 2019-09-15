import styled from "styled-components";
import { IoMdClose } from "react-icons/io";

export const SidebarContainer = styled.div`
  display: none;
  position: absolute;
  width: 100%;
  height: calc(100% + 56px);
  color: white;
  user-select: none; /* supported by Chrome and Opera */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  z-index: 3;
  background: #f85032; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to bottom,
    #e53935,
    #b71c1c
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to bottom,
    #e53935,
    #b71c1c
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  @media (max-width: 768px) {
    display: block;
    flex-direction: column;
    align-items: flex-start;
    text-align: center;
  }
`;

export const CloseButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

export const CloseButton = styled(IoMdClose)`
  margin-top: 10px;
  margin-right: 10px;
  margin-bottom: 10px;
  width: 35px;
  height: 35px;
  cursor: pointer;

  &:hover {
    color: yellow;
    transition: 0.6s linear;
  }
`;

export const SidebarContent = styled.h2`
  font-family: "Titillium Web", sans-serif;
  letter-spacing: 3px;
  cursor: pointer;
  margin-bottom: 10px;
  color: white;
  &:hover {
    color: yellow;
    transition: 0.6s linear;
  }
`;
