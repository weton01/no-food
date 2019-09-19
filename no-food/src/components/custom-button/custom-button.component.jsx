import React from "react";

import { CustomButtonContainer } from "./custom-button.styles";

const CustomButton = ({ children, btnSecondary, ...props }) => (
  <CustomButtonContainer btnSecondary={btnSecondary} {...props}>
    {children}
  </CustomButtonContainer>
);

export default CustomButton;
