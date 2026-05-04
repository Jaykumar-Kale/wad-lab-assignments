const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

/* ================= DB ================= */
mongoose
  .connect("mongodb://127.0.0.1:27017/bookDB")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

/* ================= SCHEMA ================= */
const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  price: Number,
  genre: String,
});

const Book = mongoose.model("Book", bookSchema);

/* ================= ADD BOOK ================= */
app.post("/add", async (req, res) => {
  const book = new Book(req.body);
  await book.save();

  res.send("Book Added");
});

/* ================= VIEW ALL ================= */
app.get("/books", async (req, res) => {
  const books = await Book.find();
  res.json(books);
});

/* ================= UPDATE ================= */
app.put("/update/:id", async (req, res) => {
  await Book.findByIdAndUpdate(req.params.id, req.body);

  res.send("Book Updated");
});

/* ================= DELETE ================= */
app.delete("/delete/:id", async (req, res) => {
  await Book.findByIdAndDelete(req.params.id);

  res.send("Book Deleted");
});

/* ================= TABLE VIEW (BONUS FOR EXAM) ================= */
app.get("/table", async (req, res) => {
  const books = await Book.find();

  let html = `
    <h2>Book Store</h2>
    <table border="1" cellpadding="10">
    <tr>
        <th>Title</th>
        <th>Author</th>
        <th>Price</th>
        <th>Genre</th>
    </tr>
    `;

  books.forEach((b) => {
    html += `
        <tr>
            <td>${b.title}</td>
            <td>${b.author}</td>
            <td>${b.price}</td>
            <td>${b.genre}</td>
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
