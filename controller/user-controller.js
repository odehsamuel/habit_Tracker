const db = require("../connect-database");
const UserModel = require("../model/habits-model");

function getAllUsers(req, res) {
  const habits = new HabitModel().fetchAll();

  return habits;
}

function createUser(req, res) {
  const User = new UserModel(
    req.body.name,
    req.body.description,
    req.body.category,
    req.body.frequency
  );

  User.save();
}

function deleteUser() {
  return new UserModel().remove();
}

module.exports = {
  getAllUsers,
  createUser,
  deleteUser,
};
