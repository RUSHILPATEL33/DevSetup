import winston from "winston";

const isDevelopment = process.env.NODE_ENV !== "production";

const consoleFormat = winston.format.combine(
    winston.format.colorize(),
    winston.format.timestamp({
        format: "YYYY-MM-DD HH:mm:ss"
    }),
    winston.format.printf(({ timestamp, level, message }) => {
        return `[${timestamp}] ${level}: ${message}`;
    })
);

const fileFormat = winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
);

const logger = winston.createLogger({
    level: "info",

    transports: [

        new winston.transports.Console({
            format: consoleFormat
        }),

        new winston.transports.File({
            filename: "logs/error.log",
            level: "error",
            format: fileFormat
        }),

        new winston.transports.File({
            filename: "logs/combined.log",
            format: fileFormat
        })

    ],

    exceptionHandlers: [
        new winston.transports.File({
            filename: "logs/exceptions.log"
        })
    ],

    rejectionHandlers: [
        new winston.transports.File({
            filename: "logs/rejections.log"
        })
    ]

});

export default logger;