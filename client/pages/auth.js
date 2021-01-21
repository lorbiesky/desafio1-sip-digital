import React, { useState, useRef } from "react";
import * as S from "../styles/auth";

function Auth() {
  const [login, setLogin] = useState("");
  const [pasword, setPassword] = useState("");

  const loginRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = () => {};

  const handleRegister = () => {};

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
                handleSubmit();
              }
            }}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </S.InputDiv>

        <S.AuthButtonDiv>
          <S.SubmitButton>
            <S.TextButton onClick={handleSubmit}>CONFIRMAR</S.TextButton>
          </S.SubmitButton>

          <S.RegisterButton>
            <S.TextButton onClick={handleRegister}>REGISTRAR</S.TextButton>
          </S.RegisterButton>
        </S.AuthButtonDiv>
      </S.AuthContainer>
    </S.Container>
  );
}

export default Auth;
