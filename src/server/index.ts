import "dotenv/config";
import express from "express";
import chalk from "chalk";

export const app = express();

const port = process.env.PORT ?? 8000;

app.listen(port, () => {
  console.log(chalk.blue(`Listening on ${"http://localhost:" + port}`));
});

export default app;
