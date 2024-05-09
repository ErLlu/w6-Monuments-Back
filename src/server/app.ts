import { generalError } from "./errors/middlewares/errorsMiddlewares.js";
import app from "./index.js";
import PingController from "./PingController/PingController";

const pingController = new PingController();

app.get("/", pingController.getPong);

app.use(generalError);
