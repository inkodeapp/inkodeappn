require("dotenv").config();
const express = require("express");
const app = express();
const cors = require('cors')
const morgan = require("morgan");
const router = require("./src/Routes/Route");

app.set("port", process.env.PORT || 80);
app.use(morgan("dev"));
app.use(cors())

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", router);

app.listen(app.get("port"), () => {
  console.log("Servidor Activo", app.get("port"));
});
