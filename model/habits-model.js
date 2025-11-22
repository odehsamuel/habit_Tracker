const db = require("../connect-database");

class Habit {
  constructor(name, description, category, frequency) {
    (this.name = name),
      (this.description = description),
      (this.category = category),
      (this.frequency = frequency);
    if (id) {
      this.id = id;
    }
  }

  async fetchAll() {
    const habits = await db.getDb().collection("habit").find().toArray();

    return habits;
  }

  async getOne() {
    const habit = await db
      .getDb()
      .collection("habit")
      .findOne({ _id: this.id });

    return habit;
  }

  async save() {
    const habit = {
      name: this.name,
      category: this.category,
      description: this.description,
      frequency: this.frequency,
    };

    await db.getDb().collection("habit").insertOne(habit);
  }

  async remove() {
    const habit = {};
    await db.getDb().collection("habit").insertOne(habit);
  }
}

module.exports = Habit;
