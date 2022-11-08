const mongoose = require("mongoose");

const studentDetailsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  roll_no: {
    type: Number,
    required: true,
  },
  grade: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Student", studentDetailsSchema);
