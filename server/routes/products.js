module.exports = (app) => {
  app.route("/product").post();

  app.route("/product").get(app.apis.products.getCard);
};
