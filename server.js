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

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
