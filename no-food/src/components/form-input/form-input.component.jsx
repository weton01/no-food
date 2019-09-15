import React from "react";

import {
  GroupContainer,
  FormInputContainer,
  FormInputLabel
} from "./form-input.styles";

const FormInput = ({ handleChange, label, secondaryFormInput, ...props }) => (
  <GroupContainer>
    <FormInputContainer
      onChange={handleChange}
      secondaryFormInput={secondaryFormInput}
      {...props}
    />
    {label ? (
      <FormInputLabel
        className={props.value.length ? "shrink" : ""}
        secondaryFormInput={secondaryFormInput}
      >
        {label}
      </FormInputLabel>
    ) : null}
  </GroupContainer>
);

export default FormInput;
