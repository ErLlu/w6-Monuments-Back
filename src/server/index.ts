import express from "express";

export const app = express();

app.listen(8000, () => {
  console.log("Server listening on 'http://localhost:8000/'");
});

export default app;
