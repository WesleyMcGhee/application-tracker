const express = require("express");
const cors = require("cors");
const app = express();
const ctrl = require("./controller");
const port = 8000;

app.use(express.json());
app.use(cors());

app.listen(port, () =>
  console.log(`Server is up and running on port ${port}...`)
);
