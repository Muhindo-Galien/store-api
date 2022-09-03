const express = require('express');
const { getAllProducts, getAllProductStatic } = require('../controllers/products');
const router = express.Router();


router.route("/static").get(getAllProductStatic);
router.route("/").get(getAllProducts);



module.exports = router