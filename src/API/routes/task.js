const router = require("express").Router();

const {
  create,
  findAll,
  updateOne,
  deleteOne,
} = require("../controllers/task");

router.get("/get", findAll);
router.post("/create", create);
router.put("/update/:studentId", updateOne);
router.delete("/delete/:studentId", deleteOne);

module.exports = router;
