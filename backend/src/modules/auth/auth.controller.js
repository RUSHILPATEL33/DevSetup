import {
  registerUser,
  loginUser,
} from "./auth.service.js";

export const register = async (req, res, next) => {
  try {
    const user = await registerUser(req.body);

    res.status(201).json({
      success: true,
      message: "User Registered Successfully",
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

export const login = async (req, res, next) => {
  try {
    const data = await loginUser(req.body);

    res.status(200).json({
      success: true,
      message: "Login Successful",
      data,
    });
  } catch (error) {
    next(error);
  }
};