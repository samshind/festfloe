const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

// Routes
app.use("/register", require("./routes/register"));
app.use("/admin", require("./routes/admin"));
app.use("/qr", require("./routes/qr"));

// Serve homepage
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "festflow.html"));
});

// Render requires PORT from environment
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
