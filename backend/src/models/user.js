const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
});

userSchema.pre("save", hashedPassword);

function hashedPassword(next) {
  const user = this;
  if (!user.password) return next();

  if (!user.isModified("password")) return next();

  bcrypt.genSalt(10, function (err, salt) {
    if (err) return next(err);

    bcrypt.hash(user.password, salt, function (err, hash) {
      if (err) return next(err);
      user.password = hash;
      next();
    });
  });
}

userSchema.method("generateToken", function () {
  const token = jwt.sign(
    { id: this._doc._id, email: this._doc.email, name: this._doc.name },
    "here is secret"
  );
  return token;
});

userSchema.method("comparePassword", async function (password) {
  return bcrypt.compare(password, this.password);
});

const User = mongoose.model("Users", userSchema);
module.exports = User;
