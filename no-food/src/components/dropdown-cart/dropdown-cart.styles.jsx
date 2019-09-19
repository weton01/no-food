import styled from "styled-components";

export const DropdownCartContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border: 5px solid #ffd300;
  border-radius: 3px;
  top: 55px;
  right: 10px;
  width: 300px;
  height: 350px;
  background: white;
  padding: 10px;
  z-index: 5;

  @media (max-width: 768px) {
    width: 280px;
    height: calc(300px);

    right: 0px;
  }
`;

export const ListContainer = styled.div`
  height: 85%;
  width: 100%;
  overflow-y: scroll;
  overflow-x: hidden;

  @media (max-width: 768px) {
    height: 90%;
  }
`;
