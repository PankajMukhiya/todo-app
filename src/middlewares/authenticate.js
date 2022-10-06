const jwt = require("jsonwebtoken");
const User = require("../Database/Models/signupSchema");

const isAuthenticated = async (req, res, next) => {
  const { token } = req.cookies; // here token becoz in cookies generated token stored in token
  if (!token) {
    // return next(new Error("Token Not Found"));
    return res
      .status(401)
      .json({ success: false, message: "Token Not Found ! , Please Login" });
  }
  const decodeData = jwt.verify(token, process.env.JWT_SECRET_KEY);
  // console.log(decodeData);

  req.user = await User.findById(decodeData.id);
  console.log("isAuthenticated TRUE");
  // console.log(req.user);
  next();
};
module.exports = isAuthenticated;
