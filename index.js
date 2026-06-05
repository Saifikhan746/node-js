// Here we are building the basic Node.js application so we can practice teh concepts of CI/CD
const express = require("express");
const app = express();
app.use(express.json());
app.get("/", (req, res) => {
  res.json({ message: "Hi from EFAULT" });
});
app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
