const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

/* ================= DATABASE ================= */
mongoose
  .connect("mongodb://127.0.0.1:27017/music")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

/* ================= SCHEMA ================= */
const songSchema = new mongoose.Schema({
  Songname: String,
  Film: String,
  Music_director: String,
  singer: String,
  Actor: String,
  Actress: String,
});

const Song = mongoose.model("Song", songSchema);

/* ================= INSERT 5 SONGS ================= */
app.get("/insert", async (req, res) => {
  await Song.insertMany([
    {
      Songname: "Tum Hi Ho",
      Film: "Aashiqui 2",
      Music_director: "Mithoon",
      singer: "Arijit",
    },
    {
      Songname: "Kesariya",
      Film: "Brahmastra",
      Music_director: "Pritam",
      singer: "Arijit",
    },
    {
      Songname: "Kal Ho Na Ho",
      Film: "KHNH",
      Music_director: "Shankar",
      singer: "Sonu",
    },
    {
      Songname: "Tujh Mein Rab Dikhta",
      Film: "RNBDJ",
      Music_director: "Salim",
      singer: "Roop Kumar",
    },
    {
      Songname: "Channa Mereya",
      Film: "ADHM",
      Music_director: "Pritam",
      singer: "Arijit",
    },
  ]);

  res.send("5 Songs Inserted");
});

/* ================= DISPLAY ALL + COUNT ================= */
app.get("/songs", async (req, res) => {
  const songs = await Song.find();
  const count = await Song.countDocuments();

  res.json({ count, songs });
});

/* ================= FILTER BY MUSIC DIRECTOR ================= */
app.get("/director/:name", async (req, res) => {
  const songs = await Song.find({ Music_director: req.params.name });

  res.json(songs);
});

/* ================= FILTER DIRECTOR + SINGER ================= */
app.get("/filter", async (req, res) => {
  const { director, singer } = req.query;

  const songs = await Song.find({
    Music_director: director,
    singer: singer,
  });

  res.json(songs);
});

/* ================= DELETE SONG ================= */
app.get("/delete/:name", async (req, res) => {
  await Song.deleteOne({ Songname: req.params.name });

  res.send("Song Deleted");
});

/* ================= ADD NEW SONG ================= */
app.post("/add", async (req, res) => {
  const song = new Song(req.body);
  await song.save();

  res.send("Song Added");
});

/* ================= FILTER BY SINGER + FILM ================= */
app.get("/film-singer", async (req, res) => {
  const { singer, film } = req.query;

  const songs = await Song.find({
    singer: singer,
    Film: film,
  });

  res.json(songs);
});

/* ================= UPDATE (ADD ACTOR & ACTRESS) ================= */
app.get("/update/:name", async (req, res) => {
  await Song.updateOne(
    { Songname: req.params.name },
    { $set: { Actor: "Ranbir Kapoor", Actress: "Alia Bhatt" } },
  );

  res.send("Song Updated");
});

/* ================= DISPLAY TABLE ================= */
app.get("/table", async (req, res) => {
  const songs = await Song.find();

  let html = `
    <h2>Song Details</h2>
    <table border="1" cellpadding="10">
    <tr>
        <th>Song</th>
        <th>Film</th>
        <th>Director</th>
        <th>Singer</th>
        <th>Actor</th>
        <th>Actress</th>
    </tr>
    `;

  songs.forEach((s) => {
    html += `
        <tr>
            <td>${s.Songname}</td>
            <td>${s.Film}</td>
            <td>${s.Music_director}</td>
            <td>${s.singer}</td>
            <td>${s.Actor || "-"}</td>
            <td>${s.Actress || "-"}</td>
        </tr>
        `;
  });

  html += "</table>";

  res.send(html);
});

/* ================= START SERVER ================= */
app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
