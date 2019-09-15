import styled from "styled-components";

export const CategoriesListContainer = styled.ul`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  padding: 25px;

  @media (max-width: 768px) {
    padding: 10px;
    padding-top: 20px;
  }
`;
