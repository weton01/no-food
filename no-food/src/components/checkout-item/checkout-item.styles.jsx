import styled from "styled-components";
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoIosRemoveCircleOutline } from "react-icons/io";

export const CheckoutItemContainer = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  background: whitesmoke;
  margin-bottom: 15px;
  border-radius: 5px;
  -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
`;

export const CheckoutImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 138px;
  height: 128px;
  padding: 14px;
`;

export const CheckoutImage = styled.div`
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  width: 110px;
  height: 100%;
  border-radius: 3px;
`;

export const QuantityItemsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 130px;
`;

export const IconButton = styled.div`
  width: 25px;
  height: 35px;
  margin: 10px;
  color: rgb(183, 28, 28);
`;

export const AddItemIcon = styled(IoIosAddCircleOutline)`
  width: 100%;
  height: 100%;
`;

export const RemoveItemIcon = styled(IoIosRemoveCircleOutline)`
  width: 100%;
  height: 100%;
`;

export const NameItemContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 15px;
  width: 260px;
`;

export const NameItem = styled.h4`
  width: 100%;
  word-wrap: break-word;
  text-align: center;
  color: #1a1a1a;
  font-family: "Titillium Web", sans-serif;
`;

export const PriceItemContainer = styled.h4`
  text-align: center;
  width: 175px;
  font-family: "Eczar", serif;
  font-weight: regular;
  color: #1a1a1a;
`;
