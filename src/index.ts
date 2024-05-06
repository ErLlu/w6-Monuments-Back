import express from "express";

const app = express();

app.listen(4000, () => {
  console.log("Server listening on 'http://localhost:4000/'");
});
