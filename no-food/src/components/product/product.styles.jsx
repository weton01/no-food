import styled from "styled-components";

export const ProductContainer = styled.div`
  position: relative;
  height: 300px;
  width: 260px;
  border-radius: 5px 5px 3px 3px;
  background: whitesmoke;
  -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  margin: 10px;
`;

export const ProductImageContainer = styled.div`
  width: 100%;
  height: 167px;
  border-radius: 5px 5px 0px 0px;
`;

export const ProductImage = styled.div`
  height: 100%;
  width: 100%;
  border-radius: 5px 5px 0px 0px;
  background-size: cover;
  background-position: center;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};

  & div {
    display: none;
  }

  &:hover {
    background-image: linear-gradient(
        rgba(229, 57, 53, 0.4),
        rgba(183, 28, 28, 0.6)
      ),
      ${({ imageUrl }) => `url(${imageUrl})`};

    & div {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;

      & button {
        width: 200px;
      }
    }
  }
`;

export const ProductBodyContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  height: 133px;
  padding: 5px;

  & h6 {
    font-size: 14px;

    @media (max-width: 768px) {
      font-size: 12 px;
    }
  }
`;

export const ProductPrice = styled.h1`
  font-family: "Eczar", serif;
  font-weight: regular;
  color: #1a1a1a;
  overflow: hidden;
`;

export const ProductTitle = styled.h4`
  width: 100%;
  color: #1a1a1a;
  font-weight: bolder;
  overflow: hidden;
  font-family: "Titillium Web", sans-serif;
`;
