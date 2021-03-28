const mongoose = require("mongoose");

mongoose
  .connect(process.env.db, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then((db) => console.log("db is online"))
  .catch((e) => console.log(e));

module.exports = mongoose;
