import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello Fergus!");
});

app.get("/about", (req, res) => {
  res.send("This is what its all about!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
