const express = require("express");
const habitController = require("../controller/habit-controller");

const habitRoute = express.Router();

habitRoute.get("/", habitController.getAllHabits);

habitRoute.post("/", habitController.createHabit);

habitRoute.delete("/", habitController.deleteHabit);

module.exports = habitRoute;
