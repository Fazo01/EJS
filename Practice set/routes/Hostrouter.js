const path = require("path");
const express = require("express");
const rootDir = require("../utils/pathutils");
const hostrouter = express.Router();
hostrouter.get("/add-home", (req, res, next) => {
  console.log(req.url, req.method);
  res.render("addHome", { pageTitle: "Add Home" }); //Important to change in partial
});
const registeredHomes = [];//to store input data

hostrouter.post("/add-home", (req, res, next) => {
  console.log(req.body, req.body.houseName); //parcel
  registeredHomes.push({
    houseName: req.body.houseName,
    price_per_night: req.body.price_per_night,
    location: req.body.location,
    pic:req.body.location,
  });
  res.render("homeadd", { pageTitle: "Home Add" }); //Important to change in partial
});
exports.hostrouter = hostrouter;
exports.registeredHomes = registeredHomes;
