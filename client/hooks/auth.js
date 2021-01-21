import { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../utils/baseurl";

export const useAuth = () => {
  const [payload, setPayload] = useState();
  const [error, setError] = useState();

  const signin = async ({ login, password }) => {
    await axios
      .post(`${BASE_URL}/signin`, { login, password })
      .then((item) => {
        localStorage.setItem("@desafio/userId", item.data.id);
        localStorage.setItem("@desafio/token", item.data.token);
        setPayload(item.data);
      })
      .catch((err) => setError(err.response.data));
  };

  const signup = async ({ login, password, confirmPassword }) => {
    await axios
      .post(`${BASE_URL}/signup`, { login, password, confirmPassword })
      .then(() => signin({ login, password }))
      .catch((err) => setError(err.response.data));
  };

  return { signin, signup, setError, error, payload };
};
