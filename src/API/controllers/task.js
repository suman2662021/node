const Student = require("../../models/task");

exports.findAll = async (req, res) => {
  try {
    const students = await Student.find();

    if (!students) {
      return res
        .status(400)
        .send("student data does not exists in the database");
    }

    return res.status(200).json({ students });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

exports.create = async (req, res) => {
  try {
    const { name, roll_no, grade } = req.body;

    // Validate request
    if (!name || !roll_no || !grade) {
      res.status(400).json({ message: "Fill all fields properly" });
    }
    // post the data
    const newstudent = new Student({
      name: name,
      roll_no: roll_no,
      grade: grade,
    });

    // Save student data in the database
    const data = await newstudent.save();
    return res.status(200).json({ data });
  } catch (error) {
    return res.status(500).json({
      error: error.message || "Some error occured while post the data",
    });
  }
};

exports.updateOne = async (req, res) => {
  try {
    const { studentId } = req.params;
    // Validate Request

    const student = await Student.findOneAndUpdate(
      { _id: studentId },
      req.body,
      { new: true }
    );
    if (!student) {
      return res.status(400).send("student with this id does not exists");
    }
    return res.status(200).json({ student });
  } catch (error) {
    return res.status(500).json({
      error:
        error.message || "Some error occured while updating the student data",
    });
  }
};

exports.deleteOne = async (req, res) => {
  try {
    const { studentId } = req.params;

    // Validate Request
    const student = await Student.findOneAndDelete({ _id: studentId });
    if (!student) {
      return res.status(400).send("student with this id does not exists");
    }
    return res.status(200).json({ message: "SUCCESS" });
  } catch (error) {
    return res.status(500).json({
      error:
        error.message || "Some error occured while deleting the student data",
    });
  }
};
