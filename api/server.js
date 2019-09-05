const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = 4040;
const cors = require("cors");
const mongoose = require("mongoose");
const config = require("./DB.js");

//endpoints
const businessRoute = require("./business.route");
const projectRoute = require("./project.route");
const formRoute = require("./form.route");

mongoose.Promise = global.Promise;
mongoose.connect(config.DB, { useNewUrlParser: true }).then(
  () => {
    console.log("Database is connected!!!");
  },
  err => {
    console.log("Can not connect to the database" + err);
  }
);

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/business", businessRoute);
app.use("/project", projectRoute);
app.use("/form", formRoute);

app.listen(PORT, function() {
  console.log("Server is running on Port:", PORT);
});
