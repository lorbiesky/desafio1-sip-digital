import passportJwt from "passport-jwt";
import { decode } from "jwt-simple";
import User from "../models/User";

const { ExtractJwt } = passportJwt;

const params = {
  token: ExtractJwt.fromAuthHeaderAsBearerToken(),
  authSecret: process.env.LOCAL_AUTH_SECRET,
};

module.exports = (app) => {
  const getUserFromHeader = async (req, res, next) => {
    const token = params.token(req);
    try {
      const payload = decode(token, params.authSecret);

      const userDB = await User.findOne({ where: { id: payload.id } });

      if (!userDB) {
        return res
          .status(400)
          .send("Erro ao autenticar o usuário ou token expirado");
      }

      req.user = userDB.dataValues;
      return next();
    } catch (err) {
      console.log(err);
      return res
        .status(400)
        .send("Erro ao autenticar o usuário ou token expirado");
    }
  };
  return { getUserFromHeader };
};
