import Product from "../models/Product";

module.exports = (app) => {
  const { existsOrError } = app.utils.validator;

  const uploadImage = async (req, res) => {
    const { location: urlImage } = req.file;
    try {
      return res.status(200).send(urlImage);
    } catch (error) {
      console.log(error);
      return res.status(500).send(error);
    }
  };

  const createCard = async (req, res) => {
    const card = req.body;
    try {
      existsOrError(card.name, "Nome não informado.");
      existsOrError(card.price, "Preço não informada.");
      existsOrError(card.image_path, "Imagem não anexada.");

      await Product.create({
        name: card.name,
        price: card.price,
        image_path: card.image_path,
      });

      return res.status(200).send("Produto registrado com sucesso!");
    } catch (error) {
      console.log(error);
      return res.status(500).send(error);
    }
  };

  const updateCard = async (req, res) => {
    const card = req.body;
    try {
      await Product.update({ ...card }, { where: { id: card.id } });
      return res.status(200).send("Card atualizado com sucesso.");
    } catch (error) {
      console.log(error);
      return res.status(500).send(error);
    }
  };

  const getCard = async (req, res) => {
    try {
      const products = await Product.findAll();
      return res.status(200).send(products);
    } catch (error) {
      console.log(error);
      return res.status(500).send(error);
    }
  };

  const removeCard = async (req, res) => {
    const { id } = req.params;
    try {
      if (id) {
        await Product.destroy({ where: { id } });
      }
      return res.status(200).send("Produto Removido com sucesso.");
    } catch (error) {
      console.log(error);
      return res.status(500).send(error);
    }
  };

  return { createCard, uploadImage, updateCard, getCard, removeCard };
};
