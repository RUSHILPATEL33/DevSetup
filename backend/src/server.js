import app from "./app.js";
import env from "./config/env.js";
import logger from "./logger/logger.js";
import connectDB from "./database/mongodb.js";

const PORT = env.PORT;

const startServer = async () => {

    await connectDB();

    app.listen(PORT, () => {

        logger.info("=================================");
        logger.info(" DevSetup Doctor Started");
        logger.info(`Environment : ${env.NODE_ENV}`);
        logger.info(`Port        : ${PORT}`);
        logger.info("=================================");

    });

};

startServer();