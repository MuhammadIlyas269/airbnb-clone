const db = require("../models");

async function register(req, res) {
  const cleanFields = req.body;
  const userObj = new db.User({
    ...cleanFields,
  });
  const user = await userObj.save();
  return res.status(201).json({ message: "success" });
}

//POST: /auth/login
async function login(req, res) {
  let existingUser;
  try {
    const cleanFields = req.body;
    existingUser = await db.User.findOne({ email: cleanFields.email });

    if (!existingUser)
      return res.status(400).json({ message: "User not exist" });

    const isMatched = await existingUser.comparePassword(cleanFields.password);
    if (!isMatched)
      return res.status(404).json({ message: "Email or password is invalid" });

    const token = existingUser.generateToken();
    return res.status(200).cookie("token", token).json({
      message: "Login Successfully..",
      user: existingUser,
      token: token,
    });
  } catch (e) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
}

async function userProfile(req, res) {
  try {
    const user = req.user;

    return res.status(200).json({ message: "success", user });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
module.exports = { register, login, userProfile };
