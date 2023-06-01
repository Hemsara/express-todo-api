import routes from "./router.js";
import express from "express";
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

app.set(port);
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(routes);

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
