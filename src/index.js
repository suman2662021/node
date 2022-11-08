const express = require("express");
const connect_DB = require("./config/connectDB.js");
const routes = require("./API/appRoute");
const app = express();
app.use(express.json());
app.use("/api", routes);

const PORT = process.env.PORT || 3000;

connect_DB();

app.listen(PORT, () => {
  console.log(`App is running at ${PORT}`);
});
