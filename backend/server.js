const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;
app.use(cors());
app.use(express.json());
const getProducts = require("./ApiRoutes/ProductRoutes");
app.use(getProducts);

app.listen(PORT, () =>
  console.log(`🚀 Server running on http://localhost:${PORT}`)
);
