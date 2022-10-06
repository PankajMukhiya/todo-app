const express = require("express");
const app = express();
const cookiesParser = require("cookie-parser");
const bodyParser = require("body-parser");
const router = require("./Routers/authRouter");
const path = require("path");

// config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "./config.env" });
}
const port = process.env.PORT || 5000;

// cookies parser
app.use(cookiesParser());
//middlewares
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//Database connection
const dbConnect = require("./Database/Db/dbConnection");
dbConnect();
//routing
// home Page:"/", signup Page:"/signup", login Page: "/login", logout Page:"/logout"
app.use(router);

// SEND THE STATIC PATH WHEN THE BUILD OR DEPLOY THE PROJECT
app.use(express.static(path.join(__dirname, "../frontend/build")));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
});

// listen
app.listen(port, () => {
  console.log(`Server is running on: http://localhost:${port}`);
});
