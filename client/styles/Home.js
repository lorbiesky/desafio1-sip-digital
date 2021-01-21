import styled, { css } from "styled-components";
import { SCREEN_SIZES } from "../utils/window_sizes";

const dragActive = css`
  border-color: #50fa7b;
`;

const dragReject = css`
  border-color: #ff5555;
`;

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  position: relative;
  flex-direction: row;
`;

export const SideBarContainer = styled.div`
  width: 85px;
  height: 100%;
  display: flex;
  padding: 20px 0px;
  position: relative;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  background-color: #282a36;
`;

export const ContentBarContainer = styled.div`
  width: 100%;
  display: grid;
  overflow-y: scroll;
  justify-content: center;
  background-color: #6272a4;

  @media (min-width: ${SCREEN_SIZES.md}) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (min-width: ${SCREEN_SIZES.lg}) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  @media (min-width: ${SCREEN_SIZES.xlg}) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  }
`;

export const ProductAddContainer = styled.div`
  right: 30px;
  bottom: 30px;
  width: 80px;
  height: 80px;
  position: absolute;
  border-radius: 80px;
  align-items: center;
  justify-content: center;
  background-color: #ff5555;
  display: ${({ darken }) => (darken ? "none" : "flex")};

  :hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

export const LogoutContainer = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;

export const ProductContainer = styled.div`
  width: 250px;
  height: 350px;
  margin: 20px;
  display: flex;
  grid-gap: 10px;
  position: relative;
  align-items: center;
  border-radius: 20px;
  flex-direction: column;
  background-color: white;
  justify-content: center;
`;

export const ProfileBackground = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  background-color: #f8f8f8;
`;

export const ContentOverlay = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
`;

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  opacity: 0.8;
  background-color: black;
  display: ${({ darken }) => (darken ? "flex" : "none")};
`;

export const PopupContainer = styled.div`
  width: 350px;
  height: 500px;
  display: flex;
  grid-gap: 30px;
  position: absolute;
  border-radius: 20px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: white;
`;

export const ExitPopup = styled.div`
  top: 10px;
  right: 10px;
  width: 40px;
  height: 40px;
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;

  :hover {
    cursor: pointer;
    opacity: 0.3;
  }
`;

export const DeleteProduct = styled.div`
  width: 40px;
  height: 40px;
  right: 10px;
  bottom: 10px;
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;

  :hover {
    cursor: pointer;
    opacity: 0.3;
  }
`;
export const EditProduct = styled.div`
  top: 10px;
  right: 10px;
  width: 40px;
  height: 40px;
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;

  :hover {
    cursor: pointer;
    opacity: 0.3;
  }
`;

export const ConfirmButtonPopup = styled.div`
  height: 60px;
  width: 180px;
  display: flex;
  align-items: center;
  border-radius: 20px;
  justify-content: center;
  background-color: #ff5555;

  :hover {
    cursor: pointer;
    opacity: 0.9;
  }
`;

export const ImageUploader = styled.input`
  display: none;
`;

export const CardImage = styled.img`
  width: 150px;
`;

export const CardTitle = styled.span`
  color: #282a36;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
`;

export const CardPrice = styled.span`
  color: #282a36;
  font-size: 28px;
  font-weight: bold;
`;

export const PopupInput = styled.input`
  width: 250px;
  height: 50px;
  padding: 0 20px;
  border-radius: 10px;
  border: 1px solid #282a36;

  :focus {
    outline: none;
    border: 3px solid #ff5555;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  grid-gap: 10px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const TextButton = styled.span`
  color: #282a36;
  font-size: 16px;
  font-weight: bold;
  font-family: sans-serif;
`;
