const express = require("express");
const placeController = require("../controllers/place");
const isAuth = require("../middleware/is-auth");

const router = express.Router();

router.post("/", isAuth, placeController.places);
router.get("/", isAuth, placeController.getUserPlaces);
router.get("/:id", isAuth, placeController.placeDetail);
router.put("/:id", isAuth, placeController.updatePlace);

module.exports = router;
