const { spawn, execSync } = require("child_process");
const fs = require("fs");
const path = require("path");
const net = require("net");

const DB_PATH = path.join(__dirname, "../data/mongo-data");
const MONGO_PORT = process.env.MONGO_PORT || 27017;

function isMongoInstalled() {
  try {
    execSync("mongod --version", { stdio: "ignore" });
    return true;
  } catch {
    return false;
  }
}

// Check if a port is open (MongoDB running)
function isPortOpen(port, host = "127.0.0.1") {
  return new Promise((resolve) => {
    const socket = new net.Socket();
    socket.setTimeout(1000);
    socket.on("connect", () => {
      socket.destroy();
      resolve(true);
    });
    socket.on("timeout", () => { socket.destroy(); resolve(false); });
    socket.on("error", () => { resolve(false); });
    socket.connect(port, host);
  });
}

// Function to initialize MongoDB
async function initMongoDB() {
  if (!isMongoInstalled()) {
    throw new Error("MongoDB is not installed. Please install it first.");
  }

  // Ensure data folder exists
  if (!fs.existsSync(DB_PATH)) fs.mkdirSync(DB_PATH, { recursive: true });

  // Start MongoDB only if not already running
  const alreadyRunning = await isPortOpen(MONGO_PORT);
  let mongoServer;
  if (!alreadyRunning) {
    console.log("Starting local MongoDB...");
    mongoServer = spawn("mongod", ["--dbpath", DB_PATH, "--port", MONGO_PORT], {
      stdio: "inherit",
    });

    mongoServer.on("error", (err) => {
      console.error("Failed to start MongoDB:", err);
      process.exit(1);
    });
  } else {
    console.log("✅ MongoDB already running on port", MONGO_PORT);
  }

  // Wait until MongoDB is ready
  let retries = 0;
  while (!(await isPortOpen(MONGO_PORT))) {
    if (retries > 20) throw new Error("MongoDB failed to start");
    await new Promise((r) => setTimeout(r, 500));
    retries++;
  }

  console.log("✅ MongoDB is ready!");
  return mongoServer; // can be used to kill the process on exit
}

module.exports = initMongoDB;
