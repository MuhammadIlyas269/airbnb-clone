const express = require("express");
const multer = require("multer");

const authRoutes = require("./auth");
const placeRoutes = require("./place");
const placeController = require("../controllers/place");

const router = express.Router();
const photoMiddleware = multer({ dest: "src/uploads" });

router.use("/", authRoutes);
router.post("/upload-by-link", placeController.downloadImage);
router.post(
  "/upload",
  photoMiddleware.array("photos", 100),
  placeController.uploadImage
);
router.use("/places", placeRoutes);

module.exports = router;
