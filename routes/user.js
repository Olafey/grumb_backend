const express = require("express");
const userRouter = express.Router();

userRouter.post("/", (req, res) => {});
userRouter.get("/", (req, res) => {
  res.json({
    message: "Get User",
  });
});

module.exports = userRouter;
