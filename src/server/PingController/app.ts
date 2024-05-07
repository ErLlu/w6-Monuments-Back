import express from "express";
import pingController from "./PingController.js";
import { generalError } from "../errorsMiddleweres.js";

export const app = express();

app.get("/", pingController);

app.use((_req, res) => {
  res.status(404).json({ error: "endpoint not found" });
});
