import { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../utils/baseurl";

export const useProducts = () => {
  const [imageUrl, setImageUrl] = useState();
  const [response, setResponse] = useState([]);
  const [error, setError] = useState();

  const uploadImage = async (product) => {
    const token = await localStorage.getItem("@desafio/token");

    const options = {
      headers: { Authorization: `Bearer ${token}` },
    };

    await axios
      .post(`${BASE_URL}/upload/image`, product, options)
      .then((res) => setImageUrl(res.data))
      .catch((err) => setError(err.response.data));
  };

  const createCard = async (card) => {
    const token = await localStorage.getItem("@desafio/token");

    const options = {
      headers: { Authorization: `Bearer ${token}` },
    };

    await axios
      .post(`${BASE_URL}/products`, { ...card }, options)
      .then(() => getCards())
      .catch((err) => setError(err));
  };

  const updateCard = async (card) => {
    const token = await localStorage.getItem("@desafio/token");

    const options = {
      headers: { Authorization: `Bearer ${token}` },
    };

    await axios
      .put(`${BASE_URL}/products`, { ...card }, options)
      .then(() => getCards())
      .catch((err) => setError(err));
  };

  const removeCard = async (id) => {
    const token = await localStorage.getItem("@desafio/token");

    const options = {
      headers: { Authorization: `Bearer ${token}` },
    };

    await axios
      .delete(`${BASE_URL}/products/${id}`, options)
      .then(() => getCards())
      .catch((err) => setError(err));
  };

  const getCards = async (user) => {
    const token = await localStorage.getItem("@desafio/token");

    const options = {
      headers: { Authorization: `Bearer ${token}` },
    };

    await axios
      .get(`${BASE_URL}/products`, options)
      .then((res) => setResponse(res.data))
      .catch((err) => setError(err.response.data));
  };

  return {
    uploadImage,
    createCard,
    updateCard,
    removeCard,
    getCards,
    error,
    imageUrl,
    response,
  };
};
