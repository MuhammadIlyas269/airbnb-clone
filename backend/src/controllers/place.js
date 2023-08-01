const download = require("image-downloader");
const fs = require("fs");
const db = require("../models");

async function downloadImage(req, res) {
  try {
    const { link } = req.body;
    const newName = Date.now() + ".jpg";
    const path =
      "D:/React JS/clones/airbnb-clone/backend/src/uploads/" + newName;
    await download.image({
      url: link,
      dest: path,
    });

    return res.status(200).json({
      message: "success",
      filename: newName,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}

async function uploadImage(req, res) {
  try {
    const uploadedFiles = [];
    for (let i = 0; i < req.files.length; i++) {
      const { path, originalname, filename } = req.files[i];
      const ext = originalname.split(".")[1];
      const newPath = path + "." + ext;
      fs.renameSync(path, newPath);
      uploadedFiles.push(`${filename}.${ext}`);
    }
    return res.status(200).json({ message: "success", data: uploadedFiles });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
}

async function places(req, res) {
  try {
    const data = req.body;
    const id = req.user.id;
    const placeObj = await db.Place.create({
      owner: id,
      ...data,
    });
    return res.status(200).json({
      message: "success",
      data: placeObj,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}

async function placesList(req, res) {
  try {
    const places = await db.Place.find({});
    return res.status(200).json({
      message: "success",
      data: places,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
async function getUserPlaces(req, res) {
  try {
    const id = req.user.id;
    const places = await db.Place.find({ owner: id });
    return res.status(200).json({
      message: "success",
      data: places,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}

async function placeDetail(req, res) {
  try {
    const { id } = req.params;
    const place = await db.Place.findById(id);
    return res.status(200).json({
      message: "success",
      data: place,
    });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
}

async function updatePlace(req, res) {
  try {
    const { id } = req.params;
    const userId = req.user.id;

    const placeObj = await db.Place.findById(id);

    if (placeObj.owner.toString() !== userId) {
      return res.status(400).json({ message: "only owner can update a place" });
    }

    placeObj.set(req.body);
    await placeObj.save();

    return res.status(200).json({
      message: "success",
    });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
}

async function placeBooking(req, res) {
  try {
    const data = req.body;
    const user = req.user.id;
    const booking = await db.Booking.create({
      user,
      ...data,
    });
    return res.status(200).json({
      message: "success",
      data: booking,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}

async function userBookings(req, res) {
  try {
    const id = req.user.id;

    const bookings = await db.Booking.find({ user: id }).populate("place");

    return res.status(200).json({
      message: "success",
      data: bookings,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
module.exports = {
  downloadImage,
  uploadImage,
  places,
  getUserPlaces,
  placeDetail,
  updatePlace,
  placesList,
  placeBooking,
  userBookings,
};
