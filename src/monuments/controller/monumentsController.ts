import { type Request, type Response } from "express";
import { monuments } from "../data/monuments";

export const monumentsController = {
  getMonuments(_req: Request, res: Response) {
    res.status(200);
    res.json({ monuments });
  },
};

export default monumentsController;
