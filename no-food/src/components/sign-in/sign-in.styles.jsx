import styled from "styled-components";

export const SignInContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  flex-direction: row;

  & h2 {
    text-align: center;
  }
`;

export const Container = styled.div`
  padding-top: 20px;
  display: flex;
  justify-content: center;
  width: 650px;
  height: 100%;
  background: whitesmoke;
`;

export const SignInContent = styled.form`
  display: grid;
  grid-template-columns: repeat(auto-fill, 310px);
`;

export const ImgContainer = styled.img`
  margin-top: -35px;
  width: 600px;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: url("https://st3.depositphotos.com/6436316/12529/v/950/depositphotos_125298298-stock-illustration-junk-food-retro-style-image.jpg");
  border-radius: 5px;
  margin-right: 35px;
  object-fit: cover;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;
