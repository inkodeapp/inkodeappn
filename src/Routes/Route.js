const { Router } = require("express");
const router = Router();
require("../../database");
const control = require("../Controllers/Control");

router.get("/", control.obtener);
router.post("/", control.Crear);

module.exports = router;
