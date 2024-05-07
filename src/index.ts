import { app } from "./server/PingController/app.js";

app.listen(8000, () => {
  console.log("Server listening on 'http://localhost:8000/'");
});
