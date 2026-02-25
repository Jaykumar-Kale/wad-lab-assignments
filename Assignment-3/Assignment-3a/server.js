const http = require("http");
const url = require("url");
const fs = require("fs");
const path = require("path");

const PORT = 3000;

const server = http.createServer((req, res) => {

    const parsedUrl = url.parse(req.url);
    let pathname = parsedUrl.pathname;

    if (pathname === "/") {
        pathname = "/index.html";
    }

    const filePath = path.join(__dirname, "public", pathname);

    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(404, { "Content-Type": "text/html" });
            res.end("<h1>404 - Page Not Found</h1>");
            return;
        }

        const ext = path.extname(filePath).toLowerCase();
        let contentType = "text/html";

        const mimeTypes = {
            ".html": "text/html",
            ".css": "text/css",
            ".js": "text/javascript",
            ".jpg": "image/jpeg",
            ".png": "image/png",
            ".json": "application/json"
        };

        contentType = mimeTypes[ext] || "application/octet-stream";

        res.writeHead(200, { "Content-Type": contentType });
        res.end(data);
    });

});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});