import { createUser } from "./auth.service.js";

export const register = async (req, res, next) => {
  try {
    const user = await createUser(req.body);

    res.status(201).json({
      success: true,
      message: "User Registered Successfully",
      data: user,
    });
  } catch (error) {
    next(error);
  }
};