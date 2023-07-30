const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const allRoutes = require("./routes");

const app = express();

// Allow requests from a specific origin
const allowedOrigins = ["http://127.0.0.1:5173", "http://localhost:5173"];

// Set up CORS options
const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
};

//Middleware
app.use(express.json());
app.use(cors(corsOptions)); // Enable CORS for all routes
app.use(cookieParser());
app.use("/uploads", express.static(__dirname + "/uploads"));

//Routes
app.use("/", allRoutes);

// Db connect
mongoose
  .connect(
    "mongodb+srv://muhammadilyas:523221ali@nodejs-cluster.iu8pnvx.mongodb.net/airbnb?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("DB Connected");
    app.listen(8000);
  })
  .catch((err) => {
    console.log(err);
  });
