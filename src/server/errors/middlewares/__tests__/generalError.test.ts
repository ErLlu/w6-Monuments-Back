import { type NextFunction, type Request, type Response } from "express";
import { type ServerError } from "../../ServerError/ServerError.js";
import { generalError } from "../errorsMiddlewares.js";

const req = {};
const next = {};
const res: Pick<Response, "status" | "json"> = {
  status: jest.fn().mockReturnThis(),
  json: jest.fn(),
};

describe("Given the generalError middleware", () => {
  describe("When it receives 'hoy salto por la ventana' without status code", () => {
    test("Then it should call the response's status method with 500", () => {
      const error = { message: "hoy salto por la ventana" };
      const expectedStatusCode = 500;

      generalError(
        error as ServerError,
        req as Request,
        res as Response,
        next as NextFunction,
      );

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
    });
  });

  describe("When it receives a method status code 500 without method message", () => {
    test("Then it should call the response's json method with 'hoy salto por la ventana' message", () => {
      const error = { message: "hoy salto por la ventana" };

      generalError(
        error as ServerError,
        req as Request,
        res as Response,
        next as NextFunction,
      );

      expect(res.json).toHaveBeenCalledWith({ error: error.message });
    });

    describe("When it receives a method status code 404 with 'hoy me tiro por la ventana' error", () => {
      test("Then it should call the response's status code method with 404", () => {
        const error = { statusCode: 404 };

        generalError(
          error as ServerError,
          req as Request,
          res as Response,
          next as NextFunction,
        );

        expect(res.status).toHaveBeenCalledWith(error.statusCode);
      });
    });
  });
});
