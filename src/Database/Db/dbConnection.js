const mongoose = require("mongoose");

// config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "./config.env" });
}

const dbUrl = process.env.DATA_BASE_URL;
const dbConnect = async () => {
  try {
    const res = await mongoose.connect(dbUrl);
    console.log("Database Connection Successfully with : ", res.connection.host);
  } catch (error) {
    console.log(`ERROR(in-->connectionDatabaese): ${error}`);
  }
};

module.exports = dbConnect;
