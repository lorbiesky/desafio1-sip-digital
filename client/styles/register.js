import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #6272a4;
`;

export const AuthContainer = styled.div`
  padding: 20px;
  display: flex;
  grid-gap: 20px;
  align-items: center;
  border-radius: 20px;
  flex-direction: column;
  justify-content: center;
  background-color: #282a36;
`;

export const AuthTitle = styled.span`
  color: #f8f8f2;
  font-size: 32px;
  text-align: center;
  font-weight: 700;
`;

export const InputDiv = styled.div`
  display: flex;
  grid-gap: 10px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const AuthInput = styled.input`
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

export const AuthButtonDiv = styled.div`
  display: flex;
  grid-gap: 10px;
  align-items: center;
  justify-content: center;
`;

export const SubmitButton = styled.div`
  height: 60px;
  width: 120px;
  display: flex;
  align-items: center;
  border-radius: 10px;
  justify-content: center;
  background-color: #50fa7b;

  :hover {
    cursor: pointer;
    opacity: 0.9;
  }
`;

export const CalcelButton = styled.div`
  height: 60px;
  width: 120px;
  display: flex;
  align-items: center;
  border-radius: 10px;
  justify-content: center;
  background-color: #ff5555;

  :hover {
    cursor: pointer;
    opacity: 0.9;
  }
`;

export const TextButton = styled.span`
  color: #282a36;
  font-size: 14px;
  font-weight: 700;
`;
