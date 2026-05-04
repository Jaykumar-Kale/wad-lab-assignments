const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

/* ================= DB ================= */
mongoose
  .connect("mongodb://127.0.0.1:27017/student")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

/* ================= SCHEMA ================= */
const studentSchema = new mongoose.Schema({
  Name: String,
  Roll_No: Number,
  WAD_Marks: Number,
  CC_Marks: Number,
  DSBDA_Marks: Number,
  CNS_Marks: Number,
  AI_marks: Number,
});

const Student = mongoose.model("Student", studentSchema);

/* ================= INSERT ================= */
app.get("/insert", async (req, res) => {
  await Student.insertMany([
    {
      Name: "Jay",
      Roll_No: 1,
      WAD_Marks: 25,
      CC_Marks: 22,
      DSBDA_Marks: 24,
      CNS_Marks: 23,
      AI_marks: 21,
    },
    {
      Name: "Rahul",
      Roll_No: 2,
      WAD_Marks: 18,
      CC_Marks: 20,
      DSBDA_Marks: 15,
      CNS_Marks: 17,
      AI_marks: 19,
    },
    {
      Name: "Sneha",
      Roll_No: 3,
      WAD_Marks: 28,
      CC_Marks: 26,
      DSBDA_Marks: 27,
      CNS_Marks: 25,
      AI_marks: 29,
    },
    {
      Name: "Amit",
      Roll_No: 4,
      WAD_Marks: 10,
      CC_Marks: 12,
      DSBDA_Marks: 14,
      CNS_Marks: 11,
      AI_marks: 13,
    },
    {
      Name: "Pooja",
      Roll_No: 5,
      WAD_Marks: 30,
      CC_Marks: 28,
      DSBDA_Marks: 26,
      CNS_Marks: 29,
      AI_marks: 27,
    },
  ]);

  res.send("Students Inserted");
});

/* ================= DISPLAY ALL + COUNT ================= */
app.get("/students", async (req, res) => {
  const students = await Student.find();
  const count = await Student.countDocuments();

  res.json({ count, students });
});

/* ================= >20 IN DSBDA ================= */
app.get("/dsbda20", async (req, res) => {
  const students = await Student.find({ DSBDA_Marks: { $gt: 20 } });

  res.json(students.map((s) => s.Name));
});

/* ================= UPDATE +10 MARKS ================= */
app.get("/update/:name", async (req, res) => {
  await Student.updateOne(
    { Name: req.params.name },
    {
      $inc: {
        WAD_Marks: 10,
        CC_Marks: 10,
        DSBDA_Marks: 10,
        CNS_Marks: 10,
        AI_marks: 10,
      },
    },
  );

  res.send("Marks Updated");
});

/* ================= >25 IN ALL SUBJECTS ================= */
app.get("/above25", async (req, res) => {
  const students = await Student.find({
    WAD_Marks: { $gt: 25 },
    CC_Marks: { $gt: 25 },
    DSBDA_Marks: { $gt: 25 },
    CNS_Marks: { $gt: 25 },
    AI_marks: { $gt: 25 },
  });

  res.json(students.map((s) => s.Name));
});

/* ================= <40 (LOGICAL CONDITION SIMULATION) ================= */
/* Since Maths/Science not present → use CC + CNS */
app.get("/less40", async (req, res) => {
  const students = await Student.find({
    CC_Marks: { $lt: 40 },
    CNS_Marks: { $lt: 40 },
  });

  res.json(students.map((s) => s.Name));
});

/* ================= DELETE ================= */
app.get("/delete/:name", async (req, res) => {
  await Student.deleteOne({ Name: req.params.name });

  res.send("Student Deleted");
});

/* ================= TABLE VIEW ================= */
app.get("/table", async (req, res) => {
  const students = await Student.find();

  let html = `
    <h2>Student Marks</h2>
    <table border="1" cellpadding="10">
    <tr>
        <th>Name</th>
        <th>Roll</th>
        <th>WAD</th>
        <th>CC</th>
        <th>DSBDA</th>
        <th>CNS</th>
        <th>AI</th>
    </tr>
    `;

  students.forEach((s) => {
    html += `
        <tr>
            <td>${s.Name}</td>
            <td>${s.Roll_No}</td>
            <td>${s.WAD_Marks}</td>
            <td>${s.CC_Marks}</td>
            <td>${s.DSBDA_Marks}</td>
            <td>${s.CNS_Marks}</td>
            <td>${s.AI_marks}</td>
        </tr>
        `;
  });

  html += "</table>";

  res.send(html);
});

/* ================= SERVER ================= */
app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
