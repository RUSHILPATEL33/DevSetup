import express from "express";

import {
  register,
  login,
} from "./auth.controller.js";

import {
  registerValidation,
  loginValidation,
} from "./auth.validation.js";

import validateRequest from "../../middlewares/validateRequest.js";

const router = express.Router();

router.post(
  "/register",
  registerValidation,
  validateRequest,
  register
);

router.post(
  "/login",
  loginValidation,
  validateRequest,
  login
);

export default router;