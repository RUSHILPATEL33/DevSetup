import express from "express";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import cookieParser from "cookie-parser";
import morgan from "morgan";

import routes from "./routes/index.js";
import notFound from "./middlewares/notFound.js";
import errorHandler from "./middlewares/errorHandler.js";

const app = express();

// Security
app.use(helmet());

// CORS
app.use(cors());

// Body Parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Cookies
app.use(cookieParser());

// Compression
app.use(compression());

// Logger
app.use(morgan("dev"));

// Routes
app.use("/api/v1", routes);

// 404 Handler
app.use(notFound);

// Global Error Handler
app.use(errorHandler);

export default app;