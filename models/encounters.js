const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const encountersSchema = new Schema({
      driver: { type: String },
      date: { type: Date, default: Date.now },
      location: { type: String },
      rs: { type: String },
      result: { type: String },
      encounterInfo: { type: String },
      encounterState: { type: String },
      encounterCity: { type: String },
      officer: {
        type: Schema.Types.ObjectId,
        ref: "Users"
      }
});

const Encounters = mongoose.model("Encounters", encountersSchema);

module.exports = Encounters;
