# Assignment 3a – Static Web Server using Node.js

## Title
Static Web Server

## Problem Statement
Create a Node.js application which serves a static website.  
Use necessary modules like http, url, fs, path etc. for creation of server and file operations on server side.

---

## Objective
- To understand server-side programming using Node.js.
- To use core Node modules (http, fs, url, path).
- To serve static HTML, CSS, images from a folder.
- To understand MIME types and HTTP response handling.
- To implement basic routing and 404 error handling.

---

## Technologies Used
- Node.js
- HTML5
- CSS3
- VS Code
- Browser (Chrome)

---

## Project Structure

Assignment-3a/
│
├── public/
│   ├── index.html
│   ├── about.html
│   ├── style.css
│   └── asset.jpg
│
├── server.js
├── package.json

---

## Core Node Modules Used

### 1. http
Used to create the web server.

### 2. fs (File System)
Used to read files from disk.

### 3. url
Used to parse the incoming request URL.

### 4. path
Used to safely construct file paths.

---

## Steps to Implement

### Step 1: Initialize Node Project

```bash
npm init -y
```

This creates package.json file.

---

### Step 2: Create Public Folder

All static files (HTML, CSS, Images) are stored inside public/ folder.

---

### Step 3: Create server.js

```js
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

        const mimeTypes = {
            ".html": "text/html",
            ".css": "text/css",
            ".js": "text/javascript",
            ".jpg": "image/jpeg",
            ".png": "image/png",
            ".json": "application/json"
        };

        const contentType = mimeTypes[ext] || "application/octet-stream";

        res.writeHead(200, { "Content-Type": contentType });
        res.end(data);

    });

});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
```

---

## Explanation of Working

1. Client sends request (e.g. / or /about.html).
2. Server parses URL using url module.
3. If path is "/", server loads index.html.
4. path module constructs safe file path inside public folder.
5. fs.readFile reads file from disk.
6. Server sets correct Content-Type using MIME mapping.
7. If file not found → returns 404 error.
8. Browser displays requested file.

---

## How to Run

```bash
node server.js
```

Open browser:

```
http://localhost:3000
```

---

## Output

- Home page served at /
- About page served at /about.html
- CSS styling loaded correctly
- Image loaded correctly
- 404 page shown for invalid route

---

## HTTP Flow (Conceptual Understanding for Viva)

Browser → HTTP Request → Node Server  
Node Server → Read File using fs → Set MIME Type → Send Response  
Browser → Render HTML/CSS/Image

---

## Key Concepts Learned

- Creation of HTTP server
- Handling client requests
- Serving static files
- MIME type handling
- File system operations
- Basic routing logic
- Error handling (404 response)

---

## Advantages of Static Web Server

- Lightweight
- Fast response
- Simple implementation
- No database required
- Good for hosting frontend files

---

## Conclusion

Thus, we successfully created a Node.js static web server using core modules (http, fs, url, path). The server is capable of serving static HTML pages, CSS files, and images, and handles 404 errors properly. This demonstrates understanding of server-side file operations and HTTP response handling in Node.js.

---