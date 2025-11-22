const db = require("../connect-database");
const HabitModel = require("../model/habits-model");

function getAllHabits(req, res) {
  const habits = new HabitModel().fetchAll();

  return habits;
}

function createHabit(req, res) {
  const Habit = new HabitModel(
    req.body.name,
    req.body.description,
    req.body.category,
    req.body.frequency
  );

  Habit.save();
}

function deleteHabit() {
  return new HabitModel().remove();
}

module.exports = {
  getAllHabits,
  createHabit,
  deleteHabit,
};
