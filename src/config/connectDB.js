const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/nodejstask", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DB connected succesfully");
  } catch (error) {
    console.log(`could not connect to the DB: ${error.message}`);
    console.log(error.message);
  }
};

module.exports = connectDB;
