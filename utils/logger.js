const fs = require("fs");
const path = require("path");
const morgan = require("morgan");
const winston = require("winston");

// ensure log folder exists
const logDir = path.join(__dirname, "../logs");
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir, { recursive: true });
}

// Winston logger
const logger = winston.createLogger({
  level: "info",
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.File({ filename: path.join(logDir, "error.log"), level: "error" }),
    new winston.transports.File({ filename: path.join(logDir, "combined.log") }),
  ],
});

// Morgan middleware (HTTP request logging)
const httpLogger = morgan("combined", {
  stream: fs.createWriteStream(path.join(logDir, "access.log"), { flags: "a" }),
});

module.exports = { logger, httpLogger };
