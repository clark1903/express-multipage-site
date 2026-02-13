const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

// serve static files (CSS, images, JS) from /public
app.use(express.static(path.join(__dirname, "public")));

// routes to HTML files in /views
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "about.html"));
});

app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "contact.html"));
});
// blog page
app.get("/blog", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "blog.html"));
});

// API route that sends JSON
app.get("/api/posts", (req, res) => {
  res.sendFile(path.join(__dirname, "data", "posts.json"));
});


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
