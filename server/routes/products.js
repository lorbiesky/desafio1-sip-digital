import multer from "multer";

module.exports = (app) => {
  app.route("/upload/image").post(
    multer(
      app.config.multer.image(
        20 * 1024 * 1024 // 20Mb
      )
    ).single("file"),
    app.middlewares.user.getUserFromHeader,
    app.apis.products.uploadImage
  );

  app
    .route("/products")
    .get(app.middlewares.user.getUserFromHeader, app.apis.products.getCard)
    .put(app.middlewares.user.getUserFromHeader, app.apis.products.updateCard)
    .post(app.middlewares.user.getUserFromHeader, app.apis.products.createCard);

  app
    .route("/products/:id")
    .delete(
      app.middlewares.user.getUserFromHeader,
      app.apis.products.removeCard
    );
};
