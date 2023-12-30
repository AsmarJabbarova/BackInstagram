const express = require("express");
require("dotenv").config();
require("./src/config/db");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 4000;
const routes = require("./src/routers/userRouters");
const productsRouter = require("./src/routers/productRouters");
app.use(bodyParser.json());
app.use(cors());
app.get("/", (req, res) => {
  res.send("Salam");
});

app.use("/", routes);
app.use("/products", productsRouter);
// app.get("/", (req, res) => {
//   res.send("<h1>Users</h1><br.><h1>Products</h1>");
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
