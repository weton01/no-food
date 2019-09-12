import styled from "styled-components";

export const DropdownCartContainer = styled.div`
  position: absolute;
  top: 55px;
  right: 10px;
  background: tomato;
  width: 300px;
  height: 350px;
  z-index: 3;

  @media (max-width: 768px) {
    width: 200px;
    height: 300px;
    right: 0px;
  }
`;
