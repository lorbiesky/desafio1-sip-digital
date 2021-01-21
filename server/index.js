import express from "express";
import cors from "cors";
import consign from "consign";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import morgan from "morgan";

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(morgan("dev"));

dotenv.config();

consign()
  .then("./config")
  .then("./middlewares")
  .then("./database")
  .then("./utils")
  .then("./apis")
  .then("./routes")
  .into(app);

app.listen(process.env.APP_PORT, () => {
  console.log("Server Running...");
});
