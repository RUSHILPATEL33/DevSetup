import jwt from "jsonwebtoken";
import env from "../config/env.js";
import ApiResponse from "../utils/ApiResponse.js";
import { findUserById } from "../modules/auth/auth.repository.js";

const authMiddleware = async (req, res, next) => {
  try {
    // Get Authorization Header
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return ApiResponse.error(
        res,
        401,
        "Access token is required"
      );
    }

    // Extract Token
    const token = authHeader.split(" ")[1];

    // Verify Token
    const decoded = jwt.verify(token, env.JWT_SECRET);

    // Find User
    const user = await findUserById(decoded.id);

    if (!user) {
      return ApiResponse.error(
        res,
        401,
        "User not found"
      );
    }

    // Attach User to Request
    req.user = user;

    next();
  } catch (error) {
    return ApiResponse.error(
      res,
      401,
      "Invalid or expired token"
    );
  }
};

export default authMiddleware;