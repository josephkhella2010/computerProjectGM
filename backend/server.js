const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;
app.use(cors());
app.use(express.json());
/* const getProducts = require("./ApiRoutes/ProductRoutes");
app.use(getProducts); */
app.use("/api", require("./ApiRoutes/ProductRoutSqlite"));
app.get("/test", (req, res) => res.send("Server is running!"));

app.listen(PORT, () =>
  console.log(`🚀 Server running on http://localhost:${PORT}`)
);
