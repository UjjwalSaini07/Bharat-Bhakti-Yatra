import APIError from "../utils/ApiError.js";

const globalErrorHandler = (err, req, res, next) => {
  // Log full error stack in development
  if (process.env.NODE_ENV !== "production") {
    console.error("🔥 Error Stack:", err.stack);
  }

  // APIError (custom handled errors)
  if (err instanceof APIError) {
    return res.status(err.statusCode).json({
      success: false,
      error: {
        message: err.message,
        statusCode: err.statusCode,
      },
    });
  }

  // Mongoose validation error
  if (err.name === "ValidationError") {
    return res.status(400).json({
      success: false,
      error: {
        message: `Validation Error: ${err.message}`,
        statusCode: 400,
      },
    });
  }

  // Default: Internal Server Error
  return res.status(500).json({
    success: false,
    error: {
      message: "Internal Server Error",
      details: process.env.NODE_ENV !== "production" ? err.message : undefined,
      statusCode: 500,
    },
  });
};

export default globalErrorHandler;
