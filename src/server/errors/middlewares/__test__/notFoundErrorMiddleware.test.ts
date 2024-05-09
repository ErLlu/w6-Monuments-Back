import { type Request, type Response, type NextFunction } from "express";
import { ServerError } from "../../ServerError/ServerError.js";
import { notFoundError } from "../errorsMiddlewares.js";

describe("Given the notFoundError middleware", () => {
  describe("When it recives a next function", () => {
    test.only("Then it should call next function with an error with message 'Endpont not found' and statusCode 404 ", () => {
      const req = {};
      const res = {};
      const next: NextFunction = jest.fn();
      const error: ServerError = new ServerError("Endpoint not found", 400);

      notFoundError(req as Request, res as Response, next);

      expect(next).toHaveBeenCalledWith(error);
    });
  });
});
