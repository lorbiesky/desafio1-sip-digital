import jwt from "jwt-simple";
import bcrypt from "bcrypt-nodejs";
import dotenv from "dotenv";
import User from "../models/User";

dotenv.config();

module.exports = (app) => {
  const { existsOrError, equalsOrError } = app.utils.validator;

  const encryptPassword = (password) => {
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(password, salt);
  };

  const signin = async (req, res) => {
    const { login, password } = req.body;

    try {
      if (!login || !password) {
        return res.status(400).send("Informe o Login e Senha.");
      }

      const user = await User.findOne({ where: { login } });

      if (!user) return res.status(400).send("E-mail ou Senha inválido.");

      const isMatch = bcrypt.compareSync(password, user.password);
      if (!isMatch) return res.status(400).send("Senha inválida.");

      const payload = {
        id: user.id,
        login: user.login,
      };

      return res.json({
        ...payload,
        token: jwt.encode(payload, process.env.LOCAL_AUTH_SECRET),
      });
    } catch (error) {
      console.log(error);
      return res.status(500).send(error);
    }
  };

  const signup = async (req, res) => {
    const { login, password, confirmPassword } = req.body;

    try {
      existsOrError(login, "Login não informado.");
      existsOrError(password, "Senha não informada.");
      existsOrError(confirmPassword, "Confirmação de senha não informada.");
      equalsOrError(password, confirmPassword, "Senhas não conferem.");

      const userFromDB = await User.findOne({ where: { login } });

      if (!userFromDB) {
        await User.create({ login, password: encryptPassword(password) });
        return res.status(200).send("Usuário criado.");
      } else {
        return res.status(400).send("Login já cadastrado.");
      }
    } catch (error) {
      console.log(error);
      return res.status(500).send(error);
    }
  };

  return { signin, signup };
};
