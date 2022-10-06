const express = require("express");
const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
const User = require("../Database/Models/signupSchema");
// middleware
const isAuthenticated = require("../middlewares/authenticate");
const router = express.Router();
const sendToken = require("../utils/sendToken");


// ______________________signup Page: "/signup"______________________
router.post("/signup", async (req, res) => {
  try {
    // data coming from the frontend
    const { name, email, password, cPassword } = req.body;
    // now create password hash
    if (password !== cPassword)
      return res
        .status(400)
        .json({ ERROR: "Password and Confirm Password do not match" });

    // if password matched then hash the password before saving in the database
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);

    // checking if user is exist
    const existUserEmail = await User.findOne({ email: email });
    if (existUserEmail)
      return res
        .status(422)
        .json({ Message: "Error: Email Already Exist...!, Please Login" });

    const createUser = new User({
      name: name,
      email: email,
      password: hashPassword,
    });
    await createUser.save();
    // console.log(createUser);
    // console.log(createUser);

    // Generate Token
    // const generateToken = jwt.sign(
    //   { createUser_id: createUser._id, email },
    //   process.env.REFRESH_TOKEN_KEY,
    //   {
    //     expiresIn: "2h",
    //   }
    // );
    // console.log(generateToken);
    // save generated token in database
    // createUser.refresh_token = generateToken;
    // await createUser.save();

    // res
    //   .status(200)
    //   // .cookie("token", generateToken, {
    //   //   expiresIn: "10s",
    //   //   httpOnly: true,
    //   // })
    //   .json({
    //     success: true,
    //     message: "Created User Successfully...",
    //     createUser,
    //   });

    // created function becoz me every time repeated the above code for generated token
    sendToken(createUser, 201, res);

    console.log("Register User Successfully...");
  } catch (error) {
    console.log(`ERROR(in--> signup): ${error}`);
  }
});

//______________________login or signin page: "/login"______________________//
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(req.body.password);
    const existUser = await User.findOne({ email: email });
    // console.log("tokenOld:  ", existUser.refresh_token);

    if (!existUser)
      return res.status(400).json({
        message: "Invalid Credientials...!, ",
      });

    // matching password
    const matchPassword = await bcrypt.compare(password, existUser.password);
    if (!matchPassword)
      return res.status(400).json({ message: "Invailid Credientials..." });

    // const userId = existUser.id;
    // const userName = existUser.name;
    // const userEmail = existUser.email;

    // // generate new refreshtoknen
    // const refreshTokenNew = jwt.sign(
    //   { userId, userName, userEmail },
    //   process.env.NEW_REFRESH_TOKEN_KEY,
    //   {
    //     expiresIn: "1d",
    //   }
    // );
    // console.log("RefreshToken : ", refreshTokenNew);
    // // await User.update({ refresh_token: refreshTokenNew }, { id: userId });
    // existUser.refresh_token = refreshTokenNew;
    // await existUser.save();
    // res
    //   .status(200)
    //   .cookie("refreshToken", refreshTokenNew, {
    //     httpOnly: true,
    //     maxAge: 24 * 60 * 60 * 1000,
    //   })
    //   .json({
    //     success: true,
    //     message: "Login Successfully... ",
    //     refreshTokenNew,
    //   });

    sendToken(existUser, 200, res);
    console.log("Login Successfully...");
  } catch (error) {
    console.log(`ERROR(in--> login): ${error}`);
  }
});

// ______________________logout : "/logout"______________________
router.delete("/logout", async (req, res) => {
  try {
    // const refresh_Token = req.cookies.refreshToken;
    // if (!refresh_Token)
    //   return res.status(204).json("Message: refresh_Token Not Found...!");

    // console.log(refresh_Token);
    // finding token in database
    // const user = await User.find({
    //   where: {
    //     refresh_token: refresh_Token,
    //   },
    // });
    // console.log(user);
    // if (!user) {
    //   return res
    //     .status(204)
    //     .json("Message: refresh_Token Not Found in DataBase...!");
    // }
    // console.log(user.refresh_token);

    // user.refresh_token = null;
    // await user.save();
    // const userId = user._id;
    // now delete the token or its mean refresh_Token: null
    // await User.update(
    //   { refreshToken: null },
    //   {
    //     where: {
    //       id: userId,
    //     },
    //   }
    // );

    //and now clear the cookies which is store in browser
    // res.clearCookie("refresh_Token");
    // res.cookie("token", null, {
    //   expires: new Date(Date.now()),
    //   httpOnly: true,
    // });
    res
      .clearCookie("token")
      .status(200)
      .json({ success: true, message: "Logout Successfully..." });
    console.log("Logout Successfully...");
  } catch (error) {
    console.log(`ERROR(in--> logout): ${error}`);
  }
});

//verify user home page
router.get("/user", isAuthenticated, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);

    res.status(200).json({
      message: "True",
      user,
    });

    // const getUser = await User.findAll({
    //   attributes: ["id", "name", "email"],
    // });
    // res.json(getUser);
  } catch (error) {
    console.log(`ERROR(in--> homepage): ${error}`);
  }
});

//  TODOS ROUTER
router.put("/todo", isAuthenticated, async (req, res, next) => {
  try {
    // if isAuthenticated called then this retun req.user in which stored user info
    // console.log(req.user._id);

    const { todo } = req.body;
    // console.log(todo);

    if (!todo || todo === " " || todo === "  ")
      return res.status(400).json({ Message: "Please Fill The Data" });

    const todos = {
      todo: todo,
    };
    // console.log(todos);

    const user = await User.findById(req.user._id);
    if (!user) return res.status(400).json({ message: "Please Login ..." });
    user.todos.unshift(todos);
    await user.save({ validateBeforeSave: false });
    res.status(200).json({
      success: true,
      message: "Todo Created Successfully...",
    });
    console.log("Todo Created...");
  } catch (error) {
    console.log(`Error In TODOS : `, error);
  }
});

// delete todo
router.delete("/todo/:id", isAuthenticated, async (req, res, next) => {
  try {
    // if isAuthenticated called then this retun req.user in which stored user info
    // console.log(req.user._id);
    // req.query.todoId
    const todoId = req.params.id;
    const user = await User.findById(req.user._id);
    if (!user) return res.status(400).json({ message: "Please Login ..." });

    // console.log(todoId.toString());
    // console.log(user.todos);
    const todos = user.todos.filter(
      (todo) => todo._id.toString() !== todoId.toString()
    );
    console.log(todos);

    user.todos = [];
    user.todos.push(todos);
    await user.save({ validateBeforeSave: false });
    res.status(200).json({
      success: true,
      message: "Todo Deleted Successfully...",
      todos: user.todos,
    });
    console.log("Todo deleted...");
  } catch (error) {
    console.log(`Error In TODOS : `, error);
  }
});
module.exports = router;
