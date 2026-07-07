import ApiResponse from "../../utils/ApiResponse.js";
import asyncHandler from "../../middlewares/asyncHandler.js";
import healthService from "./health.service.js";

const getHealth = asyncHandler(async (req, res) => {
    const data = healthService.getHealthStatus();

    return ApiResponse.success(
        res,
        200,
        "Health check successful",
        data
    );

});

export default {
    getHealth
};