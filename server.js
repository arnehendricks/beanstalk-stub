
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var bcrypt = require("bcrypt");//for user auth stuff
const cors = require("cors");

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use(
  cors({
    origin: "*",
    credentials: true
  })
);

app.use(bodyParser.json());

var port = process.env.PORT || 8080;
var router = express.Router();


router.route("/test").get(function(req, res) {
    res.json({
      success: true,
      message: "Yay it worked"
    });
});

app.use("/api", router);
app.listen(port);

console.log("Server listening on port " + port);

async function verify(some_str) {
  console.log(some_str);
}
