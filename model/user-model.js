const bcrypt = require("bcrypt");
const db = require("../connect-database");

class User {
  constructor(name, email, password, frequency) {
    (this.name = name),
      (this.email = email),
      (this.password = password),
      (this.frequency = frequency);
    if (id) {
      this.id = id;
    }
  }

  async fetchAll() {
    const users = await db.getDb().collection("users").find().toArray();

    return users;
  }

  async getOne() {
    const user = await db.getDb().collection("users").findOne({ _id: this.id });

    return user;
  }

  async save() {
    const hashedPassword = await bcrypt.hash(this.password, 12);
    const user = {
      name: this.name,
      email: this.email,
      password: hashedPassword,
      frequency: this.frequency,
    };

    await db.getDb().collection("users").insertOne(user);
  }

  async update() {
    const user = {};
    await db.getDb().collection("users").updateOne(user);
  }

  async remove() {
    const user = {};
    await db.getDb().collection("users").insertOne(user);
  }
}

module.exports = User;
