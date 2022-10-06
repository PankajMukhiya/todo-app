const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

// config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "./config.env" });
}

// schema create
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  email: {
    type: String,
    trim: true,
    unique: [true, "Email is already presend"],
    required: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  cPassword: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  todos: [
    {
      todo: { type: String, required: true,  },
    },
  ],
});

// Method : JWT Token
userSchema.methods.getJwtToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRE_TIME,
  });
};

// model create
const User = new mongoose.model("user", userSchema);
// exproted model or collection
module.exports = User;
