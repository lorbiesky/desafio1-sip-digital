module.exports = (app) => {
  app.route("/signin").post(app.apis.auth.signin);

  app.route("/signup").post(app.apis.auth.signup);
};
