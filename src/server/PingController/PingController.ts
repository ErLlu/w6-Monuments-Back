import { type Request, type Response } from "express";
import type PingControllerStructure from "./types";

class PingController implements PingControllerStructure {
  getPong(_req: Request, res: Response) {
    res.status(200).json({ ping: "🏓 pong" });
  }
}

export default PingController;
