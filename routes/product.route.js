//ເອີ້ນໃຊ້ງານໂມດູລ express
const express = require("express");
const { getAllProducts } = require("../controllers/product.controller");

//ເອີ້ນໃຊ້ງານ ເຣົ້າເຕີ້
const router = express.Router();

//ສ້າງ endpoint
router.route("/").get(getAllProducts);

// ສົ່ງອອກໂມດູລທີ່ຊື່ວ່າ router
module.exports = router;
