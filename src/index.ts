import express from "express";

const app = express();

app.listen(8000, () => {
  console.log("Server listening on 'http://localhost:8000/'");
});

app.use((_req, res) => {
  res.status(404).json({ error: "page not found" });
});
