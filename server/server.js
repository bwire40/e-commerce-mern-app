// create express server using app

const cookieParser = require("cookie-parser");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// create a database connection-> you can also create a separate file for this
const username = encodeURIComponent("emmanuelbwire80");
const password = encodeURIComponent("Bwire@_25");
mongoose
  .connect(`mongodb+srv://${username}:${password}@cluster0.w8ic5.mongodb.net/`)
  .then(() => console.log("MongoDB connected succesfully!"))
  .catch((e) => console.log("An Error Occured!", e));

// set port for the server
const PORT = process.env.PORT || 5000;

// specify what the app will use

/**
 * cors[cross origin resource sharing]->enables communication between the backend and the frontend
 *  options used in cors, origin->allows requests from specified origins.
 */
app.use(
  cors({
    origin: "http://localhost:3000/",
    methods: ["get", "post", "delete", "put"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Cache-Control",
      "Expires",
      "Pragma",
    ],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());

// run server by listening to connections useing listen method
app.listen(PORT, () => console.log(`Server is now running on port ${PORT}...`));
