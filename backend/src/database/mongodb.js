import mongoose from "mongoose";
import env from "../config/env.js";
import logger from "../logger/logger.js";

const connectDB = async () => {
    try {
        await mongoose.connect(env.MONGO_URI);

        logger.info("✅ MongoDB Connected Successfully");
    } catch (error) {
        logger.error(`❌ MongoDB Connection Failed: ${error.message}`);

        process.exit(1);
    }
};

export default connectDB;