const Control = {};
require("../../database");
const Base = require("../Models/Base");

Control.obtener = async (req, res) => {
  const consulta = await Base.find();
  res.send(consulta);
};

Control.Crear = async (req, res) => {
  const { nombre, apellido, edad } = req.body;
  const nuevoRegistro = new Base({
    nombre: nombre,
    apellido: apellido,
    edad: edad,
  });
  await nuevoRegistro.save();
  res.json(nuevoRegistro);
};

module.exports = Control;
