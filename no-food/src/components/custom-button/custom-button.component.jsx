import React from "react";

import { CustomButtonContainer } from "./custom-button.styles";

const CustomButton = ({ children, btnSecondary }) => (
  <CustomButtonContainer btnSecondary={btnSecondary}>
    {children}
  </CustomButtonContainer>
);

export default CustomButton;
