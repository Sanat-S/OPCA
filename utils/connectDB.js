const mongoose = require("mongoose");
const dotenv = require("dotenv");

//config dotenv
dotenv.config({ path: "config/.env" });

const DB_URI = process.env.DB_URI;

const connectDatabase = () => {
  mongoose.connect(DB_URI).then(async (data) => {
    console.log(`✅ mongodb connected with server: ${data.connection.host}`);
  });
};

module.exports = connectDatabase;
