import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;

  & h1 {
    font-size: 45px;
    color: white;
    font-family: "Titillium Web", sans-serif;
  }

  & h3 {
    color: white;
    font-family: "Titillium Web", sans-serif;
  }

  height: 250px;
  background: #f85032; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to bottom,
    #e53935,
    #b71c1c
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to bottom,
    #e53935,
    #b71c1c
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  padding-top: 55px;

  @media (max-width: 768px) {
    height: 200px;
    & h1 {
      font-size: 30px;
    }
  }
`;
