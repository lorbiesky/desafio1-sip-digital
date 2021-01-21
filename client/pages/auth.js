import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/router";
import { useAuth } from "../hooks/auth";

import * as S from "../styles/auth";

function Auth() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const { signin, setError, error, payload } = useAuth();

  const loginRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = () => {
    const data = {
      login,
      password,
    };
    signin(data);
  };

  const handleRegister = () => {
    router.push("/register");
  };

  useEffect(() => {
    if (payload) {
      router.push("/");
    }
  }, [payload]);

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
          <S.SubmitButton onClick={handleSubmit}>
            <S.TextButton>CONFIRMAR</S.TextButton>
          </S.SubmitButton>

          <S.RegisterButton onClick={handleRegister}>
            <S.TextButton>REGISTRAR</S.TextButton>
          </S.RegisterButton>
        </S.AuthButtonDiv>

        <S.ErrorDiv>
          <S.ErrorText>{error || ""}</S.ErrorText>
        </S.ErrorDiv>
      </S.AuthContainer>
    </S.Container>
  );
}

export default Auth;
