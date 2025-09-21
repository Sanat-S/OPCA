const express = require("express");
const cors = require("cors");
const serviceRoute = require("./routes/serviceRoute");
const path = require("path");
const dotenv = require("dotenv");
const initMongoDB = require("./utils/initMongo");
const connectDatabase = require("./utils/connectDB");
const { httpLogger, logger } = require("./utils/logger");

const app = express();

dotenv.config({ path: "config/.env" });

app.use(cors());
app.use(express.json());

app.use("/api", serviceRoute);

app.get("/api/test", (req, res) => res.send("SERVER IS WORKING"));

// // Serve client build
// const clientBuildPath = path.join(__dirname, "client", "dist");
// app.use(express.static(clientBuildPath));

// // Catch-all for client-side routing
// app.get(/^\/(?!api).*/, (req, res) => {
//   res.sendFile(path.join(clientBuildPath, "index.html"));
// });

app.use(httpLogger);

app.use((err, req, res, next) => {
  logger.error(`${req.method} ${req.url} - ${err.message}`);
  next(err);
});

async function server() {
  try {
    const mongoServer = await initMongoDB();

    connectDatabase();

    const PORT = process.env.PORT || 3000;
    const server = app.listen(PORT, () => {
      console.log(`✅ Server is Running on ${PORT}`);
    });

    // Listen for server close
    server.on("close", () => {
      console.log("Server closed unexpectedly");
      if (mongoServer) mongoServer.kill();
    });

    // Optional: handle exit signals
    process.on("SIGINT", () => {
      server.close(() => process.exit(0));
    });
    process.on("SIGTERM", () => {
      server.close(() => process.exit(0));
    });
  } catch (err) {
    console.error("Failed to initialize MongoDB:", err);
  }
}

server();
