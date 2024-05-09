import morgan from "morgan";
import {
  generalError,
  notFoundError,
} from "./errors/middlewares/errorsMiddlewares.js";
import app from "./index.js";
import PingController from "./PingController/PingController.js";

app.use(morgan("dev"));

const pingController = new PingController();

app.get("/", pingController.getPong);

app.use(notFoundError);
app.use(generalError);
