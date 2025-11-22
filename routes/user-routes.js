const express = require("express");
const userController = require("../controller/habit-controller");

const userRoute = express.Router();

userRoute.get("/", userController.getAllHabits);

userRoute.post("/", userController.createHabit);

userRoute.delete("/", userController.deleteHabit);

module.exports = userRoute;
