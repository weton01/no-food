import styled, { css } from "styled-components";

const btnPrimary = css`
  background: #ffd300;
  border: 0px;
  color: rgb(183, 28, 28);

  &:hover {
    opacity: 0.6;
  }
`;

const btnSecondary = css`
  background: transparent;
  border: 1px solid yellow;
  color: yellow;

  &:hover {
    background: lightgray;
    opacity: 0.8;
  }
`;

const getButtonStyles = props => {
  if (props.btnSecondary) return btnSecondary;
  return btnPrimary;
};

export const CustomButtonContainer = styled.button`
  width: 250px;
  height: 35px;
  border-radius: 20px;
  font-family: "Titillium Web", sans-serif;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  user-select: none; /* supported by Chrome and Opera */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */

  ${getButtonStyles}
`;
