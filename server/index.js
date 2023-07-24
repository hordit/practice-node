const express = require("express");
const morgan = require("morgan");
const app = express();

const { router } = require("./booksRouter");

const PORT = 8081;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(morgan("tiny"));
app.use("/api", router);

app.post("/home", (req, res) => {
  if (!req.body.goit) {
    res.status(400).json({ status: "goit parametr is required" });
  }
  res.json({ javascript: "object!", body: req.body });
});

app.listen(PORT, (err) => {
  if (err) console.error("Error at server launch", err);
  console.log(`Server works at port ${PORT}!`);
});
