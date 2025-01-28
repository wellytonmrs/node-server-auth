import { ErrorRequestHandler } from "express";
import { INTERNAL_SERVER_ERROR } from "../constants/http";
import { z } from "zod";

const errorHandler: ErrorRequestHandler = (error, req, res, next) => {
  console.log(`PATH: ${req.path} `, error);

  if (error instanceof z.ZodError) {
    return handleZodError(res, error);
  }
  res.status(INTERNAL_SERVER_ERROR).send("Internal Server Error");
  return;
};

export default errorHandler;
