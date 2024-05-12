import express from "express";
import monumentsController from "../controller/monumentsController.js";

const monumentsRouter = express.Router();

monumentsRouter.get("/", monumentsController.getMonuments);

export default monumentsRouter;
