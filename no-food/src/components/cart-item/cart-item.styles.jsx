import styled from "styled-components";

export const CartItemContainer = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 45px;
  margin-top: 5px;
  margin-bottom: 5px;
`;

export const CartItemImage = styled.div`
  width: 50px;
  height: 45px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  border-radius: 3px;
`;

export const CartLabelContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const CartItemName = styled.h5`
  font-family: "Titillium Web", sans-serif;
  color: #1a1a1a;
`;

export const CartItemQuantity = styled.h5`
  font-family: "Titillium Web", sans-serif;
  color: #1a1a1a;
`;
