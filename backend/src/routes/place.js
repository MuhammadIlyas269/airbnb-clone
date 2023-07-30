const express = require("express");
const placeController = require("../controllers/place");
const isAuth = require("../middleware/is-auth");

const router = express.Router();

router.post("/", isAuth, placeController.places);

module.exports = router;
