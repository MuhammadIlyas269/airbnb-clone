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
module.exports = { downloadImage, uploadImage, places };
