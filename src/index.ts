import express from "express";

const app = express();

app.listen(4000, () => {
  console.log("Server listening on 'http://localhost:4000/'");
});

app.use((_req, res) => {
  res.status(404).json({ error: "page not found" });
});
