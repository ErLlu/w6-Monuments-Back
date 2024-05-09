import chalk from "chalk";
import { type Request, type Response } from "express";
import { type NextFunction } from "express";
import { ServerError } from "../ServerError/ServerError.js";

export const notFoundError = (
  _req: Request,
  _res: Response,
  next: NextFunction,
) => {
  const error = new ServerError("Endpoint not found", 404);

  next(error);
};

export const generalError = (
  error: ServerError,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  const statusCodeError = error.statusCode ?? 500;
  console.log(chalk.red(`error: {error.message}`));
  res.status(statusCodeError).json(`error: ${error.message}`);
};
