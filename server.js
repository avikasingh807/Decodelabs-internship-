const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send("Backend Running 🚀");
});

app.get("/api/data", (req, res) => {
  res.json({
    name: "Avika",
    role: "Full Stack Developer"
  });
});

app.listen(3000, () => {
  console.log("Server started on http://localhost:3000");
});