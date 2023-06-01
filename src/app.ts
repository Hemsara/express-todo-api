import routes from "./router.js";
import express from "express";

const app = express();
const port = 3000;

app.set(port);
app.use(routes);

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
