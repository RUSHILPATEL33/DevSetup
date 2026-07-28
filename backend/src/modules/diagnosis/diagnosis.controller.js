import ApiResponse from "../../utils/ApiResponse.js";

import { scanEnvironmentService } from "./diagnosis.service.js";

export const environmentScan = async (req, res, next) => {
  try {
    const report = await scanEnvironmentService(
    req.body,
    req.user.id,
    req.body.project
);
    return ApiResponse.success(
      res,
      200,
      "Environment Scan Completed",
      result
    );
  } catch (error) {
    next(error);
  }
};