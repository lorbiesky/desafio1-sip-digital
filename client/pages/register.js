import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/router";
import { useAuth } from "../hooks/auth";

import * as S from "../styles/register";

function Auth() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const loginRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const { signup, setError, error, payload } = useAuth();
  const router = useRouter();

  const handleSubmit = () => {
    const data = {
      login,
      password,
      confirmPassword,
    };
    signup(data);
  };

  const handleBack = () => {
    router.back();
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
          <S.SubmitButton onClick={handleSubmit}>
            <S.TextButton>CONFIRMAR</S.TextButton>
          </S.SubmitButton>

          <S.CalcelButton onClick={handleBack}>
            <S.TextButton>VOLTAR</S.TextButton>
          </S.CalcelButton>
        </S.AuthButtonDiv>

        <S.ErrorDiv>
          <S.ErrorText>{error || ""}</S.ErrorText>
        </S.ErrorDiv>
      </S.AuthContainer>
    </S.Container>
  );
}

export default Auth;
