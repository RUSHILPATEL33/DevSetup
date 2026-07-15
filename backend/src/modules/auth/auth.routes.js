import express from "express";
import authMiddleware from "../../middlewares/auth.middleware.js";
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
router.get("/test", authMiddleware, (req, res) => {
  res.status(200).json({
    success: true,
    message: "Protected Route",
    user: req.user,
  });
});

export default router;