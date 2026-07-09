import { validationResult } from "express-validator";
import AppError from "../errors/AppError.js";

const validateRequest = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const message = errors.array()[0].msg;

    return next(new AppError(message, 400));
  }

  next();
};

export default validateRequest;