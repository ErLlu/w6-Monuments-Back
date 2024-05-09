import { type Request, type Response } from "express";
import PingController from "./PingController";

describe("Given a ping controller", () => {
  describe("When it recibes a response", () => {
    const pingController = new PingController();
    const req = {};
    const res: Pick<Response, "status" | "json"> = {
      json: jest.fn(),
      status: jest.fn().mockReturnThis(),
    };

    test("Then it should call the response's json method with 'pong' message", () => {
      const expectedMessagePing = "🏓 pong";

      pingController.getPong(req as Request, res as Response);

      expect(res.json).toHaveBeenCalledWith({ message: expectedMessagePing });
    });

    test("Then it should call the response's status method with 200", () => {
      const expectedStatusCode = 200;

      pingController.getPong(req as Request, res as Response);

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
    });
  });
});
