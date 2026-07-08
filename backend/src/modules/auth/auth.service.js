import User from "./auth.model.js";
import bcrypt from "bcryptjs";

export const createUser = async (userData) => {
  const { password, ...rest } = userData;

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    ...rest,
    password: hashedPassword,
  });

  return user;
};