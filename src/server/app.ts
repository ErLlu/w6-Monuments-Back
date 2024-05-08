import app from "./index.js";
import PingController from "./PingController/PingController";

const pingController = new PingController();

app.get("/", pingController.getPong);

app.use((_req, res) => {
  res.status(404).json({ error: "endpoint not found" });
});
