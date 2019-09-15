import styled from "styled-components";

export const HomeContainer = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  max-height: 100%;
  padding-top: 55px;
  background-size: cover;
  background-position: center;
  background-image: linear-gradient(
      rgba(229, 57, 53, 0.8),
      rgba(183, 28, 28, 0.9)
    ),
    url("https://making-the-web.com/sites/default/files/clipart/136212/images-food-136212-7293094.jpg");
`;

export const LogoContainer = styled.img`
  width: 200px;

  @media (max-width: 768px) {
    width: 150px;
  }
`;

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;
`;

export const ButtonContainer = styled.div`
  display: grid;
  grid-gap: 20px;
`;
