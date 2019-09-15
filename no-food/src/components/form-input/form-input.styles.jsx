import styled, { css } from "styled-components";

const subColor = "white";
const mainColor = "white";
const secondaryColor = "black";
const secondarySubColor = "black";

const shrinkLabelStyles = css`
  top: -12px;
  font-size: 12px;
  color: ${mainColor};
`;

const secondShrinkLabelStyles = css`
  top: -12px;
  font-size: 12px;
  color: ${secondaryColor};
`;

const formInputContainer = css`
  color: ${subColor};
  border-bottom: 1px solid ${subColor};
`;

const secondaryFormInputContainer = css`
  color: ${secondarySubColor};
  border-bottom: 1px solid ${secondarySubColor};
`;

const formInput = css`
  color: ${subColor};
`;

const secondaryFormInputs = css`
  color: ${secondarySubColor};
`;

export const GroupContainer = styled.div`
  position: relative;
  margin: 45px 0;

  input[type="password"] {
    letter-spacing: 0.3em;
  }
`;

const getFormInputLabelStyles = props => {
  if (props.secondaryFormInput) return secondShrinkLabelStyles;
  return shrinkLabelStyles;
};

const getFormInputContainerStyles = props => {
  if (props.secondaryFormInput) return secondaryFormInputContainer;
  return formInputContainer;
};

const getFormInputStyles = props => {
  if (props.secondaryFormInput) return secondaryFormInputs;
  return formInput;
};

export const FormInputContainer = styled.input`
  background: none;
  background-color: transparent;
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  margin: 25px 0;

  ${getFormInputContainerStyles}

  &:focus {
    outline: none;
  }

  &:focus ~ label {
    ${getFormInputLabelStyles}
  }
`;

export const FormInputLabel = styled.label`
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;
  ${getFormInputStyles}

  &.shrink {
    ${getFormInputLabelStyles}
  }
`;
