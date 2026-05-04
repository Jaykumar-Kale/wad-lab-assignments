const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  let filePath = "./public" + req.url;

  if (filePath === "./public/") {
    filePath = "./public/index.html";
  }

  let ext = path.extname(filePath);

  let contentType = "text/html";

  if (ext === ".css") contentType = "text/css";
  if (ext === ".jpg") contentType = "image/jpeg";

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end("Not Found");
    } else {
      res.writeHead(200, { "Content-Type": contentType });
      res.end(data);
    }
  });
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
