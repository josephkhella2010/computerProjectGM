const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();

app.use(cors());
app.use(express.json());
/*
 const getProducts = require("./ApiRoutes/ProductRoutes");
app.use(getProducts); 
app.use("/api", require("./ApiRoutes/ProductRoutSqlite"));
app.get("/test", (req, res) => res.send("Server is running!"));
*/

app.use("/api/send-email", require("./ApiRoutes/sendEmail"));

const PORT = process.env.PORT || 3100;

app.listen(PORT, () =>
  console.log(
    `🚀 Server running on http://localhost:${process.env.PORT || 3100}`,
  ),
);
