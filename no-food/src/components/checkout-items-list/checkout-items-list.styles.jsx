import styled from "styled-components";

export const CheckoutItemsListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 728px;
  height: 100%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;
