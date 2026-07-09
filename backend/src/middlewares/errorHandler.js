import ApiResponse from "../utils/ApiResponse.js";

const errorHandler = (err, req, res, next) => {

    console.error(err);

    return ApiResponse.error(
        res,
        err.statusCode || 500,
        err.message || "Internal Server Error"
    );

};

export default errorHandler;