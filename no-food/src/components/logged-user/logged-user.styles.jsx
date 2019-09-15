import styled from "styled-components";

export const LoggedUserContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  user-select: none; /* supported by Chrome and Opera */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */

  & h1 {
    color: white;
    font-family: "Titillium Web", sans-serif;
    text-align: center;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 35px;
`;

export const Image = styled.img`
  width: 250px;
  height: 250px;
  border: 3px solid white;
  border-radius: 3px;
`;
