const express = require("express");
const app = express();
const authRouter = require("./controllers/authController");
const userRouter = require("./controllers/userController");
const chatRouter = require("./controllers/chatController");
// const cors = require("cors");
// const helmet = require("helmet");

// use AuthController
app.use(express.json());
// app.use(cors());
// app.use(helmet());
app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/chat", chatRouter);

module.exports = app;
