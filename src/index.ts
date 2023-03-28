import express from "express";
import cors from "cors";
import config from "./config/index";
import connect from "./db";
import createHttpError from "http-errors";
import { errorHandler } from "./middleware/errorHanlder";
import router from "./routes";
const app = express();

app.use(express.json());
app.use(cors())

app.use('/v1', router)
app.use(() => {
  throw createHttpError(404, "Route not found");
});

app.use(errorHandler);
app.listen(config.PORT, () => {
  console.log(`Listening on port ${config.PORT}`);
  connect()
});


