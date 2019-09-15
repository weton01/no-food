import styled from "styled-components";

export const CategorieContainer = styled.li`
  position: relative;
  width: 200px;
  height: 200px;
  overflow: hidden;
  border-radius: 50%;
  border: 3px solid #ffd300;
  cursor: pointer;
  margin: 10px;

  &:hover {
    opacity: 0.7;
  }

  @media (max-width: 768px) {
    width: 140px;
    height: 140px;
    margin: 5px;
  }
`;

export const CategorieImage = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)),
    ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const CategorieTitleContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const CategorieTitle = styled.h3`
  color: white;
  font-family: "Titillium Web", sans-serif;
`;
