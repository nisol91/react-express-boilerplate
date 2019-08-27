const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Project = new Schema(
  {
    project_name: {
      type: String
    },
    project_date: {
      type: Date
    },
    Project_description: {
      type: String
    }
  },
  {
    collection: "project"
  }
);

module.exports = mongoose.model("Project", Project);
