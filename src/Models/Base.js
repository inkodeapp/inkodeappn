const { Schema, model } = require("mongoose");

const Base = new Schema(
  {
    nombre: String,
    apellido: String,
    edad: Number,
  },
  { timestamps: true }
);

module.exports = model("Control", Base);
