const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

/* ================= DB ================= */
mongoose
  .connect("mongodb://127.0.0.1:27017/employeeDB")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

/* ================= SCHEMA ================= */
const employeeSchema = new mongoose.Schema({
  name: String,
  department: String,
  designation: String,
  salary: Number,
  joining_date: String,
});

const Employee = mongoose.model("Employee", employeeSchema);

/* ================= ADD EMPLOYEE ================= */
app.post("/add", async (req, res) => {
  const emp = new Employee(req.body);
  await emp.save();

  res.send("Employee Added");
});

/* ================= VIEW ALL ================= */
app.get("/employees", async (req, res) => {
  const employees = await Employee.find();
  res.json(employees);
});

/* ================= UPDATE ================= */
app.put("/update/:id", async (req, res) => {
  await Employee.findByIdAndUpdate(req.params.id, req.body);

  res.send("Employee Updated");
});

/* ================= DELETE ================= */
app.delete("/delete/:id", async (req, res) => {
  await Employee.findByIdAndDelete(req.params.id);

  res.send("Employee Deleted");
});

/* ================= TABLE VIEW (OPTIONAL BONUS) ================= */
app.get("/table", async (req, res) => {
  const employees = await Employee.find();

  let html = `
    <h2>Employee Records</h2>
    <table border="1" cellpadding="10">
    <tr>
        <th>Name</th>
        <th>Department</th>
        <th>Designation</th>
        <th>Salary</th>
        <th>Joining Date</th>
    </tr>
    `;

  employees.forEach((e) => {
    html += `
        <tr>
            <td>${e.name}</td>
            <td>${e.department}</td>
            <td>${e.designation}</td>
            <td>${e.salary}</td>
            <td>${e.joining_date}</td>
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
