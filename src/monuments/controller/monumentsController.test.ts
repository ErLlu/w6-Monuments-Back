import { type Request, type Response } from "express";
import { monuments } from "../data/monuments.js";
import monumentsController from "./monumentsController.js";

const req = {};
const res: Pick<Response, "status" | "json"> = {
  status: jest.fn().mockReturnThis(),
  json: jest.fn(),
};
describe("Given the monumentsController getMonument function", () => {
  describe("When it receives a response with list of monuments without status 200", () => {
    test("Then it should call json method with list of monuments", () => {
      monumentsController.getMonuments(req as Request, res as Response);

      expect(res.json).toHaveBeenCalledWith({ monuments });
    });
  });
  describe("When it receives a response with method status 200 without method json", () => {
    test("Then it should call status method with code 200", () => {
      const expectedStatusCode = 200;

      monumentsController.getMonuments(req as Request, res as Response);

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
    });
  });
});
