import morgan from "morgan";
import {
  generalError,
  notFoundError,
} from "./errors/middlewares/errorsMiddlewares.js";
import app from "./index.js";
import PingController from "./PingController/PingController.js";
import monumentsRouter from "../monuments/router/monumentsRouter.js";

app.use(morgan("dev"));

const pingController = new PingController();

app.get("/", pingController.getPong);

app.get("/monuments", monumentsRouter);

app.use(notFoundError);
app.use(generalError);
