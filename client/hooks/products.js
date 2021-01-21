import { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../utils/baseurl";

export const useProducts = () => {
  const [imageUrl, setImageUrl] = useState();
  const [response, setResponse] = useState([]);
  const [error, setError] = useState();
  const uploadImage = async (product) => {
    await axios
      .post(`${BASE_URL}/upload/image`, product)
      .then((res) => setImageUrl(res.data))
      .catch((err) => setError(err.response.data));
  };

  const createCard = async (card) => {
    await axios
      .post(`${BASE_URL}/products`, { ...card })
      .then(() => getCards())
      .catch((err) => setError(err));
  };

  const updateCard = async (card) => {
    await axios
      .put(`${BASE_URL}/products`, { ...card })
      .then(() => getCards())
      .catch((err) => setError(err));
  };

  const removeCard = async (id) => {
    await axios
      .delete(`${BASE_URL}/products/${id}`)
      .then(() => getCards())
      .catch((err) => setError(err));
  };

  const getCards = async (user) => {
    await axios
      .get(`${BASE_URL}/products`)
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
