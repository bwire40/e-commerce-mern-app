// create express server using app

const cookieParser = require("cookie-parser");
const express = require("express");
const mongoose = require("mongoose"); //helps connect to mongo db
const cors = require("cors");

// create a database connection-> you can also create a separate file for this and import it here
const username = encodeURIComponent("emmanuelbwire80");
const password = encodeURIComponent("Bwire@_25");
mongoose
  .connect(`mongodb+srv://${username}:${password}@cluster0.w8ic5.mongodb.net/`)
  .then(() => console.log("MongoDB connected succesfully!"))
  .catch((e) => console.log("An Error Occured!", e));

const app = express(); //create an express application
// set port for the server
const PORT = process.env.PORT || 5000;

// specify what the app will use

/**
 * cors[cross origin resource sharing]->enables communication between the backend and the frontend
 *  options used in cors, origin->allows requests from specified origins.
 */
app.use(
  //use cors
  cors({
    origin: "http://localhost:3000/",
    methods: ["get", "post", "delete", "put"], //methods youll use
    allowedHeaders: [
      //headers you will use
      "Content-Type",
      "Authorization",
      "Cache-Control",
      "Expires",
      "Pragma",
    ],
    credentials: true, //well use credentilas for resister and logg users
  })
);

app.use(cookieParser()); //use cookieparser
app.use(express.json()); //use express json

// run server by listening to connections useing listen method
app.listen(PORT, () => console.log(`Server is now running on port ${PORT}...`));
