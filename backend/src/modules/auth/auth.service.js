import bcrypt from "bcryptjs";
import AppError from "../../errors/AppError.js";
import { generateToken } from "../../utils/jwt.js";

import {
  findUserByEmail,
  createUser,
} from "./auth.repository.js";

export const registerUser = async (userData) => {
  const { name, email, password } = userData;

  const existingUser = await findUserByEmail(email);

  if (existingUser) {
    throw new AppError("Email already registered", 409);
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  return await createUser({
    name,
    email,
    password: hashedPassword,
  });
};

export const loginUser = async ({ email, password }) => {
  const user = await findUserByEmail(email);

  if (!user) {
    throw new AppError("Invalid email or password", 401);
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    throw new AppError("Invalid email or password", 401);
  }

  const token = generateToken({
    id: user._id,
    role: user.role,
  });

  return {
    token,
    user,
  };
};