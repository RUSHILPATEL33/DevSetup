import mongoose from "mongoose";
import env from "../config/env.js";
import logger from "../logger/logger.js";

const connectDB = async () => {
  try {
    await mongoose.connect(env.MONGO_URI);

    logger.info("✅ MongoDB connected successfully.");

    mongoose.connection.on("disconnected", () => {
      logger.warn("⚠️ MongoDB disconnected.");
    });

    mongoose.connection.on("reconnected", () => {
      logger.info("🔄 MongoDB reconnected.");
    });

    mongoose.connection.on("error", (error) => {
      logger.error(`❌ MongoDB Error: ${error.message}`);
    });

  } catch (error) {
    logger.error(`❌ Failed to connect MongoDB: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;