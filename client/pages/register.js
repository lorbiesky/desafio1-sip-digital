import React, { useState, useRef } from "react";
import * as S from "../styles/register";

function Auth() {
  const [login, setLogin] = useState("");
  const [pasword, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const loginRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const handleSubmit = () => {};

  const handleBack = () => {};

  return (
    <S.Container>
      <S.AuthContainer>
        <S.AuthTitle>Login</S.AuthTitle>

        <S.InputDiv>
          <S.AuthInput
            type="text"
            placeholder="Usuário"
            ref={loginRef}
            onKeyPress={(event) => {
              if (event.key === "Enter") {
                passwordRef.current.focus();
              }
            }}
            onChange={(e) => {
              setLogin(e.target.value);
            }}
          />

          <S.AuthInput
            type="password"
            placeholder="Senha"
            ref={passwordRef}
            onKeyPress={(event) => {
              if (event.key === "Enter") {
                confirmPasswordRef.current.focus();
              }
            }}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />

          <S.AuthInput
            type="password"
            placeholder="Confirmação de senha"
            ref={confirmPasswordRef}
            onKeyPress={(event) => {
              if (event.key === "Enter") {
                handleRegister();
              }
            }}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
          />
        </S.InputDiv>

        <S.AuthButtonDiv>
          <S.SubmitButton>
            <S.TextButton onClick={handleSubmit}>CONFIRMAR</S.TextButton>
          </S.SubmitButton>

          <S.CalcelButton>
            <S.TextButton onClick={handleBack}>VOLTAR</S.TextButton>
          </S.CalcelButton>
        </S.AuthButtonDiv>
      </S.AuthContainer>
    </S.Container>
  );
}

export default Auth;
