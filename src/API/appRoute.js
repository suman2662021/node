const routers = require("express").Router();

const taskApi = require("./routes/task");

routers.use("/apitask", taskApi);

module.exports = routers;
